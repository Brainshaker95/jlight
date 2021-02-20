const jLightGlobalElements = [];
const jLightGlobalData = [];

export const noop = () => {};

export const uuid = () => Math.random().toString(36).substr(2, 9);

export const ucfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isSameObject = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

export const preventEvent = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
};

export const dashCaseToCamelCase = (string) => (typeof string === 'string'
  ? string.replace(/-([a-z])/g, (chars) => chars[1].toUpperCase())
  : '');

export const camelCaseToDashCase = (string) => (typeof string === 'string'
  ? string.replace(/([a-z][A-Z])/g, (char) => `${char[0]}-${char[1].toLowerCase()}`)
  : '');

export const ajax = (opts = {}) => {
  const options = {
    url: window.location.href,
    method: 'POST',
    data: {},
    headers: {},
    processData: true,
    crossDomain: false,
    contentType: 'application/x-www-form-urlencoded',
    async: true,
    username: null,
    password: null,
    done: noop,
    fail: noop,
    always: noop,
    abort: noop,
    xhr: () => new XMLHttpRequest(),
    ...opts,
  };

  const request = options.xhr();
  const { headers } = options;
  let { data } = options;

  options.method = options.method.toUpperCase();

  if (!options.crossDomain && !headers['X-Requested-With']) {
    headers['X-Requested-With'] = 'XMLHttpRequest';
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = options.contentType;
  }

  if (headers['Content-Type'] === false) {
    delete headers['Content-Type'];
  }

  if (options.processData) {
    if (headers['Content-Type'] === 'application/json') {
      data = JSON.stringify(data);
    } else if (data && typeof data === 'object') {
      const params = [];

      Object.entries(options.data).forEach(([theKey, value]) => {
        const key = theKey;

        if (Array.isArray(value)) {
          value.forEach((item) => {
            params.push(`${key}[]=${item}`);
          });
        } else {
          params.push(`${key}=${value}`);
        }
      });

      data = params.join('&');
    }
  }

  request.open(
    options.method,
    `${options.url}${options.method === 'GET' ? `?${data}` : ''}`,
    options.async,
    options.username,
    options.password,
  );

  Object.entries(headers).forEach(([key, value]) => {
    request.setRequestHeader(key, value);
  });

  const fail = () => options.fail(
    request.response,
    request.status,
    request,
  );

  request.onerror = fail;
  request.ontimeout = fail;
  request.onabort = options.abort;

  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status && request.status >= 200 && request.status < 300) {
        options.done(
          request.getResponseHeader('content-type') === 'application/json'
            ? JSON.parse(request.response)
            : request.response,
          request.status,
          request,
        );
      } else if (request.status) {
        fail();
      }

      options.always(
        request.response,
        request.status,
        request,
      );
    }
  };

  request.send(options.method === 'POST' ? data : null);

  return request;
};

export const get = (url, opts = {}) => ajax({
  method: 'GET',
  url,
  ...opts,
});

export const post = (url, opts = {}) => ajax({
  method: 'POST',
  url,
  ...opts,
});

const initalizeJLightElementData = (element, selector) => {
  if (jLightGlobalElements.indexOf(element) > -1) {
    return;
  }

  jLightGlobalElements.push(element);

  jLightGlobalData[jLightGlobalElements.length - 1] = {
    jLightInternal: { selector },
  };
};

const removeJLightElementData = (element) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex < 0) {
    return;
  }

  jLightGlobalElements.splice(elementIndex, 1);
  jLightGlobalData.splice(elementIndex, 1);
};

const getJlightElementData = (element) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex > -1) {
    return jLightGlobalData[elementIndex];
  }

  initalizeJLightElementData(element, element);

  return getJlightElementData(element);
};

const setJlightElementData = (element, key, value) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex > -1) {
    jLightGlobalData[elementIndex][key] = value;

    return;
  }

  initalizeJLightElementData(element, element);
  setJlightElementData(element, key, value);
};

const updateJlightElementData = (element, data) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex > -1) {
    jLightGlobalData[elementIndex] = {
      ...jLightGlobalData[elementIndex],
      ...data,
    };

    return;
  }

  initalizeJLightElementData(element, element);
  updateJlightElementData(element, data);
};

const addJLightElementEventData = (element, type, callback, realCallback) => {
  const jLightElementData = getJlightElementData(element);
  const events = jLightElementData.jLightInternal.events || [];

  events.push({
    type,
    callback,
    realCallback,
  });

  updateJlightElementData(element, {
    jLightInternal: {
      ...jLightElementData.jLightInternal,
      events,
    },
  });
};

const removeJLightElementEventData = (element, type, callback, realCallback) => {
  const jLightElementData = getJlightElementData(element);
  const events = jLightElementData.jLightInternal.events || [];

  updateJlightElementData(element, {
    jLightInternal: {
      ...jLightElementData.jLightInternal,
      events: events.filter((event) => event.type !== type
        || event.callback !== callback
        || event.realCallback !== realCallback),
    },
  });
};

const createElementsFromString = (string) => {
  const div = document.createElement('div');

  div.innerHTML = string.trim();

  const { children } = div;

  Array.from(children).forEach((theChild) => {
    let child = theChild;

    if (!(child instanceof HTMLElement)) {
      const fallbackDiv = document.createElement('div');

      fallbackDiv.textContent = child.textContent;
      child = fallbackDiv;
    }

    initalizeJLightElementData(child, child.tagName.toLowerCase());
  });

  return children;
};

const getElementsFromArgument = (argument) => {
  if (argument.elements) {
    return argument.elements;
  }

  if (typeof argument === 'string') {
    return argument.match(/<(.|\n)+>/) ? [...createElementsFromString(argument)] : [...document.querySelectorAll(argument)];
  }

  if (argument instanceof HTMLCollection || argument instanceof NodeList) {
    return [...argument];
  }

  return [argument];
};

const getPrevMatchingElement = (element, selector) => {
  const prev = element.previousElementSibling;

  if (prev && prev.matches(selector)) {
    return prev;
  }

  if (prev) {
    return getPrevMatchingElement(prev, selector);
  }

  return null;
};

const getNextMatchingElement = (element, selector) => {
  const next = element.nextElementSibling;

  if (next && next.matches(selector)) {
    return next;
  }

  if (next) {
    return getNextMatchingElement(next, selector);
  }

  return null;
};

const getClosestMatchingElement = (element, selector) => {
  const closest = element.parentElement;

  if (closest
    && closest !== document
    && closest.matches(selector)) {
    return closest;
  }

  if (closest) {
    return getClosestMatchingElement(closest, selector);
  }

  return null;
};

const canBeSeralized = (element) => (element.name
  && (element instanceof HTMLInputElement
    || element instanceof HTMLTextAreaElement
    || element instanceof HTMLSelectElement));

const addValueToJson = (element, theSerializedJson) => {
  const serializedJson = theSerializedJson;

  if (element.getAttribute('type') === 'checkbox') {
    serializedJson[element.name] = element.checked;
  } else {
    serializedJson[element.name] = element.value;
  }

  return serializedJson;
};

const getUpdateAnimationId = (element) => {
  const jLightElementData = getJlightElementData(element).jLightInternal || {};
  const animationId = uuid();

  updateJlightElementData(element, {
    jLightInternal: {
      ...jLightElementData,
      currentAnimation: animationId,
    },
  });

  return animationId;
};

const doScroll = (duration, callback, onStep) => {
  let start;

  const easing = (t) => (t < 0.5
    ? 4 * t * t * t
    : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

  const step = (timestamp) => {
    if (!start) {
      start = timestamp;
    }

    const time = timestamp - start;

    onStep(easing(Math.min(time / duration, 1)));

    if (time < duration) {
      window.requestAnimationFrame(step);
    } else if (callback) {
      callback();
    }
  };

  window.requestAnimationFrame(step);
};

const getOrSetDimension = (identifier, $elements, value) => {
  const { elements } = $elements;

  if (value !== undefined) {
    elements.forEach((theElement) => {
      const element = theElement;

      element.style[identifier] = `${value}${typeof value !== 'string' ? 'px' : ''}`;
    });

    return $elements;
  }

  const upperIdentifier = ucfirst(identifier);
  let dimension;

  elements.forEach((element) => {
    if (dimension === undefined) {
      dimension = Math.max(
        element[`client${upperIdentifier}`],
        element[`offset${upperIdentifier}`],
      );
    }
  });

  return dimension;
};

const getDimension = (identifier, elements, includeMargins) => {
  let spacingOne;
  let spacingTwo;
  let dimension;
  let functionSuffix;

  switch (identifier) {
    case 'innerWidth':
      spacingOne = 'border-left';
      spacingTwo = 'border-right';
      functionSuffix = 'Width';

      break;
    case 'innerHeight':
      spacingOne = 'border-top';
      spacingTwo = 'border-bottom';
      functionSuffix = 'Height';

      break;
    case 'outerWidth':
      spacingOne = 'margin-left';
      spacingTwo = 'margin-right';
      functionSuffix = 'Width';

      break;
    case 'outerHeight':
      spacingOne = 'margin-top';
      spacingTwo = 'margin-bottom';
      functionSuffix = 'Height';

      break;
    default:
      break;
  }

  elements.forEach((element) => {
    if (dimension) {
      return;
    }

    let spacingLeftOrTop = 0;
    let spacingRightOrBottom = 0;
    const computedStyles = window.getComputedStyle(element);
    const isInner = identifier.indexOf('inner') > -1;

    if (isInner || includeMargins) {
      const sign = isInner ? -1 : 1;

      spacingLeftOrTop = sign * parseFloat(computedStyles.getPropertyValue(spacingOne), 10);
      spacingRightOrBottom = sign * parseFloat(computedStyles.getPropertyValue(spacingTwo), 10);
    }

    dimension = Math.max(
      element[`client${functionSuffix}`],
      element[`offset${functionSuffix}`],
    ) + spacingLeftOrTop + spacingRightOrBottom;
  });

  return dimension;
};

const getOrSetTextOrHtml = (identifier, $elements, theValue) => {
  const { elements } = $elements;
  let value = theValue;

  if (value || typeof value === 'number' || typeof value === 'string' || value === null) {
    elements.forEach((theElement, index) => {
      const element = theElement;

      if (typeof value === 'function') {
        value = theValue(index, element[identifier]);
      }

      element[identifier] = value === 0 ? '0' : (value || '');
    });

    return $elements;
  }

  elements.forEach((element) => {
    if (value === undefined) {
      value = element[identifier];
    }
  });

  return value;
};

const modifyClasses = (identifier, $elements, cssString) => {
  let cssClasses = [cssString];

  if (cssString.indexOf(' ') > -1) {
    cssClasses = cssString.split(' ');
  }

  $elements.elements.forEach((element) => {
    cssClasses.forEach((cssClass) => {
      element.classList[identifier](cssClass);
    });
  });

  return $elements;
};

const prependOrAppend = (identifier, $elements, elements) => {
  const theElements = getElementsFromArgument($elements);

  elements.forEach((element) => {
    theElements.forEach((elementToInsert) => {
      if (element !== elementToInsert) {
        element[identifier](elementToInsert);
      }
    });
  });

  return elements;
};

const prependToOrAppendTo = (identifier, $elements, elements) => {
  const theElements = getElementsFromArgument($elements);

  elements.forEach((element) => {
    theElements.forEach((elementToInsertTo) => {
      if (element !== elementToInsertTo) {
        elementToInsertTo[identifier](element);
      }
    });
  });

  return elements;
};

const insertBeforeOrInsertAfter = (identifier, $elements, elements, type) => {
  const theElements = getElementsFromArgument($elements);

  elements.forEach((element) => {
    theElements.forEach((referenceElement) => {
      if (element !== referenceElement) {
        if (type === 'insert') {
          referenceElement.insertAdjacentElement(identifier, element);
        } else {
          element.insertAdjacentElement(identifier, referenceElement);
        }
      }
    });
  });

  return elements;
};

const getPrevOrNextElements = (identifier, selector, elements) => {
  const theElements = [];

  if (!selector) {
    elements.forEach((element) => {
      const theElement = element[identifier];

      if (theElement && !theElements.includes(theElement)) {
        theElements.push(theElement);
      }
    });
  } else {
    const isPrev = identifier === 'previousElementSibling';
    let theElement;

    elements.forEach((element) => {
      if (isPrev) {
        theElement = getPrevMatchingElement(element, selector);
      } else {
        theElement = getNextMatchingElement(element, selector);
      }

      if (theElement && !theElements.includes(theElement)) {
        theElements.push(theElement);
      }
    });
  }

  return theElements;
};

const getScrollWidthOrScrollHeight = (identifier, elements) => {
  let dimension;

  elements.forEach((element) => {
    if (dimension === undefined) {
      dimension = element[identifier];
    }
  });

  return dimension;
};

const getOrSetScrollTopOrScrollLeft = (identifier, value, $elements) => {
  const { elements } = $elements;

  if (value !== undefined) {
    elements.forEach((theElement) => {
      const element = theElement;

      element[identifier] = parseFloat(value, 10);
    });

    return $elements;
  }

  let scrollValue;

  elements.forEach((element) => {
    if (scrollValue === undefined) {
      scrollValue = element[identifier];
    }
  });

  return scrollValue;
};

const isInView = (boundingBox, offset) => boundingBox.top >= parseFloat(offset.top, 10)
  && boundingBox.left >= parseFloat(offset.left, 10)
  && boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    + parseFloat(offset.bottom, 10)
  && boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth)
    + parseFloat(offset.right, 10);

const $ = (elements) => ({
  elements,
  length: elements.filter((element) => element).length,
  addClass: (cssClass) => modifyClasses('add', $(elements), cssClass),
  removeClass: (cssClass) => modifyClasses('remove', $(elements), cssClass),
  toggleClass: (cssClass) => modifyClasses('toggle', $(elements), cssClass),
  hasClass: (cssClass) => {
    let hasClass;

    elements.forEach((element) => {
      if (hasClass === undefined) {
        hasClass = element.classList.contains(cssClass);
      }
    });

    return hasClass;
  },
  css: (property, value) => {
    if (typeof property === 'object' && property !== null) {
      elements.forEach((theElement) => {
        const element = theElement;

        Object.entries(property).forEach(([key, val]) => {
          element.style[key] = val;
        });
      });

      return $(elements);
    }

    if (value !== undefined) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.style[property] = value;
      });

      return $(elements);
    }

    const computedStyles = window.getComputedStyle(elements[0]);

    if (property) {
      return computedStyles.getPropertyValue(property);
    }

    return computedStyles;
  },
  show: (type = 'block') => {
    elements.forEach((theElement) => {
      const element = theElement;

      element.style.display = type;
    });

    return $(elements);
  },
  hide: () => {
    elements.forEach((theElement) => {
      const element = theElement;

      element.style.display = 'none';
    });

    return $(elements);
  },
  toggle: (type = 'block') => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);

      if (computedStyles.getPropertyValue('display') === 'none') {
        element.style.display = type;
      } else {
        element.style.display = 'none';
      }
    });

    return $(elements);
  },
  on: (theTypes, callbackOrSelector, delegatedCallback) => {
    // TODO: Refactor event listener functions
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    if (typeof callbackOrSelector === 'function' || callbackOrSelector === false) {
      elements.forEach((element) => {
        const callback = (theEvent) => {
          const event = theEvent;

          event.$target = $([event.target]);
          event.$currentTarget = $([event.currentTarget]);

          if (callbackOrSelector === false
            || callbackOrSelector(event, event.jLightEventData) === false
            || delegatedCallback === false) {
            preventEvent(event);
          }
        };

        types.forEach((type) => {
          addJLightElementEventData(element, type, callbackOrSelector, callback);
          element.addEventListener(type, callback);
        });
      });
    } else {
      types.forEach((type) => {
        elements.forEach((element) => {
          const callback = (theEvent) => {
            const event = theEvent;

            if (element.contains(event.target) && event.target.matches(callbackOrSelector)) {
              event.$target = $([event.target]);
              event.$currentTarget = $([event.currentTarget]);

              if (delegatedCallback === false
                || delegatedCallback(event, event.jLightEventData) === false) {
                preventEvent(event);
              }
            }
          };

          document.addEventListener(type, callback);
        });
      });
    }

    return $(elements);
  },
  once: (theTypes, callbackOrSelector, delegatedCallback) => {
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    if (typeof callbackOrSelector === 'function' || callbackOrSelector === false) {
      elements.forEach((element) => {
        const callback = (theEvent) => {
          const event = theEvent;

          event.$target = $([event.target]);
          event.$currentTarget = $([event.currentTarget]);

          if (callbackOrSelector === false
            || callbackOrSelector(event, event.jLightEventData) === false
            || delegatedCallback === false) {
            preventEvent(event);
          }

          types.forEach((type) => {
            element.removeEventListener(type, callback);
          });
        };

        types.forEach((type) => {
          element.addEventListener(type, callback);
        });
      });
    } else {
      elements.forEach((element) => {
        const callback = (theEvent) => {
          const event = theEvent;

          if (element.contains(event.target) && event.target.matches(callbackOrSelector)) {
            event.$target = $([event.target]);
            event.$currentTarget = $([event.currentTarget]);

            if (delegatedCallback === false
              || delegatedCallback(event, event.jLightEventData) === false) {
              preventEvent(event);
            }

            types.forEach((type) => {
              document.removeEventListener(type, callback);
            });
          }
        };

        types.forEach((type) => {
          document.addEventListener(type, callback);
        });
      });
    }

    return $(elements);
  },
  off: (theTypes, callback) => {
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    elements.forEach((element) => {
      const jLightElementData = getJlightElementData(element);
      const events = jLightElementData.jLightInternal.events || [];

      types.forEach((type) => {
        events.forEach((event) => {
          if (event.type === type && event.callback === callback) {
            removeJLightElementEventData(element, type, callback, event.realCallback);
            element.removeEventListener(type, event.realCallback);
          }
        });
      });
    });

    return $(elements);
  },
  delegate: (theTypes, callback) => {
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    const realCallback = (theEvent) => {
      const event = theEvent;
      const jLightElementData = getJlightElementData(elements[0]);
      const { selector } = jLightElementData.jLightInternal;

      if (!selector) {
        return;
      }

      if (event.target.matches(selector)) {
        event.$target = $([event.target]);
        event.$currentTarget = $([event.currentTarget]);

        if (callback === false
          || callback(event, event.jLightEventData) === false) {
          preventEvent(event);
        }
      }
    };

    types.forEach((type) => {
      addJLightElementEventData(document, type, callback, realCallback);
      document.addEventListener(type, realCallback);
    });

    return $(elements);
  },
  undelegate: (theTypes, callback) => {
    const jLightElementData = getJlightElementData(document);
    const events = jLightElementData.jLightInternal.events || [];
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    types.forEach((type) => {
      events.forEach((event) => {
        if (event.type === type && event.callback === callback) {
          removeJLightElementEventData(document, type, callback, event.realCallback);
          document.removeEventListener(type, event.realCallback);
        }
      });
    });

    return $(elements);
  },
  trigger: (theTypes, jLightEventData) => {
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    types.forEach((type) => {
      const event = document.createEvent('Event');

      event.jLightEventData = jLightEventData;
      event.initEvent(type, true, true);

      elements.forEach((element) => {
        element.dispatchEvent(event);
      });

      if (type === 'focus') {
        elements[0].focus();
      } else if (type === 'blur' || type === 'focusout') {
        elements[0].blur();
      }
    });

    return $(elements);
  },
  forEach: (callback) => {
    elements.forEach((element, index) => {
      callback($([element]), index);
    });

    return $(elements);
  },
  each: (callback) => $(elements).forEach(callback),
  is: (property) => {
    let is;

    if (typeof property === 'string') {
      elements.forEach((element) => {
        if (is === undefined) {
          is = element[property];
        }
      });
    } else {
      const theElements = getElementsFromArgument(property);

      theElements.forEach((theElement) => {
        if (elements.includes(theElement)) {
          if (is === undefined) {
            is = true;
          }
        }
      });
    }

    return !!is;
  },
  prop: (property, state) => {
    if (state === undefined) {
      return elements[0][property];
    }

    elements.forEach((theElement) => {
      const element = theElement;

      if (element[property] !== undefined) {
        element[property] = state;
      }
    });

    return $(elements);
  },
  attr: (attribute, value) => {
    if (value === undefined) {
      let attr;

      elements.forEach((element) => {
        if (attr === undefined) {
          attr = element.getAttribute(attribute);
        }
      });

      return attr;
    }

    elements.forEach((element) => {
      element.setAttribute(attribute, value);
    });

    return $(elements);
  },
  removeAttr: (attribute) => {
    elements.forEach((element) => {
      element.removeAttribute(attribute);
    });

    return $(elements);
  },
  data: (theKey, value) => {
    if (typeof theKey === 'object' && theKey !== null) {
      const newData = theKey;

      if (newData.jLightInternal) {
        delete newData.jLightInternal;
      }

      elements.forEach((element) => {
        updateJlightElementData(element, { ...newData });
      });

      return $(elements);
    }

    const key = dashCaseToCamelCase(theKey);

    if (key === 'jLightInternal') {
      return {};
    }

    if (value !== undefined) {
      elements.forEach((element) => {
        setJlightElementData(element, key, value);
      });

      return $(elements);
    }

    let data;

    elements.forEach((element) => {
      if (!data) {
        const jLightElementData = getJlightElementData(element);

        if (!theKey) {
          data = jLightElementData;

          Object.entries(element.dataset).forEach(([dataKey, dataValue]) => {
            if (!data[dataKey]) {
              data[dataKey] = Number.isNaN(Number(dataValue))
                ? dataValue
                : parseFloat(dataValue, 0);
            }
          });
        } else {
          data = jLightElementData[key];

          if (data === undefined) {
            data = element.getAttribute(`data-${theKey}`)
              || element.getAttribute(`data-${key}`);

            if (!data
              && (element.hasAttribute(`data-${theKey}`)
                || element.hasAttribute(`data-${key}`))) {
              data = true;
            } else if (!Number.isNaN(Number(data))) {
              data = parseFloat(data, 10);
            }
          }
        }
      }
    });

    if (data && data.jLightInternal) {
      const newData = {};

      Object.entries(data).forEach(([dataKey, dataValue]) => {
        if (dataKey !== 'jLightInternal') {
          newData[dataKey] = dataValue;
        }
      });

      data = newData;
    }

    return data;
  },
  empty: () => {
    elements.forEach((theElement) => {
      const element = theElement;

      element.innerHTML = '';
    });

    return $(elements);
  },
  clone: (deep = true) => $(elements.map((element) => element.cloneNode(deep))),
  add: ($elements) => {
    const theElements = getElementsFromArgument($elements);
    const addedElements = [];

    theElements.forEach((referenceElement) => {
      if (referenceElement && !elements.includes(referenceElement)) {
        addedElements.push(referenceElement);
      }
    });

    return $([...elements, ...addedElements]);
  },
  remove: ($elements, removeFromDom = true) => {
    if (!$elements) {
      elements.forEach((element) => {
        element.remove();
        removeJLightElementData(element);
      });

      return null;
    }

    const remainingElements = [];
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      let wasRemoved;

      theElements.forEach((referenceElement) => {
        if (element === referenceElement) {
          wasRemoved = true;

          if (removeFromDom) {
            element.remove();
            removeJLightElementData(element);
          }
        }
      });

      if (!wasRemoved) {
        remainingElements.push(element);
      }
    });

    return $(remainingElements);
  },
  text: (text) => getOrSetTextOrHtml('textContent', $(elements), text),
  html: (html) => getOrSetTextOrHtml('innerHTML', $(elements), html),
  prepend: ($elements) => $(prependOrAppend('prepend', $elements, elements)),
  append: ($elements) => $(prependOrAppend('append', $elements, elements)),
  prependTo: ($elements) => $(prependToOrAppendTo('prepend', $elements, elements)),
  appendTo: ($elements) => $(prependToOrAppendTo('append', $elements, elements)),
  insertBefore: ($elements) => $(insertBeforeOrInsertAfter('beforeBegin', $elements, elements, 'insert')),
  insertAfter: ($elements) => $(insertBeforeOrInsertAfter('afterEnd', $elements, elements, 'insert')),
  before: ($elements) => $(insertBeforeOrInsertAfter('beforeBegin', $elements, elements)),
  after: ($elements) => $(insertBeforeOrInsertAfter('afterEnd', $elements, elements)),
  wrap: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((referenceElement) => {
        if (element !== referenceElement) {
          element.parentNode.insertBefore(referenceElement, element);
          referenceElement.appendChild(element);
        }
      });
    });

    return $(elements);
  },
  get: (index) => elements[index],
  eq: (index) => $([elements[index]]),
  first: () => $([elements[0]]),
  last: () => $([elements[elements.length - 1]]),
  parent: () => {
    const parents = [];

    elements.forEach(({ parentElement }) => {
      if (!parents.includes(parentElement)) {
        parents.push(parentElement);
      }
    });

    return $(parents);
  },
  children: () => $(elements.reduce(
    (children, element) => [...children, ...Array.from(element.children)], [],
  )),
  siblings: () => {
    const siblings = [];

    elements.forEach((element) => {
      const { parentElement } = element;

      Array.from(parentElement.children).forEach((child) => {
        if (!siblings.includes(child) && !elements.includes(child)) {
          siblings.push(child);
        }
      });
    });

    return $(siblings);
  },
  prev: (selector) => $(getPrevOrNextElements('previousElementSibling', selector, elements)),
  next: (selector) => $(getPrevOrNextElements('nextElementSibling', selector, elements)),
  filter: (selectorOrCallback) => {
    const filteredElements = [];

    elements.forEach((element, index) => {
      if (typeof selectorOrCallback === 'function') {
        if (selectorOrCallback($([element]), index)) {
          filteredElements.push(element);
        }
      } else if (element.matches(selectorOrCallback)) {
        filteredElements.push(element);
      }
    });

    return $(filteredElements);
  },
  not: ($elements) => {
    const selectedElements = getElementsFromArgument($elements);

    const remainingElements = elements.filter((element) => {
      let keepElement = true;

      selectedElements.forEach((selectedElement) => {
        if (keepElement && selectedElement === element) {
          keepElement = false;
        }
      });

      return keepElement;
    });

    return $(remainingElements);
  },
  slice: (start, end) => $(elements.slice(start, end)),
  splice: (start, deleteCount) => $(elements.splice(start, deleteCount)),
  find: (selector) => {
    let foundElements = [];

    elements.forEach((element) => {
      foundElements = [...foundElements, ...Array.from(element.querySelectorAll(selector))];
    });

    return $(foundElements);
  },
  contains: ($elements) => {
    let contains;
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      if (!contains) {
        theElements.forEach((referenceElement) => {
          if (!contains) {
            contains = element.contains(referenceElement);
          }
        });
      }
    });

    return contains;
  },
  has: ($elements) => {
    const selectedElements = getElementsFromArgument($elements);

    const filteredElements = elements.filter((element) => {
      let hasElement = false;

      selectedElements.forEach((selectedElement) => {
        if (!hasElement && element.contains(selectedElement)) {
          hasElement = true;
        }
      });

      return hasElement;
    });

    return $(filteredElements);
  },
  closest: (selector) => {
    const closestElements = [];

    elements.forEach((element) => {
      const closest = getClosestMatchingElement(element, selector);

      if (closest && !closestElements.includes(closest)) {
        closestElements.push(closest);
      }
    });

    return $(closestElements);
  },
  val: (valueOrFunction) => {
    if (valueOrFunction !== undefined) {
      const isFunction = typeof valueOrFunction === 'function';

      elements.forEach((theElement) => {
        const element = theElement;

        if (element.getAttribute('type') === 'checkbox') {
          element.checked = isFunction
            ? valueOrFunction()
            : !!valueOrFunction;
        } else if (element.tagName === 'SELECT' && element.multiple) {
          Array.from(element.querySelectorAll('option')).forEach((theOption, index) => {
            const option = theOption;
            let selected = false;

            if (Array.isArray(valueOrFunction)) {
              selected = !!valueOrFunction[index];
            } else if (isFunction) {
              selected = !!valueOrFunction($(getElementsFromArgument(option)), index);
            } else {
              selected = !!valueOrFunction;
            }

            if (selected) {
              option.setAttribute('selected', 'selected');
            } else {
              option.removeAttribute('selected');
            }

            option.selected = selected;
          });
        } else {
          element.value = isFunction
            ? valueOrFunction()
            : valueOrFunction;
        }
      });

      return $(elements);
    }

    let value;

    elements.forEach((element) => {
      if (value === undefined) {
        if (element.getAttribute('type') === 'checkbox') {
          value = element.checked;
        } else if (element.tagName === 'SELECT' && element.multiple) {
          value = Array.from(element.querySelectorAll('option'))
            .map((option) => (option.selected ? option.value : null))
            .filter((theValue) => !!theValue);

          if (!value.length) {
            value = '';
          }
        } else {
          value = element.value;
        }
      }
    });

    return value;
  },
  width: (value) => getOrSetDimension('width', $(elements), value),
  height: (value) => getOrSetDimension('height', $(elements), value),
  innerWidth: () => getDimension('innerWidth', elements),
  innerHeight: () => getDimension('innerHeight', elements),
  outerWidth: (includeMargins) => getDimension('outerWidth', elements, includeMargins),
  outerHeight: (includeMargins) => getDimension('outerHeight', elements, includeMargins),
  scrollWidth: () => getScrollWidthOrScrollHeight('scrollWidth', elements),
  scrollHeight: () => getScrollWidthOrScrollHeight('scrollHeight', elements),
  scrollTop: (value) => getOrSetScrollTopOrScrollLeft('scrollTop', value, $(elements)),
  scrollLeft: (value) => getOrSetScrollTopOrScrollLeft('scrollLeft', value, $(elements)),
  scrollTo: (theArgument, duration = 300, offset = 0, callback) => {
    const [element] = elements;
    const targets = getElementsFromArgument(theArgument);
    const top = targets[0].offsetTop
      - element.getBoundingClientRect().top
      - window.pageYOffset;
    const innerHeight = Math.max(element.clientHeight, element.offsetHeight);
    const { scrollHeight } = element;
    const startPositionY = element.scrollTop;
    const targetY = scrollHeight - top < innerHeight
      ? scrollHeight - innerHeight - offset
      : top - offset;
    const difference = targetY - startPositionY;

    doScroll(duration, callback, (percent) => {
      element.scrollTop = startPositionY + difference * percent;
    });

    return $(elements);
  },
  offset: (value, relativeToViewport) => {
    if (value && typeof value !== 'boolean') {
      const { top, left } = value;
      const topIsPixelUnit = typeof top === 'number' || (top && top.indexOf('px') > -1);
      const leftIsPixelUnit = typeof left === 'number' || (left && left.indexOf('px') > -1);
      const offsetTop = relativeToViewport ? window.pageYOffset : 0;
      const offsetLeft = relativeToViewport ? window.pageXOffset : 0;
      const unitTop = topIsPixelUnit ? 'px' : '';
      const unitLeft = leftIsPixelUnit ? 'px' : '';

      elements.forEach((theElement) => {
        const element = theElement;
        const computedStyles = window.getComputedStyle(element);

        element.style.top = (top || top === 0)
          ? `${topIsPixelUnit ? parseFloat(top, 10) + offsetTop : top}${unitTop}`
          : `${parseFloat(computedStyles.getPropertyValue('top'), 10)}${offsetTop || ''}${unitTop}`;

        element.style.left = (left || left === 0)
          ? `${leftIsPixelUnit ? parseFloat(left, 10) + offsetLeft : top}${unitLeft}`
          : `${parseFloat(computedStyles.getPropertyValue('left'), 10)}${offsetLeft || ''}${unitLeft}`;
      });

      return $(elements);
    }

    let offset;

    elements.forEach((element) => {
      const boundingBox = element.getBoundingClientRect();

      if (offset === undefined) {
        offset = boundingBox;
      }
    });

    const relative = typeof value === 'boolean' && value;

    return {
      top: (offset.top || 0) + (relative ? window.pageYOffset : 0),
      left: (offset.left || 0) + (relative ? window.pageXOffset : 0),
    };
  },
  inView: (offsetOrCallback, callbackOrOptions) => {
    let offset = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    if (typeof offsetOrCallback === 'object' && offsetOrCallback) {
      offset = {
        ...offset,
        ...offsetOrCallback,
      };
    }

    const offsetOrCallbackIsFunction = typeof offsetOrCallback === 'function';
    const callbackOrOptionsIsFunction = typeof callbackOrOptions === 'function';

    if (!offsetOrCallbackIsFunction
      && !callbackOrOptionsIsFunction
      && typeof callbackOrOptions !== 'object'
      && callbackOrOptions !== null) {
      return isInView(elements[0].getBoundingClientRect(), offset);
    }

    const options = callbackOrOptions || {};
    const scrollTimer = options.scrollTimer !== undefined ? options.scrollTimer : 100;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const isElementInView = isInView(elements[0].getBoundingClientRect(), offset);

        if (isElementInView && options.isInView) {
          options.isInView();
        }

        if (isElementInView && !getJlightElementData(elements[0]).isInView) {
          if (options.onEnter) {
            options.onEnter();
          } else if (offsetOrCallbackIsFunction) {
            offsetOrCallback();
          } else if (callbackOrOptionsIsFunction) {
            callbackOrOptions();
          }

          updateJlightElementData(elements[0], {
            isInView: true,
          });

          return;
        }

        if (!isElementInView && getJlightElementData(elements[0]).isInView) {
          if (options.onExit) {
            options.onExit();
          }

          updateJlightElementData(elements[0], {
            isInView: false,
          });
        }
      }, scrollTimer);
    });

    return $(elements);
  },
  delay: (delay) => new Promise((resolve) => setTimeout(resolve, delay)),
  when: (condition, callback, ...args) => {
    if (typeof condition === 'function' ? condition() : condition) {
      if (typeof callback === 'string') {
        $(elements)[callback](...args);
      } else {
        callback();
      }
    }

    return $(elements);
  },
  animate: (properties, duration = 300, callback = noop, easing = 'ease') => {
    elements.forEach((theElement, elementIndex) => {
      const element = theElement;
      let transition = '';

      Object.entries(properties).forEach(([theKey, value], index) => {
        const key = camelCaseToDashCase(theKey);

        transition += `${index === 0 ? '' : ','}${key} ${duration}ms ${easing}`;

        if (element.style[key] === undefined) {
          element.style[key] = window
            .getComputedStyle(element)
            .getPropertyValue(key);
        }

        setTimeout(() => {
          element.style[key] = value;
        }, 0);
      });

      updateJlightElementData(element, {
        jLightInternal: {
          ...(getJlightElementData(element).jLightInternal || {}),
          animatedProperties: Object.keys(properties),
        },
      });

      element.style.transition = transition;

      setTimeout(() => {
        if (elementIndex === elements.length - 1) {
          elements.forEach((elementToReset) => {
            const theElementToReset = elementToReset;

            theElementToReset.style.transition = '';
          });

          callback();
        }
      }, duration);
    });

    return $(elements);
  },
  stop: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);
      const animatedProperties = getJlightElementData(element).jLightInternal.animatedProperties
        || [];

      animatedProperties.forEach((key) => {
        element.style[key] = computedStyles.getPropertyValue(
          camelCaseToDashCase(key),
        );
      });

      element.style.transition = '';
    });

    return $(elements);
  },
  fadeIn: (duration = 300, callback = noop, type = 'block', easing) => {
    elements.forEach((theElement) => {
      const element = theElement;

      getUpdateAnimationId(element);
      element.style.opacity = 0;
      element.style.display = type;

      setTimeout(() => {
        $([element]).animate({ opacity: 1 }, duration, callback, easing);
      }, 1);
    });

    return $(elements);
  },
  fadeOut: (duration = 300, callback = noop, easing) => {
    elements.forEach((theElement) => {
      const element = theElement;
      const animationId = getUpdateAnimationId(element);

      setTimeout(() => {
        $([element]).animate({ opacity: 0 }, duration, () => {
          if (getJlightElementData(element).jLightInternal.currentAnimation === animationId) {
            element.style.display = 'none';
          }

          callback();
        }, easing);
      }, 1);
    });

    return $(elements);
  },
  fadeToggle: (duration = 300, callback, type, easing) => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);

      if (computedStyles.getPropertyValue('display') === 'none') {
        $([element]).fadeIn(duration, callback, type, easing);
      } else {
        $([element]).fadeOut(duration, callback, easing);
      }
    });

    return $(elements);
  },
  slideDown: (duration = 300, callback = noop, height = 'auto', type = 'block', easing = 'ease') => {
    elements.forEach((theElement) => {
      const element = theElement;
      const startHeight = Math.max(element.clientHeight, element.offsetHeight);
      const computedStyles = window.getComputedStyle(element);
      const animationId = getUpdateAnimationId(element);
      const paddingTop = parseFloat(computedStyles.getPropertyValue('padding-top'), 10);
      const paddingBottom = parseFloat(computedStyles.getPropertyValue('padding-bottom'), 10);

      element.style.overflow = 'hidden';
      element.style.visibility = 'hidden';
      element.style.display = type;
      element.style.height = height;

      const targetHeight = Math.max(element.clientHeight, element.offsetHeight)
        + parseFloat(computedStyles.getPropertyValue('border-top'), 10)
        + parseFloat(computedStyles.getPropertyValue('border-bottom'), 10);

      element.style.height = `${startHeight}px`;
      element.style.visibility = '';
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;

      setTimeout(() => {
        $([element]).animate({ height: targetHeight, paddingTop, paddingBottom }, duration, () => {
          if (getJlightElementData(element).jLightInternal.currentAnimation === animationId) {
            element.style.overflow = '';
          }

          callback();
        }, easing);
      }, 10);
    });

    return $(elements);
  },
  slideUp: (duration = 300, callback = noop, easing = 'ease') => {
    elements.forEach((theElement) => {
      const element = theElement;
      const animationId = getUpdateAnimationId(element);
      const startHeight = Math.max(element.clientHeight, element.offsetHeight);

      element.style.overflow = 'hidden';
      element.style.height = `${startHeight}px`;
      element.style.minHeight = 'auto';

      setTimeout(() => {
        $([element]).animate({ height: 0, paddingTop: 0, paddingBottom: 0 }, duration, () => {
          if (getJlightElementData(element).jLightInternal.currentAnimation === animationId) {
            element.style.display = 'none';
            element.style.overflow = '';
            element.style.minHeight = '';
            element.style.paddingTop = '';
            element.style.paddingBottom = '';
          }

          callback();
        }, easing);
      }, 1);
    });

    return $(elements);
  },
  slideToggle: (duration = 300, callback, height, type, easing) => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);

      if (computedStyles.getPropertyValue('display') === 'none') {
        $([element]).slideDown(duration, callback, height, type, easing);
      } else {
        $([element]).slideUp(duration, callback, easing);
      }
    });

    return $(elements);
  },
  serialize: () => {
    let serializedString = '';

    elements.forEach((element, index) => {
      if (element instanceof HTMLFormElement) {
        serializedString += Array.from(new FormData(element),
          (formDataItem) => formDataItem.map(encodeURIComponent).join('=')).join('&');
      } else if (canBeSeralized(element)) {
        let { value } = element;

        if (element.getAttribute('type') === 'checkbox') {
          value = element.checked;
        }

        serializedString += `${index === 0 ? '' : '&'}${element.name}=${value}`;
      }
    });

    return serializedString;
  },
  serializeJson: () => {
    let serializedJson = {};

    elements.forEach((element) => {
      if (element instanceof HTMLFormElement) {
        Array.from(element.children).forEach((child) => {
          if (child.name) {
            serializedJson = addValueToJson(element, serializedJson);
          }
        });
      } else if (canBeSeralized(element)) {
        serializedJson = addValueToJson(element, serializedJson);
      }
    });

    return serializedJson;
  },
});

const documentAndWindowJLightElement = (argument) => ({
  on: (theTypes, callbackOrSelector, delegatedCallback) => {
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    if (typeof callbackOrSelector === 'function' || callbackOrSelector === false) {
      const callback = (theEvent) => {
        const event = theEvent;

        event.$target = $([event.target]);
        event.$currentTarget = $([event.currentTarget]);

        if (callbackOrSelector === false
          || callbackOrSelector(event, event.jLightEventData) === false
          || delegatedCallback === false) {
          preventEvent(event);
        }
      };

      types.forEach((type) => {
        addJLightElementEventData(argument, type, callbackOrSelector, callback);
        argument.addEventListener(type, callback);
      });
    } else {
      types.forEach((type) => {
        argument.addEventListener(type, (theEvent) => {
          const event = theEvent;

          if (event.target.matches(callbackOrSelector)) {
            event.$target = $([event.target]);
            event.$currentTarget = $([event.currentTarget]);

            if (delegatedCallback === false
              || delegatedCallback(event, event.jLightEventData) === false) {
              preventEvent(event);
            }
          }
        });
      });
    }

    return documentAndWindowJLightElement(argument);
  },
  off: (theTypes, callback) => {
    const jLightElementData = getJlightElementData(argument);
    const events = jLightElementData.jLightInternal.events || [];
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    types.forEach((type) => {
      events.forEach((event) => {
        if (event.type === type && event.callback === callback) {
          removeJLightElementEventData(argument, type, callback, event.realCallback);
          argument.removeEventListener(type, event.realCallback);
        }
      });
    });

    return documentAndWindowJLightElement(argument);
  },
  trigger: (theTypes, jLightEventData) => {
    let types = [theTypes];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    const event = document.createEvent('Event');

    types.forEach((type) => {
      event.jLightEventData = jLightEventData;
      event.initEvent(type, true, true);
      argument.dispatchEvent(event);
    });

    return documentAndWindowJLightElement(argument);
  },
  innerWidth: () => window.innerWidth,
  innerHeight: () => window.innerHeight,
  outerWidth: () => window.outerWidth,
  outerHeight: () => window.outerHeight,
  scrollTop: (value) => {
    if (value !== undefined) {
      window.scrollTo(0, value);

      return $(argument);
    }

    return window.pageYOffset;
  },
  scrollLeft: (value) => {
    if (value !== undefined) {
      window.scrollTo(value, 0);

      return $(argument);
    }

    return window.pageXOffset;
  },
  scrollTo: (theArgument, duration = 300, offset = 0, callback) => {
    const elements = getElementsFromArgument(theArgument);
    const top = elements[0].getBoundingClientRect().top + window.pageYOffset;
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const targetY = scrollHeight - top < innerHeight
      ? scrollHeight - innerHeight - offset
      : top - offset;
    const startPositionY = window.pageYOffset;
    const difference = targetY - startPositionY;

    doScroll(duration, callback, (percent) => {
      window.scrollTo(0, startPositionY + difference * percent);
    });

    return documentAndWindowJLightElement(argument);
  },
});

export default (argument) => {
  if (typeof argument === 'function') {
    document.addEventListener('DOMContentLoaded', argument);

    return {};
  }

  if (argument === document || argument === window) {
    initalizeJLightElementData(argument, argument);

    return documentAndWindowJLightElement(argument);
  }

  if (argument instanceof HTMLElement) {
    return $([argument]);
  }

  if (argument instanceof NodeList
    || argument instanceof HTMLCollection) {
    return $([...argument]);
  }

  let elements = [];

  if (typeof argument === 'string') {
    if (argument.match(/<(.|\n)+>/)) {
      elements = [...createElementsFromString(argument)];
    } else {
      elements = [...document.querySelectorAll(argument)];

      elements.forEach((element) => {
        initalizeJLightElementData(element, argument);
      });
    }
  }

  return $(elements);
};
