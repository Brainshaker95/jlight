// TODO: Add event delegation
// TODO: SlideUp, SlideDown, SlideToggle
// TODO: FadeUp, FadeDown, FadeToggle
// TODo: Add animate

const jLightGlobalData = {};

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
    if (typeof property === 'object') {
      elements.forEach((theElement) => {
        const element = theElement;

        Object.entries(property).forEach(([key, val]) => {
          element.style[key] = val;
        });
      });
    } else {
      elements.forEach((theElement) => {
        const element = theElement;

        element.style[property] = value;
      });
    }

    return $(elements);
  },
  show: () => {
    elements.forEach((theElement) => {
      const element = theElement;

      if (!jLightGlobalData[element]) {
        jLightGlobalData[element] = {};
      }

      element.style.display = jLightGlobalData[element].display || 'block';
    });

    return $(elements);
  },
  hide: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);

      if (!jLightGlobalData[element]) {
        jLightGlobalData[element] = {};
      }

      jLightGlobalData[element].display = computedStyles.getPropertyValue('display');
      element.style.display = 'none';
    });

    return $(elements);
  },
  on: (type, callback) => {
    elements.forEach((element) => {
      element.addEventListener(type, (event) => {
        callback(event, event.jLightEventData);
      });
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
      callback(element, index);
    });

    return $(elements);
  },
  is: (property) => {
    let is;

    elements.forEach((element) => {
      if (!is) {
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
  eq: (index) => $([elements[index]]),
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
    const closestElements = {};

    elements.forEach(({ parentNode }) => {
      if (parentNode.matches(selector)
          && !closestElements[parentNode]) {
        closestElements[parentNode] = parentNode;
      }
    });

    return $(Object.values(closestElements));
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
        value = element.value;
      }
    });

    return value;
  },
});

const documentAndWindowEventListener = (argument) => ({
  on: (type, callback) => {
    argument.addEventListener(type, (event) => {
      callback(event, event.jLightEventData);
    });

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

  let elements;

  if (typeof argument === 'string') {
    elements = document.querySelectorAll(argument);
  }

  if (!elements.length) {
    return {};
  }

  return $(Array.from(elements));
};
