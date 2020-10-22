// TODO: SlideUp, SlideDown, SlideToggle
// TODO: FadeIn, FadeOut, FadeToggle
// TODO: Add animate

const jLightGlobalData = {};

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

  if (openingTag.indexOf('/') === 0) {
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

  if (!jLightGlobalData[element]) {
    jLightGlobalData[element] = {
      jLightInternal: {},
    };
  }

  jLightGlobalData[element].jLightInternal.selector = tagName;

  return element;
};

const documentAndWindowEventListener = (argument) => ({
  on: (type, callbackOrSelector, delegatedCallback) => {
    if (typeof callbackOrSelector === 'function') {
      argument.addEventListener(type, (event) => {
        callbackOrSelector(event, event.jLightEventData);
      });
    } else {
      argument.addEventListener(type, (event) => {
        if (event.target.matches(callbackOrSelector)) {
          delegatedCallback(event, event.jLightEventData);
        }
      });
    }

    return documentAndWindowEventListener(argument);
  },
  trigger: (type, jLightEventData) => {
    const theEvent = document.createEvent('Event');

    theEvent.jLightEventData = jLightEventData;
    theEvent.initEvent(type, true, true);
    argument.dispatchEvent(theEvent);

    return documentAndWindowEventListener(argument);
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
  const closest = element.parentNode;

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

      if (!jLightGlobalData[element]) {
        jLightGlobalData[element] = {
          jLightInternal: {},
        };
      }

      element.style.display = type || jLightGlobalData[element].jLightInternal.display || 'block';
    });

    return $(elements);
  },
  hide: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);

      if (!jLightGlobalData[element]) {
        jLightGlobalData[element] = {
          jLightInternal: {},
        };
      }

      jLightGlobalData[element].jLightInternal.display = computedStyles.getPropertyValue('display');
      element.style.display = 'none';
    });

    return $(elements);
  },
  on: (type, callbackOrSelector, delegatedCallback) => {
    if (typeof callbackOrSelector === 'function') {
      elements.forEach((element) => {
        element.addEventListener(type, (event) => {
          callbackOrSelector(event, event.jLightEventData);
        });
      });
    } else {
      elements.forEach((element) => {
        document.addEventListener(type, (event) => {
          if (element.contains(event.target) && event.target.matches(callbackOrSelector)) {
            delegatedCallback(event, event.jLightEventData);
          }
        });
      });
    }

    return $(elements);
  },
  delegate: (type, callback) => {
    if (!jLightGlobalData[elements[0]]) {
      jLightGlobalData[elements[0]] = {
        jLightInternal: {},
      };
    }

    document.addEventListener(type, (event) => {
      if (event.target.matches(jLightGlobalData[elements[0]].jLightInternal.selector)) {
        callback(event, event.jLightEventData);
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
        if (!jLightGlobalData[element]) {
          jLightGlobalData[element] = {
            jLightInternal: {},
          };
        }

        jLightGlobalData[element] = {
          ...theKey,
          jLightInternal: {
            ...jLightGlobalData[element].jLightInternal,
          },
        };
      });

      return $(elements);
    }

    const key = dashCaseToCamelCase(theKey);

    if (value) {
      elements.forEach((element) => {
        if (!jLightGlobalData[element]) {
          jLightGlobalData[element] = {
            jLightInternal: {},
          };
        }

        jLightGlobalData[element][key] = value;
      });

      return $(elements);
    }

    let data;

    elements.forEach((element) => {
      if (!data) {
        if (!theKey) {
          data = jLightGlobalData[element];
        } else {
          data = jLightGlobalData[element][key];

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
  remove: () => {
    elements.forEach((element) => {
      element.remove();
    });
  },
  text: (theText) => {
    let text = theText;

    if (text) {
      elements.forEach((theElement) => {
        const element = theElement;

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
      elements.forEach((theElement) => {
        const element = theElement;

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
    elements.forEach((element) => {
      $elements.elements.forEach((referenceElement) => {
        if (element !== referenceElement) {
          element.insertAdjacentElement('beforeBegin', referenceElement);
        }
      });
    });

    return $(elements);
  },
  after: ($elements) => {
    elements.forEach((element) => {
      $elements.elements.forEach((referenceElement) => {
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
      parents.push(element.parentNode);
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
    // TODO: This is probably way too complicated

    const siblingGroups = {};
    const siblings = {};

    elements.forEach((element) => {
      const { parentNode } = element;

      if (!siblingGroups[parentNode]) {
        Array.from(parentNode.children).forEach((child) => {
          if (child !== element) {
            siblingGroups[parentNode] = [...siblingGroups[parentNode] || [], child];
          }
        });
      }
    });

    Object.values(siblingGroups).forEach((siblingGroup) => {
      siblingGroup.forEach((sibling) => {
        if (!siblings[sibling]) {
          siblings[sibling] = sibling;
        }
      });
    });

    return $(Object.values(siblings));
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
  filter: (selector) => {
    const filteredElements = [];

    elements.forEach((element) => {
      if (element.matches(selector)) {
        filteredElements.push(element);
      }
    });

    return $(filteredElements);
  },
  find: (selector) => {
    let foundElements = [];

    elements.forEach((element) => {
      foundElements = [...foundElements, ...Array.from(element.querySelectorAll(selector))];
    });

    return $(foundElements);
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
    return documentAndWindowEventListener(argument);
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
        if (!jLightGlobalData[element]) {
          jLightGlobalData[element] = {
            jLightInternal: {},
          };
        }

        jLightGlobalData[element].jLightInternal.selector = argument;
      });
    }
  }

  return $(elements);
};
