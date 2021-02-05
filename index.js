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
  const isJson = options.contentType === 'application/json';
  const { headers } = options;
  let { data } = options;

  if (!options.crossDomain && !headers['X-Requested-With']) {
    headers['X-Requested-With'] = 'XMLHttpRequest';
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = options.contentType;

    if (headers['Content-Type'] === false) {
      headers['Content-Type'] = 'multipart/form-data';
    }
  }

  if (options.processData) {
    if (isJson) {
      data = JSON.stringify(data);
    } else {
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
          isJson ? JSON.parse(request.response) : request.response,
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

const createElementFromString = (string) => {
  const div = document.createElement('div');

  div.innerHTML = string.trim();

  let element = div.firstChild;

  if (!(element instanceof HTMLElement)) {
    const fallbackDiv = document.createElement('div');

    fallbackDiv.textContent = element.textContent;
    element = fallbackDiv;
  }

  initalizeJLightElementData(element, element.tagName.toLowerCase());

  return element;
};

const getElementsFromArgument = (argument) => {
  if (argument.elements) {
    return argument.elements;
  }

  if (typeof argument === 'string') {
    return argument.match(/<.+>/) ? [(createElementFromString(argument))] : [...document.querySelectorAll(argument)];
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

  if (element.type === 'checkbox') {
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

const getOrSetDimension = (identifier, $elements, value) => {
  const { elements } = $elements;

  if (value) {
    elements.forEach((theElement) => {
      const element = theElement;

      element.style[identifier] = `${value}${typeof value !== 'string' ? 'px' : ''}`;
    });

    return $elements;
  }

  const upperIdentifier = ucfirst(identifier);
  let dimension;

  elements.forEach((element) => {
    if (!dimension) {
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

  if (value) {
    elements.forEach((theElement, index) => {
      const element = theElement;

      if (typeof theValue === 'function') {
        value = theValue(index, element[identifier]);
      }

      element[identifier] = value;
    });

    return $elements;
  }

  elements.forEach((element) => {
    if (!value) {
      value = element[identifier];
    }
  });

  return value;
};

const modifyClass = (identifier, $elements, cssClass) => {
  $elements.elements.forEach((element) => {
    element.classList[identifier](cssClass);
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
    if (!dimension) {
      dimension = element[identifier];
    }
  });

  return dimension;
};

const getOrSetScrollTopOrScrollLeft = (identifier, value, $elements) => {
  const { elements } = $elements;

  if (value) {
    elements.forEach((theElement) => {
      const element = theElement;

      element[identifier] = parseFloat(value, 10);
    });

    return $elements;
  }

  let scrollValue;

  elements.forEach((element) => {
    if (!scrollValue) {
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
  length: elements.length,
  addClass: (cssClass) => modifyClass('add', $(elements), cssClass),
  removeClass: (cssClass) => modifyClass('remove', $(elements), cssClass),
  toggleClass: (cssClass) => modifyClass('toggle', $(elements), cssClass),
  hasClass: (cssClass) => {
    let hasClass;

    elements.forEach((element) => {
      if (!hasClass) {
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

    if (value) {
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
  on: (type, callbackOrSelector, delegatedCallback) => {
    // TODO: Refactor event listener functions
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

        addJLightElementEventData(element, type, callbackOrSelector, callback);
        element.addEventListener(type, callback);
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
          }
        };

        document.addEventListener(type, callback);
      });
    }

    return $(elements);
  },
  once: (type, callbackOrSelector, delegatedCallback) => {
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

          element.removeEventListener(type, callback);
        };

        element.addEventListener(type, callback);
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

            document.removeEventListener(type, callback);
          }
        };

        document.addEventListener(type, callback);
      });
    }

    return $(elements);
  },
  off: (type, callback) => {
    elements.forEach((element) => {
      const jLightElementData = getJlightElementData(element);
      const events = jLightElementData.jLightInternal.events || [];

      events.forEach((event) => {
        if (event.type === type && event.callback === callback) {
          removeJLightElementEventData(element, type, callback, event.realCallback);
          element.removeEventListener(type, event.realCallback);
        }
      });
    });

    return $(elements);
  },
  delegate: (type, callback) => {
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

    addJLightElementEventData(document, type, callback, realCallback);
    document.addEventListener(type, realCallback);

    return $(elements);
  },
  undelegate: (type, callback) => {
    const jLightElementData = getJlightElementData(document);
    const events = jLightElementData.jLightInternal.events || [];

    events.forEach((event) => {
      if (event.type === type && event.callback === callback) {
        removeJLightElementEventData(document, type, callback, event.realCallback);
        document.removeEventListener(type, event.realCallback);
      }
    });

    return $(elements);
  },
  trigger: (type, jLightEventData) => {
    const theEvent = document.createEvent('Event');

    theEvent.jLightEventData = jLightEventData;
    theEvent.initEvent(type, true, true);

    elements.forEach((element) => {
      element.dispatchEvent(theEvent);
    });

    return $(elements);
  },
  each: (callback) => {
    elements.forEach((element, index) => {
      callback($([element]), index);
    });

    return $(elements);
  },
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
        if (!attr) {
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
      elements.forEach((element) => {
        updateJlightElementData(element, { ...theKey });
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
              data[dataKey] = dataValue;
            }
          });
        } else {
          data = jLightElementData[key];

          if (data === undefined) {
            data = element.getAttribute(`data-${theKey}`)
              || element.getAttribute(`data-${key}`);
          }
        }
      }
    });

    delete data.jLightInternal;

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
  slice: (startIndex, stopIndex) => {
    const slicedElements = [];

    elements.forEach((element, index) => {
      if (index >= startIndex) {
        if (!stopIndex || index <= stopIndex) {
          slicedElements.push(element);
        }
      }
    });

    return $(slicedElements);
  },
  splice: (startIndex, stopIndex) => {
    const splicedElements = [];

    elements.forEach((element, index) => {
      if (index <= startIndex) {
        splicedElements.push(element);
      } if (index >= stopIndex) {
        splicedElements.push(element);
      }
    });

    return $(splicedElements);
  },
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
  val: (theValue) => {
    if (theValue !== undefined) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.value = theValue;
      });

      return $(elements);
    }

    let value;

    elements.forEach((element) => {
      if (!value) {
        if (element.type === 'checkbox') {
          value = element.checked;
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

      if (!offset) {
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
    elements.forEach((theElement) => {
      const element = theElement;
      let transition = '';

      Object.entries(properties).forEach(([theKey, value], index) => {
        const key = camelCaseToDashCase(theKey);

        transition += `${index === 0 ? '' : ','}${key} ${duration}ms ${easing}`;

        if (!element.style[key]) {
          element.style[key] = window
            .getComputedStyle(element)
            .getPropertyValue(key);
        }

        setTimeout(() => {
          if (key === 'opacity') {
            element.style.opacity = value;

            return;
          }

          element.style[key] = `${value}${typeof value === 'number' ? 'px' : ''}`;
        }, 0);
      });

      updateJlightElementData(element, {
        jLightInternal: {
          ...(getJlightElementData(element).jLightInternal || {}),
          animatedProperties: Object.keys(properties),
        },
      });

      element.style.transition = transition;
    });

    setTimeout(() => {
      elements.forEach((theElement) => {
        const element = theElement;

        element.style.transition = '';
      });

      callback();
    }, duration);

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
      const animationId = getUpdateAnimationId(element);

      element.style.overflow = 'hidden';
      element.style.display = type;
      element.style.height = height;

      const targetHeight = Math.max(element.clientHeight, element.offsetHeight);

      element.style.height = `${startHeight}px`;

      setTimeout(() => {
        $([element]).animate({ height: targetHeight }, duration, () => {
          if (getJlightElementData(element).jLightInternal.currentAnimation === animationId) {
            element.style.overflow = '';
          }

          callback();
        }, easing);
      }, 1);
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

      setTimeout(() => {
        $([element]).animate({ height: 0 }, duration, () => {
          if (getJlightElementData(element).jLightInternal.currentAnimation === animationId) {
            element.style.overflow = '';
            element.style.display = 'none';
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

        if (element.type === 'checkbox') {
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
  on: (type, callbackOrSelector, delegatedCallback) => {
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

      addJLightElementEventData(argument, type, callbackOrSelector, callback);
      argument.addEventListener(type, callback);
    } else {
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
    }

    return documentAndWindowJLightElement(argument);
  },
  off: (type, callback) => {
    const jLightElementData = getJlightElementData(argument);
    const events = jLightElementData.jLightInternal.events || [];

    events.forEach((event) => {
      if (event.type === type && event.callback === callback) {
        removeJLightElementEventData(argument, type, callback, event.realCallback);
        argument.removeEventListener(type, event.realCallback);
      }
    });

    return documentAndWindowJLightElement(argument);
  },
  trigger: (type, jLightEventData) => {
    const theEvent = document.createEvent('Event');

    theEvent.jLightEventData = jLightEventData;
    theEvent.initEvent(type, true, true);
    argument.dispatchEvent(theEvent);

    return documentAndWindowJLightElement(argument);
  },
  innerWidth: () => window.innerWidth,
  innerHeight: () => window.innerHeight,
  outerWidth: () => window.outerWidth,
  outerHeight: () => window.outerHeight,
  scrollTop: (value) => {
    if (value) {
      window.scrollTo(0, value);

      return $(argument);
    }

    return window.pageYOffset;
  },
  scrollLeft: (value) => {
    if (value) {
      window.scrollTo(value, 0);

      return $(argument);
    }

    return window.pageXOffset;
  },
  scrollTo: (theArgument, duration = 300, offset = 0, callback) => {
    const elements = getElementsFromArgument(theArgument);
    const { offsetTop } = elements[0];
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const targetY = scrollHeight - offsetTop < innerHeight
      ? scrollHeight - innerHeight - offset
      : offsetTop - offset;
    const startPositionY = window.pageYOffset;
    const difference = targetY - startPositionY;
    let start;

    const easing = (t) => (t < 0.5
      ? 4 * t * t * t
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

    const step = (timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const time = timestamp - start;
      const percent = easing(Math.min(time / duration, 1));

      window.scrollTo(0, startPositionY + difference * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      } else if (callback) {
        callback();
      }
    };

    window.requestAnimationFrame(step);
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
    if (argument.match(/<.+>/)) {
      elements = [createElementFromString(argument)];
    } else {
      elements = [...document.querySelectorAll(argument)];

      elements.forEach((element) => {
        initalizeJLightElementData(element, argument);
      });
    }
  }

  return $(elements);
};
