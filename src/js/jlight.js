// TODO: SlideUp, SlideDown, SlideToggle
// TODO: FadeIn, FadeOut, FadeToggle
// TODO: Add animate

const jLightGlobalElements = [];
const jLightGlobalData = [];

export const uuid = () => Math.random().toString(36).substr(2, 9);

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

const preventEvent = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
};

const dashCaseToCamelCase = (string) => {
  if (!string || typeof string === 'object') {
    return null;
  }

  return string.replace(/-([a-z])/g, (chars) => chars[1].toUpperCase());
};

const camelCaseToDashCase = (string) => {
  if (!string || typeof string === 'object') {
    return null;
  }

  return string.replace(/([a-z][A-Z])/g, (char) => `${char[0]}-${char[1].toLowerCase()}`);
};

const createElementFromString = (string) => {
  const tags = string.split('<');
  const lastTagIndex = tags.length - 1;
  const openingTag = tags[1];

  if (!openingTag || openingTag.indexOf('/') === 0) {
    return null;
  }

  let endOfTagIndex = openingTag.indexOf(' ');

  if (endOfTagIndex === -1) {
    endOfTagIndex = openingTag.indexOf('>');
  }

  if (endOfTagIndex === -1) {
    return null;
  }

  const tagName = openingTag.substring(0, endOfTagIndex);
  const element = document.createElement(tagName);

  if (lastTagIndex - 2 > 0) {
    const innerHtml = tags.splice(2, lastTagIndex - 2).join('<');

    element.append(
      createElementFromString(`<${innerHtml}`),
    );
  }

  initalizeJLightElementData(element, tagName);

  return element;
};

const getElementsFromArgument = (argument) => {
  if (argument.elements) {
    return argument.elements;
  }

  if (typeof argument === 'string') {
    return argument.match(/^<.+>$/) ? [(createElementFromString(argument))] : [...document.querySelectorAll(argument)];
  }

  if (argument instanceof HTMLCollection || argument instanceof NodeList) {
    return [...argument];
  }

  return [argument];
};

export const noop = () => { };

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

const $ = (elements) => ({
  elements,
  length: elements.length,
  addClass: (cssClass) => {
    elements.forEach((element) => {
      element.classList.add(cssClass);
    });

    return $(elements);
  },
  removeClass: (cssClass) => {
    elements.forEach((element) => {
      element.classList.remove(cssClass);
    });

    return $(elements);
  },
  hasClass: (cssClass) => {
    let hasClass;

    elements.forEach((element) => {
      if (!hasClass) {
        hasClass = element.classList.contains(cssClass);
      }
    });

    return hasClass;
  },
  toggleClass: (cssClass) => {
    elements.forEach((element) => {
      element.classList.toggle(cssClass);
    });

    return $(elements);
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
  show: (type) => {
    elements.forEach((theElement) => {
      const element = theElement;

      element.style.display = type || '';
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
  toggle: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);

      if (computedStyles.getPropertyValue('display') === 'none') {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    });

    return $(elements);
  },
  on: (type, callbackOrSelector, delegatedCallback) => {
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
    if (!callback) {
      return {};
    }

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
      let theElements = property;

      if (property.elements) {
        theElements = property.elements;
      } else if (theElements instanceof HTMLCollection) {
        theElements = [...theElements];
      }

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
    // TODO: Make use of dataset property

    if (typeof theKey === 'object' && theKey !== null) {
      elements.forEach((element) => {
        updateJlightElementData(element, { ...theKey });
      });

      return $(elements);
    }

    const key = dashCaseToCamelCase(theKey);

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
        } else {
          data = jLightElementData[key];

          if (data === undefined) {
            data = element.getAttribute(`data-${theKey}`)
              || element.getAttribute(`data-${key}`);
          }
        }
      }
    });

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
    const addedElements = [];
    const theElements = getElementsFromArgument($elements);

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
          if (removeFromDom) {
            element.remove();
            removeJLightElementData(element);
          }

          wasRemoved = true;
        }
      });

      if (!wasRemoved) {
        remainingElements.push(element);
      }
    });

    return $(remainingElements);
  },
  text: (theText) => {
    let text = theText;

    if (text) {
      elements.forEach((theElement, index) => {
        const element = theElement;

        if (typeof theText === 'function') {
          text = theText(index, element.textContent);
        }

        element.textContent = text;
      });

      return $(elements);
    }

    elements.forEach((element) => {
      if (!text) {
        text = element.textContent;
      }
    });

    return text;
  },
  html: (theHtml) => {
    let html = theHtml;

    if (html) {
      elements.forEach((theElement, index) => {
        const element = theElement;

        if (typeof theHtml === 'function') {
          html = theHtml(index, element.innerHTML);
        }

        element.innerHTML = html;
      });

      return $(elements);
    }

    elements.forEach((element) => {
      if (!html) {
        html = element.innerHTML;
      }
    });

    return html;
  },
  prepend: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((elementToPrepend) => {
        if (element !== elementToPrepend) {
          element.prepend(elementToPrepend);
        }
      });
    });

    return $(elements);
  },
  append: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((elementToAppend) => {
        if (element !== elementToAppend) {
          element.append(elementToAppend);
        }
      });
    });

    return $(elements);
  },
  prependTo: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((elementToPrependTo) => {
        if (element !== elementToPrependTo) {
          elementToPrependTo.prepend(element);
        }
      });
    });

    return $(elements);
  },
  appendTo: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((elementToAppendTo) => {
        if (element !== elementToAppendTo) {
          elementToAppendTo.append(element);
        }
      });
    });

    return $(elements);
  },
  insertBefore: ($elements) => {
    elements.forEach((element) => {
      $elements.elements.forEach((referenceElement) => {
        if (element !== referenceElement) {
          referenceElement.insertAdjacentElement('beforeBegin', element);
        }
      });
    });

    return $(elements);
  },
  insertAfter: ($elements) => {
    elements.forEach((element) => {
      $elements.elements.forEach((referenceElement) => {
        if (element !== referenceElement) {
          referenceElement.insertAdjacentElement('afterEnd', element);
        }
      });
    });

    return $(elements);
  },
  before: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((referenceElement) => {
        if (element !== referenceElement) {
          element.insertAdjacentElement('beforeBegin', referenceElement);
        }
      });
    });

    return $(elements);
  },
  after: ($elements) => {
    const theElements = getElementsFromArgument($elements);

    elements.forEach((element) => {
      theElements.forEach((referenceElement) => {
        if (element !== referenceElement) {
          element.insertAdjacentElement('afterEnd', referenceElement);
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

    elements.forEach((element) => {
      parents.push(element.parentElement);
    });

    return $(parents);
  },
  children: () => {
    let children = [];

    elements.forEach((element) => {
      children = [...children, ...Array.from(element.children)];
    });

    return $(children);
  },
  siblings: () => {
    const siblingGroups = [];
    const siblings = [];

    elements.forEach((element) => {
      const { parentElement } = element;

      if (!siblingGroups.includes(parentElement)) {
        siblingGroups.push(parentElement);

        Array.from(parentElement.children).forEach((child) => {
          if (!siblings.includes(child) && !elements.includes(child)) {
            siblings.push(child);
          }
        });
      }
    });

    return $(siblings);
  },
  prev: (selector) => {
    const prevElements = [];

    if (!selector) {
      elements.forEach((element) => {
        const prev = element.previousElementSibling;

        if (prev && !prevElements.includes(prev)) {
          prevElements.push(prev);
        }
      });
    } else {
      elements.forEach((element) => {
        const prev = getPrevMatchingElement(element, selector);

        if (prev && !prevElements.includes(prev)) {
          prevElements.push(prev);
        }
      });
    }

    return $(prevElements);
  },
  next: (selector) => {
    const nextElements = [];

    if (!selector) {
      elements.forEach((element) => {
        const next = element.nextElementSibling;

        if (next && !nextElements.includes(next)) {
          nextElements.push(next);
        }
      });
    } else {
      elements.forEach((element) => {
        const next = getNextMatchingElement(element, selector);

        if (next && !nextElements.includes(next)) {
          nextElements.push(next);
        }
      });
    }

    return $(nextElements);
  },
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
  width: (value) => {
    if (value) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.style.width = `${value}${typeof value !== 'string' ? 'px' : ''}`;
      });

      return $(elements);
    }

    let width;

    elements.forEach((element) => {
      if (!width) {
        width = Math.max(
          element.clientWidth,
          element.offsetWidth,
        );
      }
    });

    return width;
  },
  height: (value) => {
    if (value) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.style.height = `${value}${typeof value !== 'string' ? 'px' : ''}`;
      });

      return $(elements);
    }

    let height;

    elements.forEach((element) => {
      if (!height) {
        height = Math.max(
          element.clientHeight,
          element.offsetHeight,
        );
      }
    });

    return height;
  },
  innerWidth: () => {
    let width;

    elements.forEach((element) => {
      if (!width) {
        const computedStyles = window.getComputedStyle(element);
        const borderLeft = parseFloat(computedStyles.getPropertyValue('border-left'), 10);
        const borderRight = parseFloat(computedStyles.getPropertyValue('border-right'), 10);

        width = Math.max(
          element.clientWidth,
          element.offsetWidth,
        ) - borderLeft - borderRight;
      }
    });

    return width;
  },
  innerHeight: () => {
    let height;

    elements.forEach((element) => {
      if (!height) {
        const computedStyles = window.getComputedStyle(element);
        const borderTop = parseFloat(computedStyles.getPropertyValue('border-top'), 10);
        const borderBottom = parseFloat(computedStyles.getPropertyValue('border-bottom'), 10);

        height = Math.max(
          element.clientHeight,
          element.offsetHeight,
        ) - borderTop - borderBottom;
      }
    });

    return height;
  },
  outerWidth: (includeMargins) => {
    let width;

    elements.forEach((element) => {
      if (!width) {
        const computedStyles = window.getComputedStyle(element);
        let marginLeft = 0;
        let marginRight = 0;

        if (includeMargins) {
          marginLeft = parseFloat(computedStyles.getPropertyValue('margin-left'), 10);
          marginRight = parseFloat(computedStyles.getPropertyValue('margin-right'), 10);
        }

        width = Math.max(
          element.clientWidth,
          element.offsetWidth,
        ) + marginLeft + marginRight;
      }
    });

    return width;
  },
  outerHeight: (includeMargins) => {
    let height;

    elements.forEach((element) => {
      if (!height) {
        const computedStyles = window.getComputedStyle(element);
        let marginTop = 0;
        let marginBottom = 0;

        if (includeMargins) {
          marginTop = parseFloat(computedStyles.getPropertyValue('margin-top'), 10);
          marginBottom = parseFloat(computedStyles.getPropertyValue('margin-bottom'), 10);
        }

        height = Math.max(
          element.clientHeight,
          element.offsetHeight,
        ) + marginTop + marginBottom;
      }
    });

    return height;
  },
  scrollWidth: () => {
    let width;

    elements.forEach((element) => {
      if (!width) {
        width = element.scrollWidth;
      }
    });

    return width;
  },
  scrollHeight: () => {
    let height;

    elements.forEach((element) => {
      if (!height) {
        height = element.scrollHeight;
      }
    });

    return height;
  },
  scrollTop: (value) => {
    if (value) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.scrollTop = value;
      });

      return $(elements);
    }

    let scrollTop;

    elements.forEach((element) => {
      if (!scrollTop) {
        scrollTop = element.scrollTop;
      }
    });

    return scrollTop;
  },
  scrollLeft: (value) => {
    if (value) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.scrollLeft = value;
      });

      return $(elements);
    }

    let scrollLeft;

    elements.forEach((element) => {
      if (!scrollLeft) {
        scrollLeft = element.scrollLeft;
      }
    });

    return scrollLeft;
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

        element.style.top = top
          ? `${topIsPixelUnit ? parseFloat(top, 10) + offsetTop : top}${unitTop}`
          : `${parseFloat(computedStyles.getPropertyValue('top'), 10)}${offsetTop || ''}${unitTop}`;

        element.style.left = left
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
  inView: (offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }) => {
    const boundingBox = elements[0].getBoundingClientRect();

    return (
      boundingBox.top >= parseFloat(offset.top, 10)
        && boundingBox.left >= parseFloat(offset.left, 10)
        && boundingBox.bottom <= (window.innerHeight
          || document.documentElement.clientHeight) + parseFloat(offset.bottom, 10)
        && boundingBox.right <= (window.innerWidth
          || document.documentElement.clientWidth) + parseFloat(offset.right, 10)
    );
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
  animate: (properties, speed = 300, callback = noop, easing = 'ease') => {
    elements.forEach((theElement) => {
      const jLightElementData = getJlightElementData(theElement).jLightInternal || {};
      const element = theElement;
      let transition = '';

      Object.entries(properties).forEach(([theKey, value], index) => {
        const key = camelCaseToDashCase(theKey);

        transition += `${index === 0 ? '' : ','}${key} ${speed}ms ${easing}`;

        if (!element.style[key]) {
          const computedStyles = window.getComputedStyle(element);

          element.style[key] = computedStyles.getPropertyValue(key);
        }

        setTimeout(() => {
          element.style[key] = `${value}${typeof value === 'number' ? 'px' : ''}`;
        }, 0);
      });

      updateJlightElementData(element, {
        jLightInternal: {
          ...jLightElementData,
          animatedProperties: Object.keys(properties),
          animationStopped: false,
        },
      });

      element.style.transition = transition;
    });

    setTimeout(() => {
      elements.forEach((theElement) => {
        const element = theElement;

        if (!getJlightElementData(element).jLightInternal.animationStopped) {
          element.style.transition = '';
        }
      });

      callback();
    }, speed);

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

      const jLightElementData = getJlightElementData(element).jLightInternal || {};

      updateJlightElementData(element, {
        jLightInternal: {
          ...jLightElementData,
          animationStopped: true,
        },
      });

      element.style.transition = '';
    });

    return $(elements);
  },
  slideUp: (speed, callback = noop, easing = 'ease') => {
    elements.forEach((theElement) => {
      const element = theElement;
      const jLightElementData = getJlightElementData(element).jLightInternal || {};
      const animationId = uuid();

      updateJlightElementData(element, {
        jLightInternal: {
          ...jLightElementData,
          currentAnimation: animationId,
        },
      });

      element.style.transition = `height ${speed}ms ${easing}`;
      element.style.overflow = 'hidden';

      const startHeight = Math.max(element.clientHeight, element.offsetHeight);

      element.style.height = `${startHeight}px`;

      setTimeout(() => {
        $([element]).animate({ height: 0 }, speed, () => {
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
  slideDown: (speed, callback = noop, easing = 'ease') => {
    elements.forEach((theElement) => {
      const element = theElement;
      const startHeight = Math.max(element.clientHeight, element.offsetHeight);
      const jLightElementData = getJlightElementData(element).jLightInternal || {};
      const animationId = uuid();

      updateJlightElementData(element, {
        jLightInternal: {
          ...jLightElementData,
          currentAnimation: animationId,
        },
      });

      element.style.transition = `height ${speed}ms ${easing}`;
      element.style.overflow = 'hidden';
      element.style.display = '';
      element.style.height = 'auto';

      const targetHeight = Math.max(element.clientHeight, element.offsetHeight);

      element.style.height = `${startHeight}px`;

      setTimeout(() => {
        $([element]).animate({ height: targetHeight }, speed, () => {
          if (getJlightElementData(element).jLightInternal.currentAnimation === animationId) {
            element.style.overflow = '';
          }

          callback();
        }, easing);
      }, 1);
    });

    return $(elements);
  },
  slideToggle: (speed, easing, callback) => {
    elements.forEach((theElement) => {
      const element = theElement;

      if (element.style.display === 'none') {
        $([element]).slideDown(speed, callback, easing);
      } else {
        $([element]).slideUp(speed, callback, easing);
      }
    });

    return $(elements);
  },
});

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

  const fail = options.fail(
    isJson ? JSON.parse(request.response) : request.response,
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
        isJson ? JSON.parse(request.response) : request.response,
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
    // TODO: Use regex from above for this
    if (argument.indexOf('<') === 0
      && argument.lastIndexOf('>') === argument.length - 1) {
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
