// TODO: SlideUp, SlideDown, SlideToggle
// TODO: FadeIn, FadeOut, FadeToggle
// TODO: Add animate
// TODO: Add ajax
// TODO: Add not
// TODO: Add has

const jLightGlobalData = {};

const getElementPath = (element) => {
  let path = element.nodeName;
  let parent = element.parentElement;

  while (parent) {
    path = `${parent.nodeName}/${path}`;
    parent = parent.parentElement;
  }

  return `${path
    .replace(/\s+/g, '')
    .replace('HTML/BODY/', '')
    .toLowerCase()}`;
};

const initalizeJLightElementData = (element, selector) => {
  const elementPath = getElementPath(element);

  if (!jLightGlobalData[elementPath]) {
    jLightGlobalData[elementPath] = {
      jLightInternal: { selector },
    };
  }
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

  const elementPath = getElementPath(element);

  if (!jLightGlobalData[elementPath]) {
    jLightGlobalData[elementPath] = {
      jLightInternal: {},
    };
  }

  jLightGlobalData[elementPath].jLightInternal.selector = tagName;

  return element;
};

const documentAndWindowJLightElement = (argument) => ({
  on: (type, callbackOrSelector, delegatedCallback) => {
    if (typeof callbackOrSelector === 'function' || callbackOrSelector === false) {
      argument.addEventListener(type, (event) => {
        if (callbackOrSelector === false
          || callbackOrSelector(event, event.jLightEventData) === false) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      });
    } else {
      argument.addEventListener(type, (event) => {
        if (event.target.matches(callbackOrSelector)) {
          if (delegatedCallback === false
            || delegatedCallback(event, event.jLightEventData) === false) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
          }
        }
      });
    }

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
      if (element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
      } else {
        element.classList.add(cssClass);
      }
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
      const elementPath = getElementPath(element);

      if (!jLightGlobalData[elementPath]) {
        jLightGlobalData[elementPath] = {
          jLightInternal: {},
        };
      }

      element.style.display = type || jLightGlobalData[elementPath].jLightInternal.display || 'block';
    });

    return $(elements);
  },
  hide: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);
      const elementPath = getElementPath(element);

      if (!jLightGlobalData[elementPath]) {
        jLightGlobalData[elementPath] = {
          jLightInternal: {},
        };
      }

      jLightGlobalData[elementPath].jLightInternal.display = computedStyles.getPropertyValue('display');
      element.style.display = 'none';
    });

    return $(elements);
  },
  toggle: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);
      const elementPath = getElementPath(element);

      if (!jLightGlobalData[elementPath]) {
        jLightGlobalData[elementPath] = {
          jLightInternal: {},
        };
      }

      if (computedStyles.getPropertyValue('display') === 'none') {
        element.style.display = jLightGlobalData[elementPath].jLightInternal.display || 'block';
      } else {
        jLightGlobalData[elementPath].jLightInternal.display = computedStyles.getPropertyValue('display');
        element.style.display = 'none';
      }
    });

    return $(elements);
  },
  on: (type, callbackOrSelector, delegatedCallback) => {
    if (typeof callbackOrSelector === 'function' || callbackOrSelector === false) {
      elements.forEach((element) => {
        element.addEventListener(type, (event) => {
          if (callbackOrSelector === false
            || delegatedCallback === false
            || callbackOrSelector(event, event.jLightEventData) === false) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
          }
        });
      });
    } else {
      elements.forEach((element) => {
        document.addEventListener(type, (event) => {
          if (element.contains(event.target) && event.target.matches(callbackOrSelector)) {
            if (delegatedCallback === false
              || delegatedCallback(event, event.jLightEventData) === false) {
              event.preventDefault();
              event.stopPropagation();
              event.stopImmediatePropagation();
            }
          }
        });
      });
    }

    return $(elements);
  },
  delegate: (type, callback) => {
    const elementPath = getElementPath(elements[0]);

    if (!jLightGlobalData[elementPath]) {
      jLightGlobalData[elementPath] = {
        jLightInternal: {},
      };
    }

    document.addEventListener(type, (event) => {
      if (event.target.matches(jLightGlobalData[elementPath].jLightInternal.selector)) {
        if (callback === false
          || callback(event, event.jLightEventData) === false) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      }
    });
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
      callback($(element), index);
    });

    return $(elements);
  },
  is: (property) => {
    let is;

    elements.forEach((element) => {
      if (is === undefined) {
        is = element[property];
      }
    });

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
      return elements[0].getAttribute(attribute);
    }

    elements.forEach((element) => {
      element.setAttribute(attribute, value);
    });

    return $(elements);
  },
  data: (theKey, value) => {
    if (typeof theKey === 'object' && theKey !== null) {
      elements.forEach((element) => {
        const elementPath = getElementPath(element);

        if (!jLightGlobalData[elementPath]) {
          jLightGlobalData[elementPath] = {
            jLightInternal: {},
          };
        }

        jLightGlobalData[elementPath] = {
          ...theKey,
          jLightInternal: {
            ...jLightGlobalData[elementPath].jLightInternal,
          },
        };
      });

      return $(elements);
    }

    const key = dashCaseToCamelCase(theKey);

    if (value) {
      elements.forEach((element) => {
        const elementPath = getElementPath(element);

        if (!jLightGlobalData[elementPath]) {
          jLightGlobalData[elementPath] = {
            jLightInternal: {},
          };
        }

        jLightGlobalData[elementPath][key] = value;
      });

      return $(elements);
    }

    let data;

    elements.forEach((element) => {
      if (!data) {
        const elementPath = getElementPath(element);

        if (!theKey) {
          data = jLightGlobalData[elementPath];
        } else {
          data = jLightGlobalData[elementPath][key];

          if (!data) {
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
    let theElements = $elements;
    const addedElements = [];

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
      });

      return null;
    }

    const remainingElements = [];
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [...document.querySelectorAll($elements)];
    } else {
      theElements = [theElements];
    }

    elements.forEach((element) => {
      let wasRemoved;

      theElements.forEach((referenceElement) => {
        if (element === referenceElement) {
          if (removeFromDom) {
            element.remove();
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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = [createElementFromString($elements)];
    } else {
      theElements = [theElements];
    }

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
    let theElements = $elements;

    if (theElements.elements) {
      theElements = theElements.elements;
    } else if (typeof $elements === 'string') {
      theElements = $($elements);
    } else {
      theElements = [theElements];
    }

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
      elements.forEach((element) => {
        element.style.width = `${value}${typeof value !== 'string' ? 'px': ''}`;
      });

      return $(elements);
    }

    let width;

    elements.forEach((element) => {
      if (!width) {
        const computedStyles = window.getComputedStyle(element);

        width = parseFloat(computedStyles.getPropertyValue('width'), 10);
      }
    });

    return width;
  },
  height: (value) => {
    if (value) {
      elements.forEach((element) => {
        element.style.height = `${value}${typeof value !== 'string' ? 'px': ''}`;
      });

      return $(elements);
    }

    let height;

    elements.forEach((element) => {
      if (!height) {
        const computedStyles = window.getComputedStyle(element);

        height = parseFloat(computedStyles.getPropertyValue('height'), 10);
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
      elements.forEach((element) => {
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
      elements.forEach((element) => {
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
  offset: (value) => {
    if (value) {
      const { top, left } = value;

      elements.forEach((element) => {
        const computedStyles = window.getComputedStyle(element);

        element.style.top = top
          ? `${top}${typeof top !== 'string' ? 'px': ''}`
          : parseFloat(computedStyles.getPropertyValue('top'), 10);

        element.style.left = left
          ? `${left}${typeof left !== 'string' ? 'px': ''}`
          : parseFloat(computedStyles.getPropertyValue('left'), 10);
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

    return {
      top: offset.top || 0,
      left: offset.left || 0,
    };
  },
  animate: (properties, speed = 300, easing, callback) => {
    elements.forEach((theElement) => {
      const element = theElement;
      const startComputedStyles = window.getComputedStyle(element);

      Object.entries(properties).forEach(([theKey, value]) => {
        const key = camelCaseToDashCase(theKey);
        const targetValue = parseInt(value, 10);
        const startValue = parseInt(startComputedStyles.getPropertyValue(key), 10);
        const difference = targetValue - startValue;
        let animation;
        const valueToAnimateEachFrame = difference !== 0
          ? Math.round(difference / speed)
          : 0;

        // TODO: Implement duration correctly
        // TODO: Implement easing and callback

        console.log(valueToAnimateEachFrame);

        const doAnimate = () => {
          const currentComputedStyles = window.getComputedStyle(element);
          const currentValue = parseInt(currentComputedStyles.getPropertyValue(key), 10);
          const nextValue = currentValue + valueToAnimateEachFrame;

          if (Math.abs(nextValue - targetValue) >= Math.abs(valueToAnimateEachFrame)) {
            // TODO: Add dynamic units

            element.style[key] = `${nextValue}px`;

            animation = window.requestAnimationFrame(doAnimate);
          } else {
            element.style[key] = `${targetValue}px`;

            window.cancelAnimationFrame(animation);
          }
        };

        animation = window.requestAnimationFrame(doAnimate);
      });
    });
  },
});

export default (argument) => {
  if (typeof argument === 'function') {
    document.addEventListener('DOMContentLoaded', argument);

    return {};
  }

  if (argument === document || argument === window) {
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
