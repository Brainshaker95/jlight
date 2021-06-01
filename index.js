/* eslint-disable jsdoc/check-types */
/* eslint-disable jsdoc/tag-lines */

/**
 * @typedef {Object} jLight
 *
 * @property {HTMLElement[]} elements
 * The collections elements.
 *
 * @property {number} length
 * The collections element count.
 *
 * @property {string} tagName
 * The collections first elements tag name.
 *
 * @property {cssClassCallback} addClass
 * Adds css classes to the collections elements.
 *
 * @property {cssClassCallback} removeClass
 * Removes css classes to the collections elements.
 *
 * @property {toggleCssClassCallback} toggleClass
 * Toggles css classes of the collections elements.
 *
 * @property {hasClassCallback} hasClass
 * Whether at least one of the collections elements has all of the provided classes.
 *
 * @property {cssCallback} css
 * Applies style rules to the collections elements, gets the current style rules
 * or gets the current value for a specific style property.
 *
 * @property {visibilityCallback} show
 * Shows the collections elements.
 *
 * @property {defaultCallback} hide
 * Hides the collections elements.
 *
 * @property {toggleVisibilityCallback} toggle
 * Toggles the collections elements visibility.
 *
 * @property {onCallback} on
 * Adds event handlers to elements.
 *
 * @property {onCallback} once
 * Adds event handlers to elements fo one time execution.
 *
 * @property {offCallback} off
 * Removes event handlers from elements.
 *
 * @property {delegateCallback} delegate
 * [DEPRECATED] Delegates event handlers to elements.
 *
 * @property {delegateCallback} undelegate
 * [DEPRECATED] Undelegates event handlers from elements.
 *
 * @property {triggerCallback} trigger
 * Triggers events on the collections elements.
 *
 * @property {propCallback} prop
 * Sets a property of the collections elements or gets its value.
 *
 * @property {attrCallback} attr
 * Sets an attribute or attributes to the collections elements or gets its value or values.
 *
 * @property {removeAttrCallback} removeAttr
 * Removes the supplied attributes from the collections elements.
 *
 * @property {contentCallback} text
 * Gets or sets the text content of the collections elements.
 *
 * @property {contentCallback} html
 * Gets or sets the HTML content of the collections elements.
 *
 * @property {valCallback} val
 * Gets or sets the collections elements values.
 *
 * @property {dataCallback} data
 * Gets or sets the jLight data of the collections elements.
 *
 * @property {defaultCallback} empty
 * Empties the collections elements HTML content.
 *
 * @property {cloneCallback} clone
 * Clones the collection.
 *
 * @property {elementsCallback} add
 * Adds elements to the collection.
 *
 * @property {removeCallback} remove
 * Removes elements from the collection.
 *
 * @property {elementsCallback} prepend
 * Prepends elements to the collections elements.
 *
 * @property {elementsCallback} append
 * Appends elements to the collections elements.
 *
 * @property {elementsCallback} prependTo
 * Prepends the collections elements to elements.
 *
 * @property {elementsCallback} appendTo
 * Appends the collections elements to elements.
 *
 * @property {elementsCallback} insertBefore
 * Inserts the collections elements before elements.
 *
 * @property {elementsCallback} insertAfter
 * Inserts the collections elements after elements.
 *
 * @property {elementsCallback} before
 * Inserts elements before the collections elements.
 *
 * @property {elementsCallback} after
 * Inserts elements after the collections elements.
 *
 * @property {elementsCallback} wrap
 * Wraps the collections elements in elements.
 *
 * @property {indexElementCallback} get
 * Gets the element at the supplied index from the collection.
 *
 * @property {indexjLightCallback} eq
 * Gets the jLight element at the supplied index from the collection.
 *
 * @property {defaultCallback} first
 * Gets the first jLight element from the collection.
 *
 * @property {defaultCallback} last
 * Gets the last jLight element from the collection.
 *
 * @property {defaultCallback} parent
 * Gets a jLight collection from the collections parent elements.
 *
 * @property {defaultCallback} parents
 * Gets a jLight collection from all the collections parent elements.
 *
 * @property {defaultCallback} children
 * Gets a jLight collection from the collections children elements.
 *
 * @property {defaultCallback} siblings
 * Gets a jLight collection from the collections sibling elements.
 *
 * @property {selectorCallback} prev
 * Gets a jLight collection from the collections previous sibling elements.
 *
 * @property {selectorCallback} next
 * Gets a jLight collection from the collections next sibling elements.
 *
 * @property {selectorCallback} closest
 * Gets a jLight collection from all the collections parent elements matching the selector.
 *
 * @property {elementsCallback} not
 * Gets a jLight collection from the collections elements which are not part of elements.
 *
 * @property {elementsCallback} has
 * Gets a jLight collection from the collections elements which contain elements.
 *
 * @property {filterCallback} filter
 * Gets a filtered jLight collection based on the input.
 *
 * @property {outerIteratorCallback} forEach
 * Runs a function on each of the collections elements.
 *
 * @property {outerIteratorCallback} each
 * [DEPRECATED] Runs a function on each of the collections elements.
 *
 * @property {sliceCallback} slice
 * Slices the collection.
 *
 * @property {spliceCallback} splice
 * Splices the collection.
 *
 * @property {arrayLengthCallback} push
 * Pushes elements to the collection.
 *
 * @property {defaultCallback} pop
 * Pops the last element from the collection.
 *
 * @property {defaultCallback} reverse
 * Reverses a collection.
 *
 * @property {defaultCallback} shift
 * Shifts a collection.
 *
 * @property {arrayLengthCallback} unshift
 * Unshifts a collection.
 *
 * @property {sortCallback} sort
 * Sorts a collection.
 *
 * @property {reduceCallback} reduce
 * Reduces a collection.
 *
 * @property {mapCallback} map
 * Maps a collection.
 *
 * @property {multipleElementsCallback} concat
 * Concats a collection with other collections.
 *
 * @property {elementsBooleanCallback} includes
 * Whether the collections elements include at least one of elements.
 *
 * @property {arrayBooleanCallback} some
 * Whether at least one of the collections elements meets the conditon.
 *
 * @property {arrayBooleanCallback} every
 * Whether every one of the collections elements meets the conditon.
 *
 * @property {elementsNumberCallback} indexOf
 * Gets the given elements index inside the collection.
 *
 * @property {elementsNumberCallback} lastIndexOf
 * Gets the given elements last index inside the collection.
 *
 * @property {selectorCallback} find
 * Gets a jLight collection from the collections children elements matching the selector.
 *
 * @property {getOrSetValueCallback} width
 * Gets or sets the width of the collections elements.
 *
 * @property {getOrSetValueCallback} height
 * Gets or sets the height of the collections elements.
 *
 * @property {dimensionCallback} innerWidth
 * Gets the inner width of the collections elements.
 *
 * @property {dimensionCallback} innerHeight
 * Gets the inner height of the collections elements.
 *
 * @property {outerDimensionCallback} outerWidth
 * Gets the outer width of the collections elements.
 *
 * @property {outerDimensionCallback} outerHeight
 * Gets the outer height of the collections elements.
 *
 * @property {dimensionCallback} scrollWidth
 * Gets the scroll width of the collections elements.
 *
 * @property {dimensionCallback} scrollHeight
 * Gets the scroll height of the collections elements.
 *
 * @property {getOrSetValueCallback} scrollTop
 * Gets or sets the scrollTop of the collections elements.
 *
 * @property {getOrSetValueCallback} scrollLeft
 * Gets or sets the scrollLeft of the collections elements.
 *
 * @property {offsetCallback} offset
 * Gets or sets the collections elements offset.
 *
 * @property {animateCallback} animate
 * Animates the given properties to the given values on the collections elements.
 *
 * @property {scrollToCallback} scrollTo
 * Scrolls the collections elements to elements.
 *
 * @property {defaultCallback} stop
 * Stops all running animations on the collections elements.
 *
 * @property {fadeCallback} fadeIn
 * Fades the collections elements in.
 *
 * @property {animateOutCallback} fadeOut
 * Fades the collections elements out.
 *
 * @property {fadeToggleCallback} fadeToggle
 * Toggles the display state of the collections elements by fading.
 *
 * @property {slideCallback} slideDown
 * Slides the collections elements down.
 *
 * @property {animateOutCallback} slideUp
 * Slides the collections elements up.
 *
 * @property {slideToggleCallback} slideToggle
 * Toggles the display state of the collections elements by sliding.
 *
 * @property {isCallback} is
 * Whether a property of an element of the collection is true
 * or if an element of the collection is part of another set.
 *
 * @property {elementsBooleanCallback} contains
 * Whether the collections elements contain at least one of elements.
 *
 * @property {inViewCallback} inView
 * Checks if the collections first element is in view or runs a function if that is the case.
 *
 * @property {delayCallback} delay
 * Delays code execution.
 *
 * @property {whenCallback} when
 * Calls the supplied function with the supplied arguments if the given condition is met.
 *
 * @property {isSameJLightCallback} isSameJLight
 * Checks if two jLight collections are the same.
 *
 * @property {stringCallback} serialize
 * Serializes the collections elements values to a URL encoded string.
 *
 * @property {stringObjectCallback} serializeJson
 * Serializes the collections elements values to a JSON object.
 */

/* eslint-enable jsdoc/tag-lines */

/**
 * @callback defaultCallback
 * @returns {jLight} jLight collection
 */

/**
 * @callback ajaxCompleteCallback
 * @param {*} [response] The requests response
 * @param {number} [status] The requests HTTP status code
 * @param {XMLHttpRequest} [request] The orginal XMLHttpRequest object
 * @returns {void} void
 */

/**
 * @callback xhrCallback
 * @param {XMLHttpRequest} [request] The orginal XMLHttpRequest object
 * @returns {XMLHttpRequest} XMLHttpRequest
 */

/**
 * @callback onStepCallback
 * @param {number} percent The eased percentage of the current time over the duration
 * @returns {void} void
 */

/**
 * @callback cssClassCallback
 * @param {string} cssClasses Space sepearated classes to supply to the function
 * @returns {jLight} jLight collection
 */

/**
 * @callback toggleCssClassCallback
 * @param {string} cssClasses Space sepearated classes to supply to the function
 * @param {boolean} [force] Force whether to add or remove classes
 * @returns {jLight} jLight collection
 */

/**
 * @callback hasClassCallback
 * @param {string} cssClasses Space sepearated classes to supply to the function
 * @returns {boolean}
 * Whether at least one of the collections elements has all of the provided classes
 */

/**
 * @callback cssCallback
 * @param {string|Object.<string, string>} [property] The property name or the properties to set
 * @param {string} [value] The value to set the supplied property to
 * @returns {jLight|string|CSSStyleDeclaration}
 * jLight collection, property value or elements CSSStyleDeclaration
 */

/**
 * @callback visibilityCallback
 * @param {string} [type] The css display type to apply to the function
 * @returns {jLight} jLight collection
 */

/**
 * @callback toggleVisibilityCallback
 * @param {string} [type] The css display type to apply to the function
 * @param {boolean} [force] Force whether to show or hide elements
 * @returns {jLight} jLight collection
 */

/**
 * @callback eventCallback
 * @param {Event} [event] The dispatched event with jLight elements for the events
 * currentTarget and target attached (event.$currentTarget and event.$target)
 * @returns {void|boolean} If the callback returns false the events default behavior,
 * propagation and immediate propagation will be prevented.
 */

/* eslint-disable max-len */

/**
 * @callback onCallback
 * @param {string} eventNames Space separated list of event names
 * @param {eventCallback|string|boolean} callbackOrSelector The function to execute when the event occurs,
 * a selector to delegate events to children of the current collections elements
 * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
 * @param {eventCallback|boolean|
 *   {capture: boolean, once: boolean, passive: boolean, signal: AbortSignal, mozSystemGroup: boolean}
 * } [delegatedCallbackOrOptions]
 * The callback to run when the event is delegated, the options to apply to the listener
 * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
 * @param {boolean|
 *  {capture: boolean, once: boolean, passive: boolean, signal: AbortSignal, mozSystemGroup: boolean}
 * } [options]
 * The options to apply to the listener
 * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
 * @returns {jLight} jLight collection
 */

/* eslint-enable max-len */

/**
 * @callback offCallback
 * @param {string} eventNames Space separated list of event names
 * @param {Function} [callback] The function to remove from being executed when the event occurs
 * @returns {jLight} jLight collection
 */

/**
 * @callback delegateCallback
 * @param {string} eventNames Space separated list of event names
 * @param {Function} callback The function to apply
 * @returns {jLight} jLight collection
 */

/**
 * @callback triggerCallback
 * @param {string} eventNames Space separated list of event names
 * @param {*} [jLightEventData] Custom data passed to the event
 * @returns {jLight} jLight collection
 */

/**
 * @callback propCallback
 * @param {string} property The property to set or get
 * @param {boolean} [state] The state to set the property to
 * @returns {jLight|boolean}
 * jLight collection or if the property is set on at least one of the collections elements
 */

/**
 * @callback attrCallback
 * @param {string|Object.<string, *>|boolean} [attribute]
 * The attribute or attributes to set or get
 * or wheter to convert the resulting objects keys into camel case
 * @param {*} [value] The value to set the attribute to
 * @returns {jLight|Object.<string, string|true>|boolean}
 * jLight collection, the attributes value, an object of each attribute on the
 * collections elements or if the attribute whether present on at least one of
 * the collections elements
 */

/**
 * @callback removeAttrCallback
 * @param {string} attribute Space sepearated attributes to remove
 * @returns {jLight} jLight collection
 */

/**
 * @callback iteratorCallback
 * @param {jLight} [$element] The current jLight element
 * @param {number} [index] The current index
 * @returns {void} void
 */

/**
 * @callback valCallback
 * @param {boolean|null|string|boolean[]|Function|iteratorCallback} [valueOrFunction]
 * The value to set the collections elements value to.
 * If a function is supplied its return value will be set as the value.
 * If the jLight element is an HTMLSelectElement with the multiple
 * attribute each option will be passed separately to the function.
 * In that case an array of booleans can be used to set the selected options.
 * @returns {jLight|boolean|string} jLight collection or the value
 */

/**
 * @callback dataCallback
 * @param {string|Object.<string, *>} [keyOrData] The key of the data value to get or set or
 * an object of data values to set.
 * @param {string|string[]} [value] The value to set the data at the supplied key to.
 * @returns {jLight|*} jLight collection
 */

/**
 * @callback cloneCallback
 * @param {boolean} [deep] Whether to apply deep cloning of the affected nodes (default: true)
 * @returns {jLight} jLight collection
 */

/**
 * @callback elementsCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} elements
 * The elements to apply the function to
 * @returns {jLight} jLight collection
 */

/**
 * @callback removeCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} [elements] The elements to remove
 * @param {boolean} [removeFromDom]
 * Whether the elements should also be removed from the DOM (default: true)
 * @returns {jLight|null} jLight collection or null
 */

/**
 * @callback contentCallback
 * @param {string} [content] The content to supply to the function
 * @returns {jLight|string} jLight collection or the text content
 */

/**
 * @callback indexElementCallback
 * @param {number} index The index to supply to the function
 * @returns {HTMLElement|undefined} The element or null
 */

/**
 * @callback indexjLightCallback
 * @param {number} index The index to supply to the function
 * @returns {jLight} jLight collection
 */

/**
 * @callback selectorCallback
 * @param {string} [selector] The selector to use for matching elements
 * @returns {jLight} jLight collection
 */

/**
 * @callback elementsBooleanCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} elements
 * The elements to supply to the function
 * @returns {boolean} If the conditon is met
 */

/**
 * @callback filterCallback
 * @param {string|iteratorCallback|iteratorBooleanCallback} callbackOrSelector
 * The selector to filter the collection by or a custom
 * function to decide which elements to filter out
 * @returns {jLight} jLight collection
 */

/**
 * @callback outerIteratorCallback
 * @param {iteratorCallback} callback The function to apply to each element
 * @returns {jLight} jLight collection
 */

/**
 * @callback sliceCallback
 * @param {number} [start] The index to start the slicing
 * @param {number} [end] The index to end the slicing
 * @returns {jLight} jLight collection
 */

/**
 * @callback spliceCallback
 * @param {number} start The index to start the splicing
 * @param {number} [deleteCount] The count of elements to delete
 * @returns {jLight} jLight collection
 */

/**
 * @callback arrayLengthCallback
 * @param {...(jLight|string|HTMLElement|HTMLCollection|NodeList)} elements
 * The elements to apply to the function.
 * @returns {number} The collections new length
 */

/**
 * @callback compareCallback
 * @param {jLight} $element1 The element to compare
 * @param {jLight} $element2 The element to compare to
 * @returns {number} The value to determine which place the element to compare will take
 */

/**
 * @callback sortCallback
 * @param {compareCallback} compareFunction The function used for sorting
 * @returns {jLight} jLight collection
 */

/**
 * @callback reduceInnerCallback
 * @param {*} accumulator The accumulated value
 * @param {jLight} $element The current element
 * @param {number} [index] The current elements index
 * @returns {*} The current reduction result
 */

/**
 * @callback reduceCallback
 * @param {reduceInnerCallback} callback The function used for reduction
 * @param {*} [initialValue] The initial value used for reduction
 * @returns {*} The reduction result
 */

/**
 * @callback mapInnerCallback
 * @param {jLight} [$element] The current element
 * @param {number} [index] The current elements index
 * @returns {jLight|string|HTMLElement|HTMLCollection|NodeList} The elements to map
 */

/**
 * @callback mapCallback
 * @param {mapInnerCallback} callback The function used for mapping
 * @returns {jLight} jLight collection
 */

/**
 * @callback multipleElementsCallback
 * @param {...(jLight|string|HTMLElement|HTMLCollection|NodeList|
 * Array.<jLight|string|HTMLElement|HTMLCollection|NodeList>)} elements
 * The elements to apply to the function.
 * @returns {jLight} jLight collection
 */

/**
 * @callback iteratorBooleanCallback
 * @param {jLight} [$element] The current jLight element
 * @param {number} [index] The current index
 * @returns {boolean} Whether the condition is met
 */

/**
 * @callback arrayBooleanCallback
 * @param {iteratorBooleanCallback} callback
 * The elements to supply to the function
 * @returns {boolean} If the conditon is met
 */

/**
 * @callback elementsNumberCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} elements
 * The elements to supply to the function
 * @returns {number} The resulting number
 */

/**
 * @callback getOrSetValueCallback
 * @param {number} [value] The value to supply to the function
 * @returns {jLight|number} jLight collection or the value
 */

/**
 * @callback dimensionCallback
 * @returns {number} The dimension value
 */

/**
 * @callback outerDimensionCallback
 * @param {boolean} [includeMargins] Whether to include the elements margins (default: false)
 * @returns {number} The dimension value
 */

/**
 * @callback offsetCallback
 * @param {boolean|{top: number, left: number}} [value]
 * The value to set the elements offset to or if the
 * returned offset should be relative to the viewport
 * @param {boolean} [relativeToViewport]
 * Whether the offset should be set relative to the viewport (default: false)
 * @returns {jLight|{top: number, left: number}} jLight collection or elements offset
 */

/**
 * @callback animateCallback
 * @param {Object.<string, string|number>} [properties] The css properties and values to animate
 * @param {number} [duration] The duration for the animation in ms (default: 300)
 * @param {Function} [callback] The function to run after the animation is complete (default: noop)
 * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
 * @returns {jLight} jLight collection
 */

/**
 * @callback scrollToCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} elements
 * The elements to scroll the collections elements to
 * @param {number} [duration] The duration of the scroll animation in ms (default: 300)
 * @param {{x: number, y: number}|{}} [offset] The offset for the target position
 * @param {Function} [callback] The function to run after the scrolling is complete
 * @returns {jLight} jLight collection
 */

/**
 * @callback animateOutCallback
 * @param {number} [duration] The duration for the animation in ms (default: 300)
 * @param {Function} [callback] The function to run after the animation is complete (default: noop)
 * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
 * @returns {jLight} jLight collection
 */

/**
 * @callback fadeCallback
 * @param {number} [duration] The duration for the animation in ms (default: 300)
 * @param {Function} [callback] The function to run after the animation is complete (default: noop)
 * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
 * @param {string} [type]
 * The css display type to apply to the collections elements
 * @returns {jLight} jLight collection
 */

/**
 * @callback fadeToggleCallback
 * @param {number} [duration] The duration for the animation in ms (default: 300)
 * @param {Function} [callback] The function to run after the animation is complete (default: noop)
 * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
 * @param {string} [type]
 * The css display type to apply to the collections elements
 * @param {boolean} [force] Force whether to fade in or out
 * @returns {jLight} jLight collection
 */

/**
 * @callback slideCallback
 * @param {number} [duration] The duration for the animation in ms (default: 300)
 * @param {Function} [callback] The function to run after the animation is complete (default: noop)
 * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
 * @param {string} [type]
 * The css display type to apply to the collections elements
 * @param {string} [height] The css height value to end the sliding animation
 * @returns {jLight} jLight collection
 */

/**
 * @callback slideToggleCallback
 * @param {number} [duration] The duration for the animation in ms (default: 300)
 * @param {Function} [callback] The function to run after the animation is complete (default: noop)
 * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
 * @param {string} [type]
 * The css display type to apply to the collections elements
 * @param {string} [height] The css height value to end the sliding animation
 * @param {boolean} [force] Force whether to slide down or up
 * @returns {jLight} jLight collection
 */

/**
 * @callback isCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} propertyOrElements
 * The property or set to compare the collections elements to
 * @returns {boolean} If the property is set on one of the collections elements or
 * at least on of the elements is contained in the supplied elements
 */

/**
 * @callback inViewCallback
 * @param {Function|{top: number, bottom: number, left: number, right: number}} [offsetOrCallback]
 * The offset used for determining if the element is in view
 * or the function to run each time that is the case
 * @param {Function|
 *  {scrollTimer: ?number, isInView: ?Function, onEnter: ?Function, onExit: ?Function}
 * } [callbackOrOptions]
 * The function to run each time the element is in view
 * or a custom options object to define the functions behavior
 * (defaults: { scrollTimer: 100, isInView: noop, onEnter: noop, onExit: noop })
 * @returns {jLight|boolean} jLight collection or whether the collections first element is in view
 */

/**
 * @callback delayCallback
 * @param {number} [delay] The duration to delay the code execution for
 * @returns {Promise} The corresponding promise
 */

/**
 * @callback whenCallback
 * @param {boolean|Function} condition The condition to check for.
 * If a function is supplied its return value will be used for checking
 * @param {string|Function} callback The function to run when the condition is met.
 * If a string is provided it should be a valid jLight function name
 * @param {...*} [args] The arguments to supply to the given jLight function
 * @returns {jLight} jLight collection
 */

/**
 * @callback isSameJLightCallback
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements The elements to compare to
 * @returns {boolean} If the jLight collections are the same
 */

/**
 * @callback stringCallback
 * @returns {string} The resulting string
 */

/**
 * @callback stringObjectCallback
 * @returns {Object.<string, string>} The resulting JSON object
 */

/* eslint-disable jsdoc/valid-types */

/**
 * @callback
 */

/* eslint-enable jsdoc/valid-types */

const jLightGlobalElements = [];
const jLightGlobalData = [];

const initalizeJLightElementData = (element, selector) => {
  if (jLightGlobalElements.indexOf(element) > -1) {
    return;
  }

  jLightGlobalElements.push(element);

  jLightGlobalData[jLightGlobalElements.length - 1] = {
    jLightInternal: { selector },
  };
};

const createElementsFromString = (string) => {
  const div = document.createElement('div');

  div.innerHTML = string.trim();

  const { children } = div;

  [...children].forEach((theChild) => {
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

const getElementsFromArgument = (theArgument) => {
  let argument = theArgument;

  if (!argument) {
    argument = {};
  }

  if (argument.elements) {
    return argument.elements;
  }

  if (typeof argument === 'string') {
    return argument.match(/<(.|\n)+>/)
      ? [...createElementsFromString(argument)]
      : [...document.querySelectorAll(argument)];
  }

  if (argument instanceof HTMLElement) {
    return [argument];
  }

  if (argument instanceof HTMLCollection || argument instanceof NodeList) {
    return [...argument];
  }

  return [];
};

/**
 * @module Utility
 * @tutorial tut-utility
 */

/**
 * Provides an empty function.
 *
 * @static
 * @function
 * @tutorial noop
 * @returns {void} void
 */
const noop = () => { };

/**
 * Generates a semi-random string of length 9.
 *
 * @static
 * @function
 * @tutorial uniqid
 * @returns {string} The generated string
 */
const uniqid = () => Math.random().toString(36).substr(2, 9);

/* eslint-disable no-bitwise */

/**
 * Generates a unique number hash from a string.
 *
 * @static
 * @function
 * @tutorial generateHash
 * @param {string} string The string to hash
 * @returns {number} The converted string
 */
const generateHash = (string) => Math.abs(string.split('').reduce((hash, b) => {
  const a = ((hash << 5) - hash) + b.charCodeAt(0);

  return a & a;
}, 0));

/**
 * Checks if an object is empty.
 *
 * @static
 * @function
 * @tutorial isEmptyObject
 * @param {object} object The object to check
 * @returns {boolean} If the object is empty
 */
const isEmptyObject = (object) => object
  && object.constructor === Object
  && !Object.keys(object).length;

/**
 * Checks if two objects are the same.
 *
 * @static
 * @function
 * @tutorial isSameObject
 * @param {object} object1 The object to compare
 * @param {object} object2 The object to compare to
 * @returns {boolean} If the objects are the same
 */
const isSameObject = (object1, object2) => object1
  && object2
  && object1.constructor === Object
  && object2.constructor === Object
  && Object.is(object1, object2);

/**
 * Prevents the events default beheavior, propagation and immediate propagation
 *
 * @static
 * @function
 * @tutorial preventEvent
 * @param {Event} event The event to prevent
 * @returns {void} void
 */
const preventEvent = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
};

/**
 * Opens fullscreen mode
 *
 * @static
 * @function
 * @tutorial openFullscreen
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} [$elements]
 * The elements to open in fullscreen
 * @returns {void} void
 */
const openFullscreen = ($elements) => {
  const elements = getElementsFromArgument($elements);
  const element = elements[0] ? elements[0] : document.documentElement;

  element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen
  || element.mozRequestFullScreen || noop;

  element.requestFullScreen();
};

/**
 * Closes fullscreen mode
 *
 * @static
 * @function
 * @tutorial closeFullscreen
 * @returns {void} void
 */
const closeFullscreen = () => {
  document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen
    || document.mozCancelFullScreen || noop;

  document.cancelFullScreen();
};

/**
 * Opens fullscreen mode
 *
 * @static
 * @function
 * @tutorial toggleFullscreen
 * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} [$elements]
 * The elements to open in fullscreen
 * @param {boolean} [force] Force whether to open or close fullscreen mode
 * @returns {void} void
 */
const toggleFullscreen = ($elements, force) => {
  const forceDefined = force !== undefined;
  const forceOpen = forceDefined && force;
  const forceClose = forceDefined && !force;

  if (!forceOpen
    && (forceClose || document.webkitIsFullScreen || document.mozFullScreen)) {
    closeFullscreen();
  } else {
    openFullscreen($elements);
  }
};

/**
 * Provides easing functionality using easeInOutCubic.
 *
 * @static
 * @function
 * @tutorial doEasing
 * @param {number} duration The duration over which to apply the easing
 * @param {onStepCallback} onStep The function to run at each easing step
 * @param {Function} [callback] The function to run after the easing is complete
 * @returns {void} void
 */
const doEasing = (duration, onStep, callback) => {
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

/**
 * @module String
 * @tutorial tut-string
 */

/**
 * Converts the first character of a string to lowercase.
 *
 * @static
 * @function
 * @tutorial lcfirst
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const lcfirst = (string) => string.charAt(0).toLowerCase() + string.slice(1);

/**
 * Converts the first character of a string to uppercase.
 *
 * @static
 * @function
 * @tutorial ucfirst
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const ucfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Converts a string from camel case to kebab case.
 *
 * @static
 * @function
 * @tutorial camelToKebab
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const camelToKebab = (string) => (typeof string === 'string'
  ? string.replace(/([a-z][A-Z])/g, (chars) => `${chars[0]}-${chars[1].toLowerCase()}`).toLowerCase()
  : '');

/**
 * Converts a string from camel case to snake case.
 *
 * @static
 * @function
 * @tutorial camelToSnake
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const camelToSnake = (string) => (typeof string === 'string'
  ? lcfirst(string).replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`).toLowerCase()
  : '');

/**
 * Converts a string from kebab case to camel case.
 *
 * @static
 * @function
 * @tutorial kebabToCamel
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const kebabToCamel = (string) => (typeof string === 'string'
  ? lcfirst(string.replace(/-([a-zA-Z])/g, (chars) => chars[1].toUpperCase()))
  : '');

/**
 * Converts a string from kebab case to snake case.
 *
 * @static
 * @function
 * @tutorial kebabToSnake
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const kebabToSnake = (string) => (typeof string === 'string'
  ? string.replace(/-/g, '_').toLowerCase()
  : '');

/**
 * Converts a string from snake case to camel case.
 *
 * @static
 * @function
 * @tutorial snakeToCamel
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const snakeToCamel = (string) => (typeof string === 'string'
  ? lcfirst(string.replace(/(_[a-zA-Z])/g, (chars) => chars[1].toUpperCase()))
  : '');

/**
 * Converts a string from snake case to kebab case.
 *
 * @static
 * @function
 * @tutorial snakeToKebab
 * @param {string} string The string to convert
 * @returns {string} The converted string
 */
const snakeToKebab = (string) => (typeof string === 'string'
  ? string.replace(/_/g, '-').toLowerCase()
  : '');

/* eslint-enable no-bitwise */

/**
 * @module Ajax
 * @tutorial tut-ajax
 */

/**
 * Handles asynchronous HTTP requests.
 *
 * @static
 * @function
 * @tutorial ajax
 * @param {object} opts The options for the request
 * @param {string} opts.url The url to send the request to
 * @param {string} [opts.method] The HTTP method to use (default: 'POST')
 * @param {Object.<string, *>|string} [opts.data] The data to send
 * @param {Object.<string, string|false>} [opts.headers] The headers to send
 * @param {boolean} [opts.processData] Whether to process the data or not
 * @param {boolean} [opts.crossDomain] Whether to send the request cross domain or not
 * @param {boolean} [opts.async] Whether to send the request asynchronously or not
 * @param {string|false} [opts.contentType] The content type to use
 * @param {string|null} [opts.username] The username to use for authentification
 * @param {string|null} [opts.password] The password to use for authentification
 * @param {ajaxCompleteCallback} [opts.done] The callback to run if the request was successful
 * @param {ajaxCompleteCallback} [opts.fail] The callback to run if the request has failed
 * @param {ajaxCompleteCallback} [opts.always] The callback to run always
 * @param {Function} [opts.abort] The callback to run if the request was aborted
 * @param {xhrCallback} [opts.xhr] The callback to modify the XMLHttpRequest object before sending
 * @returns {XMLHttpRequest} The corresponding XMLHttpRequest object
 */
const ajax = (opts = {}) => {
  const options = {
    url: window.location.href,
    method: 'POST',
    data: {},
    headers: {},
    processData: true,
    crossDomain: false,
    async: true,
    contentType: 'application/x-www-form-urlencoded',
    username: null,
    password: null,
    done: noop,
    fail: noop,
    always: noop,
    abort: noop,
    xhr: (request) => request,
    ...opts,
  };

  const request = options.xhr(new XMLHttpRequest());
  const { headers } = options;
  let { data } = options;

  options.method = options.method.toUpperCase();

  if (!options.crossDomain && !headers['X-Requested-With']) {
    headers['X-Requested-With'] = 'XMLHttpRequest';
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = options.contentType;
  }

  Object.entries(headers).forEach(([key, value]) => {
    if (value === false) {
      delete headers[key];
    }
  });

  if (options.processData && typeof data !== 'string') {
    if (headers['Content-Type'] === 'application/json') {
      data = JSON.stringify(data);
    } else if (data && typeof data === 'object') {
      const params = [];

      Object.entries(data).forEach(([theKey, value]) => {
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
        const isJsonResponse = (request.getResponseHeader('content-type') || '')
          .includes('application/json');

        options.done(
          isJsonResponse
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

/**
 * Handles asynchronous GET requests.
 *
 * @static
 * @function
 * @tutorial ajax-get
 * @param {string} url The url for the request
 * @param {object} opts The options for the request
 * @param {Object.<string, *>|string} [opts.data] The data to send
 * @param {Object.<string, string|false>} [opts.headers] The headers to send
 * @param {boolean} [opts.processData] Whether to process the data or not
 * @param {boolean} [opts.crossDomain] Whether to send the request cross domain or not
 * @param {boolean} [opts.async] Whether to send the request asynchronously or not
 * @param {string|false} [opts.contentType] The content type to use
 * @param {string|null} [opts.username] The username to use for authentification
 * @param {string|null} [opts.password] The password to use for authentification
 * @param {ajaxCompleteCallback} [opts.done] The callback to run if the request was successful
 * @param {ajaxCompleteCallback} [opts.fail] The callback to run if the request has failed
 * @param {ajaxCompleteCallback} [opts.always] The callback to run always
 * @param {Function} [opts.abort] The callback to run if the request was aborted
 * @param {xhrCallback} [opts.xhr] The callback to modify the XMLHttpRequest object before sending
 * @returns {XMLHttpRequest} The corresponding XMLHttpRequest object
 */
const get = (url, opts = {}) => ajax({
  ...opts,
  method: 'GET',
  url,
});

/**
 * Handles asynchronous POST requests.
 *
 * @static
 * @function
 * @tutorial ajax-post
 * @param {string} url The url for the request
 * @param {object} opts The options for the request
 * @param {Object.<string, *>|string} [opts.data] The data to send
 * @param {Object.<string, string|false>} [opts.headers] The headers to send
 * @param {boolean} [opts.processData] Whether to process the data or not
 * @param {boolean} [opts.crossDomain] Whether to send the request cross domain or not
 * @param {boolean} [opts.async] Whether to send the request asynchronously or not
 * @param {string|false} [opts.contentType] The content type to use
 * @param {string|null} [opts.username] The username to use for authentification
 * @param {string|null} [opts.password] The password to use for authentification
 * @param {ajaxCompleteCallback} [opts.done] The callback to run if the request was successful
 * @param {ajaxCompleteCallback} [opts.fail] The callback to run if the request has failed
 * @param {ajaxCompleteCallback} [opts.always] The callback to run always
 * @param {Function} [opts.abort] The callback to run if the request was aborted
 * @param {xhrCallback} [opts.xhr] The callback to modify the XMLHttpRequest object before sending
 * @returns {XMLHttpRequest} The corresponding XMLHttpRequest object
 */
const post = (url, opts = {}) => ajax({
  method: 'POST',
  url,
  ...opts,
});

const removeJLightElementData = (element) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex < 0) {
    return;
  }

  jLightGlobalElements.splice(elementIndex, 1);
  jLightGlobalData.splice(elementIndex, 1);
};

const getJLightElementData = (element) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex > -1) {
    return jLightGlobalData[elementIndex];
  }

  initalizeJLightElementData(element, element);

  return getJLightElementData(element);
};

const setJLightElementData = (element, key, value) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex > -1) {
    jLightGlobalData[elementIndex][key] = value;

    return;
  }

  initalizeJLightElementData(element, element);
  setJLightElementData(element, key, value);
};

const updateJLightElementData = (element, data) => {
  const elementIndex = jLightGlobalElements.indexOf(element);

  if (elementIndex > -1) {
    jLightGlobalData[elementIndex] = {
      ...jLightGlobalData[elementIndex],
      ...data,
    };

    return;
  }

  initalizeJLightElementData(element, element);
  updateJLightElementData(element, data);
};

const addJLightElementEventData = (element, type, callback, realCallback) => {
  const jLightElementData = getJLightElementData(element);
  const events = jLightElementData.jLightInternal.events || [];

  events.push({
    type,
    callback,
    realCallback,
  });

  updateJLightElementData(element, {
    jLightInternal: {
      ...jLightElementData.jLightInternal,
      events,
    },
  });
};

const removeJLightElementEventData = (element, type, callback, realCallback) => {
  const jLightElementData = getJLightElementData(element);
  const events = jLightElementData.jLightInternal.events || [];

  updateJLightElementData(element, {
    jLightInternal: {
      ...jLightElementData.jLightInternal,
      events: events.filter((event) => event.type !== type
        || event.callback !== callback
        || event.realCallback !== realCallback),
    },
  });
};

const getElementStyle = (element, property) => {
  const computedStyles = window.getComputedStyle(element);

  return computedStyles.getPropertyValue(property);
};

const updateJLightDisplayData = (element, display) => {
  updateJLightElementData(element, {
    jLightInternal: {
      ...(getJLightElementData(element).jLightInternal || {}),
      display,
    },
  });
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

const getParents = (elements, all, isRecursing) => {
  const parents = [];

  elements.forEach(({ parentElement }) => {
    if (!parents.includes(parentElement)) {
      if (isRecursing && elements.includes(parentElement)) {
        return;
      }

      parents.push(parentElement);
    }
  });

  if (all && !parents.includes(document.documentElement)) {
    return [...parents, ...getParents(parents, all, true)];
  }

  return parents;
};

const getClosestMatchingElement = (element, selector) => {
  const closest = element.parentElement;

  // eslint-disable-next-line no-nested-ternary
  return closest
    ? closest.matches(selector)
      ? closest
      : getClosestMatchingElement(closest, selector)
    : undefined;
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
  const jLightElementData = getJLightElementData(element).jLightInternal || {};
  const animationId = uniqid();

  updateJLightElementData(element, {
    jLightInternal: {
      ...jLightElementData,
      currentAnimation: animationId,
    },
  });

  return animationId;
};

const attachListener = (
  jLight,
  elements,
  eventNames,
  callbackOrSelector,
  delegatedCallbackOrOptions,
  theOptions = {},
  theJLightConstructor,
) => {
  const jlightConstructor = theJLightConstructor || jLight;
  const hasDelegatedCallback = typeof delegatedCallbackOrOptions === 'function' || delegatedCallbackOrOptions === false;
  const delegatedCallback = hasDelegatedCallback ? delegatedCallbackOrOptions : noop;
  const isDocumentOrWindow = elements[0]
    && (elements[0] === document || elements[0] === window);
  let options = hasDelegatedCallback ? theOptions : delegatedCallbackOrOptions;
  let types = [eventNames];
  let doPrevent;

  if (types[0].indexOf(' ') > -1) {
    types = types[0].split(' ');
  }

  if (options === false) {
    doPrevent = true;
    options = {};
  } else if (!options) {
    options = {};
  }

  if (typeof callbackOrSelector === 'function' || callbackOrSelector === false) {
    elements.forEach((element) => {
      types.forEach((type) => {
        const callback = (theEvent) => {
          const event = theEvent;

          event.$target = jlightConstructor([event.target]);
          event.$currentTarget = jLight([event.currentTarget]);

          if (callbackOrSelector === false
            || delegatedCallback === false
            || doPrevent
            || callbackOrSelector(event, event.jLightEventData) === false) {
            preventEvent(event);
          }

          if (options.once) {
            removeJLightElementEventData(element, type, callbackOrSelector, callback);
          }
        };

        addJLightElementEventData(element, type, callbackOrSelector, callback);
        element.addEventListener(type, callback, options);
      });
    });

    return jLight(elements);
  }

  elements.forEach((element) => {
    types.forEach((type) => {
      const callback = (theEvent) => {
        const event = theEvent;
        const contains = isDocumentOrWindow || element.contains(event.target);

        if (contains && event.target.matches(callbackOrSelector)) {
          event.$target = jlightConstructor([event.target]);
          event.$currentTarget = jLight([event.currentTarget]);

          if (delegatedCallback === false
            || doPrevent
            || delegatedCallback(event, event.jLightEventData) === false) {
            preventEvent(event);
          }

          if (options.once) {
            removeJLightElementEventData(element, type, callbackOrSelector, callback);
          }
        }
      };

      addJLightElementEventData(element, type, delegatedCallback, callback);
      element.addEventListener(type, callback, options);
    });
  });

  return jLight(elements);
};

const removeListener = (jLight, elements, eventNames, callback) => {
  let types = [eventNames];

  if (types[0].indexOf(' ') > -1) {
    types = types[0].split(' ');
  }

  elements.forEach((element) => {
    const jLightElementData = getJLightElementData(element);
    const events = jLightElementData.jLightInternal.events || [];

    types.forEach((type) => {
      events.forEach((event) => {
        if (event.type === type && (!callback || event.callback === callback)) {
          removeJLightElementEventData(element, type, callback, event.realCallback);
          element.removeEventListener(type, event.realCallback);
        }
      });
    });
  });

  return jLight(elements);
};

const triggerListener = (jLight, elements, eventNames, jLightEventData) => {
  const nativeTypes = ['click', 'focus', 'focusin', 'blur', 'focusout'];
  let types = [eventNames];

  if (types[0].indexOf(' ') > -1) {
    types = types[0].split(' ');
  }

  types.forEach((type) => {
    if (!jLightEventData && nativeTypes.includes(type)) {
      let hasFired;

      elements.forEach((element) => {
        if (type === 'click' && element.click) {
          element.click();

          hasFired = true;
        } else if ((type === 'focus' || type === 'focusin') && element.focus) {
          element.focus();

          hasFired = true;
        } else if ((type === 'blur' || type === 'focusout') && element.blur) {
          element.blur();

          hasFired = true;
        }
      });

      if (hasFired) {
        return;
      }
    }

    const event = document.createEvent('Event');

    event.jLightEventData = jLightEventData;
    event.initEvent(type, true, true);

    elements.forEach((element) => {
      element.dispatchEvent(event);
    });
  });

  return jLight(elements);
};

const indexOfOfLastIndexOf = (identifier, elements, $elements) => {
  const theElements = getElementsFromArgument($elements);
  const isLast = identifier === 'lastIndexOf';
  let index = -1;

  theElements.forEach((referenceElement) => {
    if ((index < 0 && !isLast) || isLast) {
      index = elements[identifier](referenceElement);
    }
  });

  return index;
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
  let dimension = 0;
  let spacingOne;
  let spacingTwo;
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

      spacingLeftOrTop = sign * parseFloat(computedStyles.getPropertyValue(spacingOne));
      spacingRightOrBottom = sign * parseFloat(computedStyles.getPropertyValue(spacingTwo));
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

const modifyClasses = (identifier, $elements, cssString = '', force) => {
  const { elements } = $elements;
  const isToggle = identifier === 'toggle';
  const removeAll = identifier === 'remove' && !cssString.trim();
  let cssClasses = [cssString];

  if (cssString.indexOf(' ') > -1) {
    cssClasses = cssString.split(' ');
  }

  elements.forEach((element) => {
    cssClasses.forEach((cssClass) => {
      if (isToggle) {
        element.classList.toggle(cssClass, force);
      } else if (removeAll) {
        element.classList.remove(...element.classList);
      } else {
        element.classList[identifier](cssClass);
      }
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
  let dimension = 0;

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

      element[identifier] = parseFloat(value);
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

const isInView = (boundingBox, offset) => boundingBox.top >= parseFloat(offset.top)
  && boundingBox.left >= parseFloat(offset.left)
  && boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  + parseFloat(offset.bottom)
  && boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth)
  + parseFloat(offset.right);

const jLight = (elements) => ({
  ...(() => {
    const theElements = {};

    elements.forEach((element, index) => {
      theElements[index] = element;
    });

    return theElements;
  })(),

  /**
   * @module Properties
   * @tutorial tut-properties
   */

  /**
   * The collections elements.
   *
   * @tutorial tut-properties
   * @type {HTMLElement[]}
   */
  elements,

  /**
   * The collections element count.
   *
   * @tutorial tut-properties
   * @type {number}
   */
  length: elements.filter((element) => element).length,

  /**
   * The collections first elements tag name.
   *
   * @tutorial tut-properties
   * @type {string}
   */
  tagName: elements[0] ? elements[0].tagName : undefined,

  /**
   * @module CSS
   * @tutorial tut-css
   */

  /**
   * Adds css classes to the collections elements.
   *
   * @function
   * @tutorial addClass
   * @param {string} cssClasses Space sepearated classes to add
   * @returns {jLight} jLight collection
   */
  addClass: (cssClasses) => modifyClasses('add', jLight(elements), cssClasses),

  /**
   * Removes css classes to the collections elements.
   *
   * @function
   * @tutorial removeClass
   * @param {string} cssClasses Space sepearated classes to remove
   * @returns {jLight} jLight collection
   */
  removeClass: (cssClasses) => modifyClasses('remove', jLight(elements), cssClasses),

  /**
   * Toggles css classes of the collections elements.
   *
   * @function
   * @tutorial toggleClass
   * @param {string} cssClasses Space sepearated classes to toggle
   * @param {boolean} [force] Force whether to add or remove classes
   * @returns {jLight} jLight collection
   */
  toggleClass: (cssClasses, force) => modifyClasses('toggle', jLight(elements), cssClasses, force),

  /**
   * Whether at least one of the collections elements has all of the provided classes.
   *
   * @function
   * @tutorial hasClass
   * @param {string} cssClasses Space sepearated classes to check for
   * @returns {boolean}
   * Whether at least one of the collections elements has all of the provided classes
   */
  hasClass: (cssClasses) => {
    let theCssClasses = [cssClasses];
    let hasClass;

    if (cssClasses.indexOf(' ') > -1) {
      theCssClasses = cssClasses.split(' ');
    }

    elements.forEach((element) => {
      if (hasClass !== undefined) {
        return;
      }

      let matchCount = 0;

      theCssClasses.forEach((cssClass) => {
        matchCount += element.classList.contains(cssClass) ? 1 : 0;
      });

      if (matchCount === theCssClasses.length) {
        hasClass = true;
      }
    });

    return hasClass || false;
  },

  /**
   * Applies style rules to the collections elements, gets the current style rules or
   * gets the current value for a specific style property.
   *
   * @function
   * @tutorial css
   * @param {string|Object.<string, string>} [property] The property name or the properties to set
   * @param {string} [value] The value to set the supplied property to
   * @returns {jLight|string|CSSStyleDeclaration}
   * jLight collection, property value or elements CSSStyleDeclaration
   */
  css: (property, value) => {
    if (typeof property === 'object' && property !== null) {
      elements.forEach((theElement) => {
        const element = theElement;

        Object.entries(property).forEach(([key, val]) => {
          element.style[key] = val;
        });
      });

      return jLight(elements);
    }

    if (value !== undefined) {
      elements.forEach((theElement) => {
        const element = theElement;

        element.style[property] = value;
      });

      return jLight(elements);
    }

    const computedStyles = elements[0]
      ? window.getComputedStyle(elements[0])
      : null;

    if (property) {
      return computedStyles.getPropertyValue(property);
    }

    return computedStyles || jLight(elements);
  },

  /**
   * Shows the collections elements.
   *
   * @function
   * @tutorial show
   * @param {string} [type]
   * The css display type to apply to the collections elements
   * @returns {jLight} jLight collection
   */
  show: (type) => {
    elements.forEach((theElement) => {
      const element = theElement;

      if (type) {
        element.style.display = type;

        return;
      }

      const { display } = getJLightElementData(element).jLightInternal;

      if (display) {
        element.style.display = display;

        return;
      }

      const computedDisplay = getElementStyle(element, 'display');

      if (computedDisplay !== 'none') {
        updateJLightDisplayData(element, computedDisplay);
        element.style.display = computedDisplay;
      } else {
        element.style.display = 'revert';
      }
    });

    return jLight(elements);
  },

  /**
   * Hides the collections elements.
   *
   * @function
   * @tutorial hide
   * @returns {jLight} jLight collection
   */
  hide: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedDisplay = getElementStyle(element, 'display');

      if (computedDisplay !== 'none') {
        updateJLightDisplayData(element, computedDisplay);
      }

      element.style.display = 'none';
    });

    return jLight(elements);
  },

  /**
   * Toggles the collections elements visibility.
   *
   * @function
   * @tutorial toggle
   * @param {string} [type] The css display type to apply to the function
   * @param {boolean} [force] Force whether to show or hide elements
   * @returns {jLight} jLight collection
   */
  toggle: (type, force) => {
    const forceDefined = force !== undefined;
    const forceShow = forceDefined && force;
    const forceHide = forceDefined && !force;

    elements.forEach((theElement) => {
      const element = theElement;

      if (forceShow || (getElementStyle(element, 'display') === 'none' && !forceHide)) {
        jLight([element]).show(type);
      } else {
        jLight([element]).hide();
      }
    });

    return jLight(elements);
  },

  /**
   * @module Event
   * @tutorial tut-event
   */

  /* eslint-disable max-len */

  /**
   * Adds event handlers to elements.
   *
   * @function
   * @tutorial on
   * @param {string} eventNames Space separated list of event names
   * @param {eventCallback|boolean} callbackOrSelector The function to execute when the event occurs,
   * a selector to delegate events to children of the current collections elements
   * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
   * @param {eventCallback|boolean|
   *   {capture: boolean, once: boolean, passive: boolean, signal: AbortSignal, mozSystemGroup: boolean}
   * } [delegatedCallbackOrOptions]
   * The callback to run when the event is delegated, the options to apply to the listener
   * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
   * @param {boolean|
   *  {capture: boolean, once: boolean, passive: boolean, signal: AbortSignal, mozSystemGroup: boolean}
   * } [options]
   * The options to apply to the listener
   * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
   * @returns {jLight} jLight collection
   */
  on: (eventNames, callbackOrSelector, delegatedCallbackOrOptions, options) => attachListener(
    jLight,
    elements,
    eventNames,
    callbackOrSelector,
    delegatedCallbackOrOptions,
    options,
  ),

  /**
   * Adds event handlers to elements fo one time execution.
   *
   * @function
   * @tutorial once
   * @param {string} eventNames Space separated list of event names
   * @param {eventCallback|boolean} callbackOrSelector The function to execute when the event occurs,
   * a selector to delegate events to children of the current collections elements
   * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
   * @param {eventCallback|boolean|
   *   {capture: boolean, once: boolean, passive: boolean, signal: AbortSignal, mozSystemGroup: boolean}
   * } [delegatedCallbackOrOptions]
   * The callback to run when the event is delegated, the options to apply to the listener
   * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
   * @param {boolean|
   *  {capture: boolean, once: boolean, passive: boolean, signal: AbortSignal, mozSystemGroup: boolean}
   * } [options]
   * The options to apply to the listener
   * or a boolean to prevent the events default behavior, propagation and immediate propagation if set to false
   * @returns {jLight} jLight collection
   */
  once: (eventNames, callbackOrSelector, delegatedCallbackOrOptions, options = {}) => attachListener(
    jLight,
    elements,
    eventNames,
    callbackOrSelector,
    delegatedCallbackOrOptions,
    {
      ...(options || {}),
      once: true,
    },
  ),

  /* eslint-enable max-len */

  /**
   * Removes event handlers from elements.
   *
   * @function
   * @tutorial off
   * @param {string} eventNames Space separated list of event names
   * @param {Function} [callback] The function to remove from being executed when the event occurs
   * @returns {jLight} jLight collection
   */
  off: (eventNames, callback) => removeListener(
    jLight,
    elements,
    eventNames,
    callback,
  ),

  /**
   * [DEPRECATED] Delegates event handlers to elements.
   *
   * @deprecated
   * Will be removed in version 1.2.0,
   * use [jLight]{@link jLight}.[on]{@link module:Event~on} instead
   * @function
   * @tutorial delegate
   * @param {string} eventNames Space separated list of event names
   * @param {Function} callback The function to execute when the event occurs
   * @returns {jLight} jLight collection
   */
  delegate: (eventNames, callback) => {
    // eslint-disable-next-line no-console
    console.warn('jLight.delegate is deprecated an will be removed in version 1.2.0, use jLight.on instead');

    let types = [eventNames];

    if (types[0].indexOf(' ') > -1) {
      types = types[0].split(' ');
    }

    const realCallback = (theEvent) => {
      const event = theEvent;
      const jLightElementData = getJLightElementData(elements[0]);
      const { selector } = jLightElementData.jLightInternal;

      if (!selector) {
        return;
      }

      if (event.target.matches(selector)) {
        event.$target = jLight([event.target]);
        event.$currentTarget = jLight([event.currentTarget]);

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

    return jLight(elements);
  },

  /**
   * [DEPRECATED] Undelegates event handlers from elements.
   *
   * @deprecated
   * Will be removed in version 1.2.0,
   * use [jLight]{@link jLight}.[off]{@link module:Event~off} instead
   * @function
   * @tutorial delegate
   * @param {string} eventNames Space separated list of event names
   * @param {Function} callback The function to remove
   * @returns {jLight} jLight collection
   */
  undelegate: (eventNames, callback) => {
    // eslint-disable-next-line no-console
    console.warn('jLight.undelegate is deprecated an will be removed in version 1.2.0, use jLight.off instead');

    const jLightElementData = getJLightElementData(document);
    const events = jLightElementData.jLightInternal.events || [];
    let types = [eventNames];

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

    return jLight(elements);
  },

  /**
   * Triggers events on the collections elements.
   *
   * @function
   * @tutorial trigger
   * @param {string} eventNames Space separated list of event names
   * @param {*} [jLightEventData] Custom data passed to the event
   * @returns {jLight} jLight collection
   */
  trigger: (eventNames, jLightEventData) => triggerListener(
    jLight,
    elements,
    eventNames,
    jLightEventData,
  ),

  /**
   * @module ElementData
   * @tutorial tut-element-data
   */

  /**
   * Sets a property of the collections elements or gets its value.
   *
   * @function
   * @tutorial prop
   * @param {string} property The property to set or get
   * @param {boolean} [state] The state to set the property to
   * @returns {jLight|boolean}
   * jLight collection or if the property is set on at least one of the collections elements
   */
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

    return jLight(elements);
  },

  /**
   * Sets an attribute or attributes to the collections elements or gets its value or values.
   *
   * @function
   * @tutorial attr
   * @param {string|Object.<string, *>|boolean} [attribute]
   * The attribute or attributes to set or get
   * or wheter to convert the resulting objects keys into camel case
   * @param {*} [value] The value to set the attribute to
   * @returns {jLight|Object.<string, string|true>|boolean}
   * jLight collection, the attributes value, an object of each attribute on the
   * collections elements or if the attribute whether present on at least one of
   * the collections elements
   */
  attr: (attribute, value) => {
    if (typeof attribute === 'object' && attribute !== null) {
      Object.entries(attribute).forEach(([key, theValue]) => {
        elements.forEach((element) => {
          element.setAttribute(camelToKebab(key), `${theValue}`);
        });
      });

      return jLight(elements);
    }

    const attributeDefined = attribute !== undefined;
    const isBoolean = typeof attribute === 'boolean';

    if (!attributeDefined || isBoolean) {
      const attrs = {};

      elements.forEach((element) => {
        [...element.attributes].forEach((attr) => {
          let { name } = attr;

          if (!attributeDefined || (attributeDefined && !attribute)) {
            name = kebabToCamel(name);
          }

          if (!attrs[name]) {
            attrs[name] = attr.value || true;
          }
        });
      });

      return attrs;
    }

    if (value === undefined) {
      let attr;

      elements.forEach((element) => {
        if (attr === undefined && element.hasAttribute(attribute)) {
          attr = element.getAttribute(attribute) || true;
        }
      });

      return attr;
    }

    elements.forEach((element) => {
      element.setAttribute(attribute, `${value}`);
    });

    return jLight(elements);
  },

  /**
   * Removes the supplied attributes from the collections elements.
   *
   * @function
   * @tutorial removeAttr
   * @param {string} attribute Space sepearated attributes to remove
   * @returns {jLight} jLight collection
   */
  removeAttr: (attribute) => {
    let theAttribute = [attribute];

    if (theAttribute[0].indexOf(' ') > -1) {
      theAttribute = theAttribute[0].split(' ');
    }

    elements.forEach((element) => {
      theAttribute.forEach((attr) => {
        element.removeAttribute(attr);
      });
    });

    return jLight(elements);
  },

  /**
   * Gets or sets the text content of the collections elements.
   *
   * @function
   * @tutorial text
   * @param {string} [text] The text to supply to the function
   * @returns {jLight|string} jLight collection or the text content
   */
  text: (text) => getOrSetTextOrHtml('textContent', jLight(elements), text),

  /**
   * Gets or sets the HTML content of the collections elements.
   *
   * @function
   * @tutorial html
   * @param {string} [html] The html to supply to the function
   * @returns {jLight|string} jLight collection or the html content
   */
  html: (html) => getOrSetTextOrHtml('innerHTML', jLight(elements), html),

  /**
   * Gets or sets the collections elements values.
   *
   * @function
   * @tutorial val
   * @param {boolean|null|string|boolean[]|Function|iteratorCallback} [valueOrFunction]
   * The value to set the collections elements value to.
   * If a function is supplied its return value will be set as the value.
   * If the jLight element is an HTMLSelectElement with the multiple
   * attribute each option will be passed separately to the function.
   * In that case an array of booleans can be used to set the selected options.
   * @returns {jLight|boolean|string} jLight collection or the value
   */
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
          [...element.querySelectorAll('option')].forEach((theOption, index) => {
            const option = theOption;
            let selected = false;

            if (Array.isArray(valueOrFunction)) {
              selected = !!valueOrFunction[index];
            } else if (isFunction) {
              selected = !!valueOrFunction(jLight(getElementsFromArgument(option)), index);
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

      return jLight(elements);
    }

    let value;

    elements.forEach((element) => {
      if (value === undefined) {
        if (element.getAttribute('type') === 'checkbox') {
          value = element.checked;
        } else if (element.tagName === 'SELECT' && element.multiple) {
          value = [...element.querySelectorAll('option')]
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

  /**
   * Gets or sets the jLight data of the collections elements.
   *
   * @function
   * @tutorial data
   * @param {string|Object.<string, *>} [keyOrData] The key of the data value to get or set or
   * an object of data values to set.
   * @param {string|string[]} [value] The value to set the data at the supplied key to.
   * @returns {jLight|*} jLight collection
   */
  data: (keyOrData, value) => {
    if (typeof keyOrData === 'object' && keyOrData !== null) {
      const newData = keyOrData;

      if (newData.jLightInternal) {
        delete newData.jLightInternal;
      }

      elements.forEach((element) => {
        updateJLightElementData(element, { ...newData });
      });

      return jLight(elements);
    }

    const key = kebabToCamel(keyOrData);

    if (key === 'jLightInternal') {
      return {};
    }

    if (value !== undefined) {
      elements.forEach((element) => {
        setJLightElementData(element, key, value);
      });

      return jLight(elements);
    }

    let data;

    elements.forEach((element) => {
      if (!data) {
        const jLightElementData = getJLightElementData(element);

        if (!keyOrData) {
          data = jLightElementData;

          Object.entries(element.dataset).forEach(([dataKey, dataValue]) => {
            if (!data[dataKey]) {
              if (!Number.isNaN(Number(dataValue))) {
                data[dataKey] = parseFloat(dataValue);

                if (Number.isNaN(data[dataKey])) {
                  data[dataKey] = undefined;
                }
              } else {
                data[dataKey] = dataValue;
              }
            }
          });
        } else {
          data = jLightElementData[key];

          if (data === undefined) {
            data = element.getAttribute(`data-${keyOrData}`)
              || element.getAttribute(`data-${key}`);

            if (!data
              && (element.hasAttribute(`data-${keyOrData}`)
                || element.hasAttribute(`data-${key}`))) {
              data = true;
            } else if (!Number.isNaN(Number(data))) {
              data = parseFloat(data);

              if (Number.isNaN(data)) {
                data = undefined;
              }
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

  /**
   * @module Manipulation
   * @tutorial tut-manipulation
   */

  /**
   * Empties the collections elements HTML content.
   *
   * @function
   * @tutorial empty
   * @returns {jLight} jLight collection
   */
  empty: () => {
    elements.forEach((theElement) => {
      const element = theElement;

      element.innerHTML = '';
    });

    return jLight(elements);
  },

  /**
   * Clones the collection.
   *
   * @function
   * @tutorial clone
   * @param {boolean} [deep] Whether to apply deep cloning of the affected nodes (default: true)
   * @returns {jLight} jLight collection
   */
  clone: (deep = true) => jLight(elements.map((element) => element.cloneNode(deep))),

  /**
   * Adds elements to the collection.
   *
   * @function
   * @tutorial add
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  add: ($elements) => {
    const theElements = getElementsFromArgument($elements);
    const addedElements = [];

    theElements.forEach((referenceElement) => {
      if (referenceElement && !elements.includes(referenceElement)) {
        addedElements.push(referenceElement);
      }
    });

    return jLight([...elements, ...addedElements]);
  },

  /**
   * Removes elements from the collection.
   *
   * @function
   * @tutorial remove
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} [$elements] The elements to remove
   * @param {boolean} [removeFromDom]
   * Whether the elements should also be removed from the DOM (default: true)
   * @returns {jLight|null} jLight collection or null
   */
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

    return jLight(remainingElements);
  },

  /**
   * Prepends elements to the collections elements.
   *
   * @function
   * @tutorial prepend
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  prepend: ($elements) => jLight(prependOrAppend('prepend', $elements, elements)),

  /**
   * Appends elements to the collections elements.
   *
   * @function
   * @tutorial append
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  append: ($elements) => jLight(prependOrAppend('append', $elements, elements)),

  /**
   * Prepends the collections elements to elements.
   *
   * @function
   * @tutorial prependTo
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  prependTo: ($elements) => jLight(prependToOrAppendTo('prepend', $elements, elements)),

  /**
   * Appends the collections elements to elements.
   *
   * @function
   * @tutorial appendTo
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  appendTo: ($elements) => jLight(prependToOrAppendTo('append', $elements, elements)),

  /**
   * Inserts the collections elements before elements.
   *
   * @function
   * @tutorial insertBefore
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  insertBefore: ($elements) => jLight(insertBeforeOrInsertAfter('beforeBegin', $elements, elements, 'insert')),

  /**
   * Inserts the collections elements after elements.
   *
   * @function
   * @tutorial insertAfter
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  insertAfter: ($elements) => jLight(insertBeforeOrInsertAfter('afterEnd', $elements, elements, 'insert')),

  /**
   * Inserts elements before the collections elements.
   *
   * @function
   * @tutorial before
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  before: ($elements) => jLight(insertBeforeOrInsertAfter('beforeBegin', $elements, elements)),

  /**
   * Inserts elements after the collections elements.
   *
   * @function
   * @tutorial after
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  after: ($elements) => jLight(insertBeforeOrInsertAfter('afterEnd', $elements, elements)),

  /**
   * Wraps the collections elements in elements.
   *
   * @function
   * @tutorial wrap
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
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

    return jLight(elements);
  },

  /**
   * @module Selection
   * @tutorial tut-selection
   */

  /**
   * Gets the element at the supplied index from the collection.
   *
   * @function
   * @tutorial get
   * @param {number} index The index to supply to the function
   * @returns {HTMLElement|undefined} The element or null
   */
  get: (index) => elements[index],

  /**
   * Gets the jLight element at the supplied index from the collection.
   *
   * @function
   * @tutorial eq
   * @param {number} index The index to supply to the function
   * @returns {jLight} jLight collection
   */
  eq: (index) => jLight(elements[index] ? [elements[index]] : []),

  /**
   * Gets the first jLight element from the collection.
   *
   * @function
   * @tutorial first
   * @returns {jLight} jLight collection
   */
  first: () => jLight(elements[0] ? [elements[0]] : []),

  /**
   * Gets the last jLight element from the collection.
   *
   * @function
   * @tutorial last
   * @returns {jLight} jLight collection
   */
  last: () => jLight(elements.length ? [elements[elements.length - 1]] : []),

  /**
   * Gets a jLight collection from the collections parent elements.
   *
   * @function
   * @tutorial parent
   * @returns {jLight} jLight collection
   */
  parent: () => jLight(getParents(elements)),

  /**
   * Gets a jLight collection from all the collections parent elements.
   *
   * @function
   * @tutorial parents
   * @returns {jLight} jLight collection
   */
  parents: () => jLight(getParents(elements, true)),

  /**
   * Gets a jLight collection from the collections children elements.
   *
   * @function
   * @tutorial children
   * @returns {jLight} jLight collection
   */
  children: () => jLight(elements.reduce(
    (children, element) => [...children, ...element.children], [],
  )),

  /**
   * Gets a jLight collection from the collections sibling elements.
   *
   * @function
   * @tutorial siblings
   * @returns {jLight} jLight collection
   */
  siblings: () => {
    const siblings = [];

    elements.forEach((element) => {
      const { parentElement } = element;

      [...parentElement.children].forEach((child) => {
        if (!siblings.includes(child) && !elements.includes(child)) {
          siblings.push(child);
        }
      });
    });

    return jLight(siblings);
  },

  /**
   * Gets a jLight collection from the collections previous sibling elements.
   *
   * @function
   * @tutorial prev
   * @param {string} [selector] The selector to use for matching elements
   * @returns {jLight} jLight collection
   */
  prev: (selector) => jLight(getPrevOrNextElements('previousElementSibling', selector, elements)),

  /**
   * Gets a jLight collection from the collections next sibling elements.
   *
   * @function
   * @tutorial next
   * @param {string} [selector] The selector to use for matching elements
   * @returns {jLight} jLight collection
   */
  next: (selector) => jLight(getPrevOrNextElements('nextElementSibling', selector, elements)),

  /**
   * Gets a jLight collection from all the collections parent elements matching the selector.
   *
   * @function
   * @tutorial closest
   * @param {string} [selector] The selector to use for matching elements
   * @returns {jLight} jLight collection
   */
  closest: (selector) => {
    const closestElements = [];

    elements.forEach((element) => {
      const closest = getClosestMatchingElement(element, selector);

      if (closest && !closestElements.includes(closest)) {
        closestElements.push(closest);
      }
    });

    return jLight(closestElements);
  },

  /**
   * Gets a jLight collection from the collections elements which are not part of elements.
   *
   * @function
   * @tutorial not
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
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

    return jLight(remainingElements);
  },

  /**
   * Gets a jLight collection from the collections elements which contain elements.
   *
   * @function
   * @tutorial has
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to apply the function to
   * @returns {jLight} jLight collection
   */
  has: ($elements) => {
    const selectedElements = getElementsFromArgument($elements);

    const filteredElements = elements.filter((element) => {
      let hasElement = false;

      selectedElements.forEach((selectedElement) => {
        if (!hasElement
          && element !== selectedElement
          && element.contains(selectedElement)) {
          hasElement = true;
        }
      });

      return hasElement;
    });

    return jLight(filteredElements);
  },

  /**
   * @module ArrayLike
   * @tutorial tut-array-like
   */

  /**
   * Gets a filtered jLight collection based on the input.
   *
   * @function
   * @tutorial filter
   * @param {string|iteratorCallback|iteratorBooleanCallback} callbackOrSelector
   * The selector to filter the collection by or a custom
   * function to decide which elements to filter out
   * @returns {jLight} jLight collection
   */
  filter: (callbackOrSelector) => {
    const filteredElements = [];

    elements.forEach((element, index) => {
      if (typeof callbackOrSelector === 'function') {
        if (callbackOrSelector(jLight([element]), index)) {
          filteredElements.push(element);
        }
      } else if (element.matches(callbackOrSelector)) {
        filteredElements.push(element);
      }
    });

    return jLight(filteredElements);
  },

  /**
   * Runs a function on each of the collections elements.
   *
   * @function
   * @tutorial forEach
   * @param {iteratorCallback} callback The function to apply to each element
   * @returns {jLight} jLight collection
   */
  forEach: (callback) => {
    elements.forEach((element, index) => {
      callback(jLight([element]), index);
    });

    return jLight(elements);
  },

  /**
   * [DEPRECATED] Runs a function on each of the collections elements.
   *
   * @deprecated
   * Will be removed in version 1.2.0,
   * use [jLight]{@link jLight}.[forEach]{@link module:ArrayLike~forEach} instead
   * @function
   * @tutorial each
   * @param {iteratorCallback} callback The function to apply to each element
   * @returns {jLight} jLight collection
   */
  each: (callback) => {
    // eslint-disable-next-line no-console
    console.warn('jLight.each is deprecated an will be removed in version 1.2.0, use jLight.forEach instead');

    return jLight(elements).forEach(callback);
  },

  /**
   * Slices the collection.
   *
   * @function
   * @tutorial slice
   * @param {number} [start] The index to start the slicing
   * @param {number} [end] The index to end the slicing
   * @returns {jLight} jLight collection
   */
  slice: (start, end) => jLight(elements.slice(start, end)),

  /**
   * Splices the collection
   *
   * @function
   * @tutorial splice
   * @param {number} start The index to start the splicing
   * @param {number} [deleteCount] The count of elements to delete
   * @returns {jLight} jLight collection
   */
  splice: (start, deleteCount) => jLight(elements.splice(start, deleteCount)),

  /**
   * Pushes elements to the collection.
   *
   * @function
   * @tutorial push
   * @param {...(jLight|string|HTMLElement|HTMLCollection|NodeList)} args
   * The elements to apply to the function.
   * @returns {number} The collections new length
   */
  push: (...args) => {
    args.forEach((arg) => {
      elements.push(...getElementsFromArgument(arg));
    });

    return elements.length;
  },

  /**
   * Pops the last element from the collection.
   *
   * @function
   * @tutorial pop
   * @returns {jLight} jLight collection
   */
  pop: () => jLight([elements.pop()]),

  /**
   * Reverses a collection.
   *
   * @function
   * @tutorial reverse
   * @returns {jLight} jLight collection
   */
  reverse: () => jLight(elements.reverse()),

  /**
   * Shifts a collection.
   *
   * @function
   * @tutorial shift
   * @returns {jLight} jLight collection
   */
  shift: () => jLight([elements.shift()]),

  /**
   * Unshifts a collection.
   *
   * @function
   * @tutorial unshift
   * @param {...(jLight|string|HTMLElement|HTMLCollection|NodeList)} args
   * The elements to apply to the function.
   * @returns {number} The collections new length
   */
  unshift: (...args) => {
    const theElements = [];

    args.forEach((arg) => {
      theElements.push(...getElementsFromArgument(arg));
    });

    elements.unshift(...theElements.reverse());

    return elements.length;
  },

  /**
   * Sorts a collection.
   *
   * @function
   * @tutorial sort
   * @param {compareCallback} compareFunction The function used for sorting
   * @returns {jLight} jLight collection
   */
  sort: (compareFunction) => jLight(
    elements.sort((element1, element2) => compareFunction(jLight([element1]), jLight([element2]))),
  ),

  /**
   * Reduces a collection.
   *
   * @function
   * @tutorial reduce
   * @param {reduceInnerCallback} callback The function used for reduction
   * @param {*} [initialValue] The initial value used for reduction
   * @returns {*} The reduction result
   */
  reduce: (callback, initialValue) => elements.reduce(
    (accumulator, element, index) => callback(accumulator, jLight([element]), index),
    initialValue,
  ),

  /**
   * Maps a collection.
   *
   * @function
   * @tutorial map
   * @param {mapInnerCallback} callback The function used for mapping
   * @returns {jLight} jLight collection
   */
  map: (callback) => jLight(elements.map((element, index) => {
    const argument = callback(jLight([element]), index);

    return getElementsFromArgument(argument)[0];
  })),

  /**
   * Concats a collection with other collections.
   *
   * @function
   * @tutorial concat
   * @param {...(jLight|string|HTMLElement|HTMLCollection|NodeList|
   * Array.<jLight|string|HTMLElement|HTMLCollection|NodeList>)} args
   * The elements to apply to the function.
   * @returns {jLight} jLight collection
   */
  concat: (...args) => {
    const theElements = [];

    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        arg.forEach((a) => {
          theElements.push(...getElementsFromArgument(a));
        });
      } else {
        theElements.push(...getElementsFromArgument(arg));
      }
    });

    return jLight(elements.concat(theElements));
  },

  /**
   * Whether the collections elements include at least one of elements.
   *
   * @function
   * @tutorial includes
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to supply to the function
   * @returns {boolean} If the conditon is met
   */
  includes: ($elements) => {
    const theElements = getElementsFromArgument($elements);
    let includes;

    elements.forEach((element) => {
      if (!includes) {
        theElements.forEach((referenceElement) => {
          if (!includes) {
            includes = element === referenceElement;
          }
        });
      }
    });

    return includes;
  },

  /**
   * Whether at least one of the collections elements meets the conditon.
   *
   * @function
   * @tutorial some
   * @param {iteratorBooleanCallback} callback
   * The elements to supply to the function
   * @returns {boolean} If the conditon is met
   */
  some: (callback) => {
    let isMet;

    elements.forEach((element, index) => {
      if (!isMet && callback(jLight([element]), index)) {
        isMet = true;
      }
    });

    return isMet;
  },

  /**
   * Whether every one of the collections elements meets the conditon.
   *
   * @function
   * @tutorial every
   * @param {iteratorBooleanCallback} callback
   * The elements to supply to the function
   * @returns {boolean} If the conditon is met
   */
  every: (callback) => {
    let matchCount = 0;

    elements.forEach((element, index) => {
      if (callback(jLight([element]), index)) {
        matchCount += 1;
      }
    });

    return matchCount === elements.length;
  },

  /**
   * Gets the given elements index inside the collection.
   *
   * @function
   * @tutorial indexOf
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to supply to the function
   * @returns {number} The resulting number
   */
  indexOf: ($elements) => indexOfOfLastIndexOf('indexOf', elements, $elements),

  /**
   * Gets the given elements last index inside the collection.
   *
   * @function
   * @tutorial lastIndexOf
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to supply to the function
   * @returns {number} The resulting number
   */
  lastIndexOf: ($elements) => indexOfOfLastIndexOf('lastIndexOf', elements, $elements),

  /**
   * Gets a jLight collection from the collections children elements matching the selector.
   *
   * @function
   * @tutorial find
   * @param {string} [selector] The selector to use for matching elements
   * @returns {jLight} jLight collection
   */
  find: (selector) => {
    let foundElements = [];

    elements.forEach((element) => {
      foundElements = [...foundElements, ...element.querySelectorAll(selector)];
    });

    return jLight(foundElements);
  },

  /**
   * @module Dimensions
   * @tutorial tut-dimensions
   */

  /**
   * Gets or sets the width of the collections elements.
   *
   * @function
   * @tutorial width
   * @param {number} [width] The width to supply to the function
   * @returns {jLight|number} jLight collection or the width
   */
  width: (width) => getOrSetDimension('width', jLight(elements), width),

  /**
   * Gets or sets the height of the collections elements.
   *
   * @function
   * @tutorial height
   * @param {number} [height] The height to supply to the function
   * @returns {jLight|number} jLight collection or the height
   */
  height: (height) => getOrSetDimension('height', jLight(elements), height),

  /**
   * Gets the inner width of the collections elements.
   *
   * @function
   * @tutorial innerWidth
   * @returns {number} The dimension value
   */
  innerWidth: () => getDimension('innerWidth', elements),

  /**
   * Gets the inner height of the collections elements.
   *
   * @function
   * @tutorial innerHeight
   * @returns {number} The dimension value
   */
  innerHeight: () => getDimension('innerHeight', elements),

  /**
   * Gets the outer width of the collections elements.
   *
   * @function
   * @tutorial outerWidth
   * @param {boolean} [includeMargins] Whether to include the elements margins (default: false)
   * @returns {number} The dimension value
   */
  outerWidth: (includeMargins) => getDimension('outerWidth', elements, includeMargins),

  /**
   * Gets the outer height of the collections elements.
   *
   * @function
   * @tutorial outerHeight
   * @param {boolean} [includeMargins] Whether to include the elements margins (default: false)
   * @returns {number} The dimension value
   */
  outerHeight: (includeMargins) => getDimension('outerHeight', elements, includeMargins),

  /**
   * Gets the scroll width of the collections elements.
   *
   * @function
   * @tutorial scrollWidth
   * @returns {number} The dimension value
   */
  scrollWidth: () => getScrollWidthOrScrollHeight('scrollWidth', elements),

  /**
   * Gets the scroll height of the collections elements.
   *
   * @function
   * @tutorial scrollHeight
   * @returns {number} The dimension value
   */
  scrollHeight: () => getScrollWidthOrScrollHeight('scrollHeight', elements),

  /**
   * Gets or sets the scrollTop of the collections elements.
   *
   * @function
   * @tutorial scrollTop
   * @param {number} [value] The value to supply to the function
   * @returns {jLight|number} jLight collection or the value
   */
  scrollTop: (value) => getOrSetScrollTopOrScrollLeft('scrollTop', value, jLight(elements)),

  /**
   * Gets or sets the scrollLeft of the collections elements.
   *
   * @function
   * @tutorial scrollLeft
   * @param {number} [value] The value to supply to the function
   * @returns {jLight|number} jLight collection or the value
   */
  scrollLeft: (value) => getOrSetScrollTopOrScrollLeft('scrollLeft', value, jLight(elements)),

  /**
   * Gets or sets the collections elements offset.
   *
   * @function
   * @tutorial offset
   * @param {boolean|{top: number, left: number}} [value]
   * The value to set the elements offset to or if the
   * returned offset should be relative to the viewport
   * @param {boolean} [relativeToViewport]
   * Whether the offset should be set relative to the viewport (default: false)
   * @returns {jLight|{top: number, left: number}} jLight collection or elements offset
   */
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
          ? `${topIsPixelUnit ? parseFloat(top) + offsetTop : top}${unitTop}`
          : `${parseFloat(computedStyles.getPropertyValue('top'))}${offsetTop || ''}${unitTop}`;

        element.style.left = (left || left === 0)
          ? `${leftIsPixelUnit ? parseFloat(left) + offsetLeft : top}${unitLeft}`
          : `${parseFloat(computedStyles.getPropertyValue('left'))}${offsetLeft || ''}${unitLeft}`;
      });

      return jLight(elements);
    }

    let offset = {};

    elements.forEach((element) => {
      if (offset === undefined) {
        offset = element.getBoundingClientRect();
      }
    });

    const relative = typeof value === 'boolean' && value;

    return {
      top: (offset.top || 0) + (relative ? window.pageYOffset : 0),
      left: (offset.left || 0) + (relative ? window.pageXOffset : 0),
    };
  },

  /**
   * @module Animation
   * @tutorial tut-animation
   */

  /**
   * Animates the given properties to the given values on the collections elements.
   *
   * @function
   * @tutorial animate
   * @param {Object.<string, string|number>} [properties] The css properties and values to animate
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @returns {jLight} jLight collection
   */
  animate: (properties, duration = 300, callback = noop, easing = 'ease') => {
    const animationId = getUpdateAnimationId(elements[0]);

    elements.forEach((theElement, elementIndex) => {
      const element = theElement;
      let transition = '';

      Object.entries(properties).forEach(([key, value], index) => {
        const theKey = camelToKebab(key);

        transition += `${index === 0 ? '' : ','}${theKey} ${duration}ms ${easing}`;

        if (element.style[key] === undefined) {
          element.style[key] = getElementStyle(element, key);
        }

        setTimeout(() => {
          element.style[key] = value;
        }, 0);
      });

      updateJLightElementData(element, {
        jLightInternal: {
          ...(getJLightElementData(element).jLightInternal || {}),
          animatedProperties: Object.keys(properties),
        },
      });

      element.style.transition = transition;

      setTimeout(() => {
        if (getJLightElementData(elements[0]).jLightInternal.currentAnimation !== animationId) {
          return;
        }

        if (elementIndex === elements.length - 1) {
          elements.forEach((elementToReset) => {
            const theElementToReset = elementToReset;

            theElementToReset.style.transition = '';
          });

          callback();
        }
      }, duration);
    });

    return jLight(elements);
  },

  /**
   * Scrolls the collections elements to elements.
   *
   * @function
   * @tutorial scrollTo
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to scroll the collections elements to
   * @param {number} [duration] The duration of the scroll animation in ms (default: 300)
   * @param {{x: number, y: number}|{}} [offset] The offset for the target position
   * @param {Function} [callback] The function to run after the scrolling is complete
   * @returns {jLight} jLight collection
   */
  scrollTo: ($elements, duration = 300, offset = {}, callback) => {
    const theOffset = {
      x: 0,
      y: 0,
      ...offset,
    };

    const [element] = elements;
    const targets = getElementsFromArgument($elements);
    const boundingBox = element.getBoundingClientRect();
    const left = targets[0].offsetLeft
      - boundingBox.left
      - window.pageXOffset;
    const top = targets[0].offsetTop
      - boundingBox.top
      - window.pageYOffset;
    const innerWidth = Math.max(element.clientWidth, element.offsetWidth);
    const innerHeight = Math.max(element.clientHeight, element.offsetHeight);
    const { scrollWidth, scrollHeight } = element;
    const startPositionX = element.scrollLeft;
    const startPositionY = element.scrollTop;
    const targetX = scrollWidth - left < innerWidth
      ? scrollWidth - innerWidth - theOffset.x
      : left - theOffset.x;
    const targetY = scrollHeight - top < innerHeight
      ? scrollHeight - innerHeight - theOffset.y
      : top - theOffset.y;
    const differenceX = targetX - startPositionX;
    const differenceY = targetY - startPositionY;

    doEasing(duration, (percent) => {
      element.scrollLeft = startPositionX + differenceX * percent;
      element.scrollTop = startPositionY + differenceY * percent;
    }, callback);

    return jLight(elements);
  },

  /**
   * Stops all running animations on the collections elements.
   *
   * @function
   * @tutorial stop
   * @returns {jLight} jLight collection
   */
  stop: () => {
    elements.forEach((theElement) => {
      const element = theElement;
      const jLightInternalData = getJLightElementData(element).jLightInternal;
      const animatedProperties = jLightInternalData.animatedProperties
        || [];

      updateJLightElementData(element, {
        jLightInternal: {
          ...jLightInternalData,
          currentAnimation: null,
        },
      });

      animatedProperties.forEach((key) => {
        element.style[key] = getElementStyle(element, camelToKebab(key));
      });

      element.style.transition = '';
    });

    return jLight(elements);
  },

  /**
   * Fades the collections elements in.
   *
   * @function
   * @tutorial fadeIn
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @param {string} [type]
   * The css display type to apply to the collections elements
   * @returns {jLight} jLight collection
   */
  fadeIn: (duration, callback, easing, type) => {
    elements.forEach((theElement) => {
      const element = theElement;
      const { display } = getJLightElementData(element).jLightInternal;
      const computedDisplay = getElementStyle(element, 'display');

      if (computedDisplay !== 'none') {
        updateJLightDisplayData(element, computedDisplay);
      }

      getUpdateAnimationId(element);
      element.style.opacity = 0;

      element.style.display = type
      || display
      || (computedDisplay !== 'none' ? computedDisplay : false)
      || 'block';

      setTimeout(() => {
        jLight([element]).animate({ opacity: 1 }, duration, callback, easing);
      }, 1);
    });

    return jLight(elements);
  },

  /**
   * Fades the collections elements out.
   *
   * @function
   * @tutorial fadeOut
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @returns {jLight} jLight collection
   */
  fadeOut: (duration, callback, easing) => {
    elements.forEach((theElement) => {
      const element = theElement;
      const computedDisplay = getElementStyle(element, 'display');

      if (computedDisplay !== 'none') {
        updateJLightDisplayData(element, computedDisplay);
      }

      setTimeout(() => {
        jLight([element]).animate({ opacity: 0 }, duration, () => {
          element.style.display = 'none';

          if (callback) {
            callback();
          }
        }, easing);
      }, 1);
    });

    return jLight(elements);
  },

  /**
   * Toggles the display state of the collections elements by fading.
   *
   * @function
   * @tutorial fadeToggle
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @param {string} [type]
   * The css display type to apply to the collections elements
   * @param {boolean} [force] Force whether to fade in or out
   * @returns {jLight} jLight collection
   */
  fadeToggle: (duration, callback, easing, type, force) => {
    const forceDefined = force !== undefined;
    const forceFadeIn = forceDefined && force;
    const forceFadeOut = forceDefined && !force;

    elements.forEach((theElement) => {
      const element = theElement;

      if (forceFadeIn || (getElementStyle(element, 'display') === 'none' && !forceFadeOut)) {
        jLight([element]).fadeIn(duration, callback, easing, type);
      } else {
        jLight([element]).fadeOut(duration, callback, easing);
      }
    });

    return jLight(elements);
  },

  /**
   * Slides the collections elements down.
   *
   * @function
   * @tutorial slideDown
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @param {string} [type]
   * The css display type to apply to the collections elements
   * @param {string} [height] The css height value to end the sliding animation
   * @returns {jLight} jLight collection
   */
  slideDown: (duration, callback, easing, type, height) => {
    jLight(elements).stop();

    elements.forEach((theElement) => {
      const element = theElement;
      const startHeight = Math.max(element.clientHeight, element.offsetHeight);
      const computedStyles = window.getComputedStyle(element);
      const computedDisplay = computedStyles.getPropertyValue('display');
      const computedMinHeight = computedStyles.getPropertyValue('min-height');
      const paddingTop = parseFloat(computedStyles.getPropertyValue('padding-top'));
      const paddingBottom = parseFloat(computedStyles.getPropertyValue('padding-bottom'));
      const borderTop = computedStyles.getPropertyValue('border-top');
      const borderBottom = computedStyles.getPropertyValue('border-bottom');
      const borderTopParsed = parseFloat(borderTop);
      const borderBottomParsed = parseFloat(borderBottom);
      const borderTopStyle = borderTop.replace(`${borderTopParsed}px`, '');
      const borderBottomStyle = borderBottom.replace(`${borderBottomParsed}px`, '');
      const { display } = getJLightElementData(element).jLightInternal;

      if (computedDisplay !== 'none') {
        updateJLightDisplayData(element, computedDisplay);
      }

      Object.assign(element.style, {
        overflow: 'hidden',
        visibility: 'hidden',
        minHeight: '',
      });

      element.style.height = height
        || (computedMinHeight !== '0px' ? computedMinHeight : false)
        || '';

      element.style.display = type
        || display
        || (computedDisplay !== 'none' ? computedDisplay : false)
        || 'block';

      const targetHeight = Math.max(
        element.clientHeight,
        element.offsetHeight,
        parseFloat(computedMinHeight),
      ) - borderTopParsed
        - borderBottomParsed;

      Object.assign(element.style, {
        height: `${startHeight}px`,
        minHeight: 'revert',
        visibility: '',
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: `0px${borderTopStyle}`,
        borderBottom: `0px${borderBottomStyle}`,
      });

      setTimeout(() => {
        jLight([element]).animate({
          height: `${targetHeight}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          borderTop: `${borderTopParsed}px${borderTopStyle}`,
          borderBottom: `${borderBottomParsed}px${borderBottomStyle}`,
        }, duration, () => {
          Object.assign(element.style, {
            height: height || '',
            minHeight: '',
            paddingTop: '',
            paddingBottom: '',
            overflow: '',
          });

          if (callback) {
            callback();
          }
        }, easing);
      }, 15);
    });

    return jLight(elements);
  },

  /**
   * Slides the collections elements up.
   *
   * @function
   * @tutorial slideUp
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @returns {jLight} jLight collection
   */
  slideUp: (duration, callback, easing) => {
    jLight(elements).stop();

    elements.forEach((theElement) => {
      const element = theElement;
      const computedStyles = window.getComputedStyle(element);
      const computedDisplay = computedStyles.getPropertyValue('display');
      const borderTop = computedStyles.getPropertyValue('border-top');
      const borderBottom = computedStyles.getPropertyValue('border-bottom');
      const borderTopParsed = parseFloat(borderTop);
      const borderBottomParsed = parseFloat(borderBottom);

      const startHeight = Math.max(
        element.clientHeight,
        element.offsetHeight,
      ) - borderTopParsed
        - borderBottomParsed;

      if (computedDisplay !== 'none') {
        updateJLightDisplayData(element, computedDisplay);
      }

      Object.assign(element.style, {
        overflow: 'hidden',
        height: `${startHeight}px`,
        minHeight: 'auto',
        paddingTop: computedStyles.getPropertyValue('padding-top'),
        paddingBottom: computedStyles.getPropertyValue('padding-bottom'),
        borderTop,
        borderBottom,
      });

      setTimeout(() => {
        jLight([element]).animate({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: `0px${borderTop.replace(`${borderTopParsed}px`, '')}`,
          borderBottom: `0px${borderBottom.replace(`${borderBottomParsed}px`, '')}`,
        }, duration, () => {
          Object.assign(element.style, {
            display: 'none',
            height: '',
            overflow: '',
            minHeight: '',
            paddingTop: '',
            paddingBottom: '',
            borderTop: '',
            borderBottom: '',
          });

          if (callback) {
            callback();
          }
        }, easing);
      }, 1);
    });

    return jLight(elements);
  },

  /**
   * Toggles the display state of the collections elements by sliding.
   *
   * @function
   * @tutorial slideToggle
   * @param {number} [duration] The duration for the animation in ms (default: 300)
   * @param {Function} [callback]
   * The function to run after the animation is complete (default: noop)
   * @param {string} [easing] Which type of css easing to use for the animation (default: 'ease')
   * @param {string} [type]
   * The css display type to apply to the collections elements
   * @param {string} [height] The css height value to end the sliding animation
   * @param {boolean} [force] Force whether to slide down or up
   * @returns {jLight} jLight collection
   */
  slideToggle: (duration, callback, easing, type, height, force) => {
    const forceDefined = force !== undefined;
    const forceSlideDown = forceDefined && force;
    const forceSlideUp = forceDefined && !force;

    elements.forEach((theElement) => {
      const element = theElement;

      if (forceSlideDown || (getElementStyle(element, 'display') === 'none' && !forceSlideUp)) {
        jLight([element]).slideDown(duration, callback, easing, type, height);
      } else {
        jLight([element]).slideUp(duration, callback, easing);
      }
    });

    return jLight(elements);
  },

  /**
   * @module Utility
   * @tutorial tut-utility
   */

  /**
   * Whether a property of an element of the collection is true
   * or if an element of the collection is part of another set.
   *
   * @function
   * @tutorial is
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} propertyOrElements
   * The property or set to compare the collections elements to
   * @returns {boolean} If the property is set on one of the collections elements or
   * at least on of the elements is contained in the supplied elements
   */
  is: (propertyOrElements) => {
    let is;

    if (typeof propertyOrElements === 'string') {
      elements.forEach((element) => {
        if (is === undefined) {
          is = element[propertyOrElements];
        }
      });
    } else {
      const theElements = getElementsFromArgument(propertyOrElements);

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

  /**
   * Whether the collections elements contain at least one of elements.
   *
   * @function
   * @tutorial contains
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to supply to the function
   * @returns {boolean} If the conditon is met
   */
  contains: ($elements) => {
    const theElements = getElementsFromArgument($elements);
    let contains;

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

  /**
   * Checks if the collections first element is in view or runs a function if that is the case.
   *
   * @function
   * @tutorial inView
   * @param {Function|{top: number, bottom: number, left: number, right: number}} [offsetOrCallback]
   * The offset used for determining if the element is in view
   * or the function to run each time that is the case
   * @param {Function|
   *  {scrollTimer: ?number, isInView: ?Function, onEnter: ?Function, onExit: ?Function}
   * } [callbackOrOptions]
   * The function to run each time the element is in view
   * or a custom options object to define the functions behavior
   * (defaults: { scrollTimer: 100, isInView: noop, onEnter: noop, onExit: noop })
   * @returns {jLight|boolean} jLight collection or whether the collections first element is in view
   */
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
    const scrollTimer = options.scrollTimer || 100;
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

        if (isElementInView && !getJLightElementData(elements[0]).isInView) {
          if (options.onEnter) {
            options.onEnter();
          } else if (offsetOrCallbackIsFunction) {
            offsetOrCallback();
          } else if (callbackOrOptionsIsFunction) {
            callbackOrOptions();
          }

          updateJLightElementData(elements[0], {
            isInView: true,
          });

          return;
        }

        if (!isElementInView && getJLightElementData(elements[0]).isInView) {
          if (options.onExit) {
            options.onExit();
          }

          updateJLightElementData(elements[0], {
            isInView: false,
          });
        }
      }, scrollTimer);
    });

    return jLight(elements);
  },

  /**
   * Delays code execution.
   *
   * @function
   * @tutorial delay
   * @param {number} [delay] The duration to delay the code execution for
   * @returns {Promise} The corresponding promise
   */
  delay: (delay) => new Promise((resolve) => setTimeout(resolve, delay)),

  /**
   * Calls the supplied function with the supplied arguments if the given condition is met.
   *
   * @function
   * @tutorial when
   * @param {boolean|Function} condition The condition to check for.
   * If a function is supplied its return value will be used for checking
   * @param {string|Function} callback The function to run when the condition is met.
   * If a string is provided it should be a valid jLight function name
   * @param {...*} [args] The arguments to supply to the given jLight function
   * @returns {jLight} jLight collection
   */
  when: (condition, callback, ...args) => {
    if (typeof condition === 'function' ? condition() : condition) {
      if (typeof callback === 'string') {
        jLight(elements)[callback](...args);
      } else {
        callback();
      }
    }

    return jLight(elements);
  },

  /**
   * Checks if two jLight collections are the same.
   *
   * @function
   * @tutorial isSameJLight
   * @param {jLight|string|HTMLElement|HTMLCollection|NodeList} $elements
   * The elements to compare to
   * @returns {boolean} If the jLight collections are the same
   */
  isSameJLight: ($elements) => {
    const referenceElements = getElementsFromArgument($elements);

    return elements.length === referenceElements.length
      && elements.every((element, index) => element === referenceElements[index]);
  },

  /**
   * Serializes the collections elements values to a URL encoded string.
   *
   * @function
   * @tutorial serialize
   * @returns {string} The resulting string
   */
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

  /**
   * Serializes the collections elements values to a JSON object.
   *
   * @function
   * @tutorial serializeJson
   * @returns {Object.<string, string>} The resulting JSON object
   */
  serializeJson: () => {
    let serializedJson = {};

    elements.forEach((element) => {
      if (element instanceof HTMLFormElement) {
        [...element.children].forEach((child) => {
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

const documentAndWindowJLight = (argument) => ({
  ...argument,

  on: (eventNames, callbackOrSelector, delegatedCallbackOrOptions, options) => attachListener(
    documentAndWindowJLight,
    [argument],
    eventNames,
    callbackOrSelector,
    delegatedCallbackOrOptions,
    options,
    jLight,
  ),

  /* eslint-disable max-len */

  once: (eventNames, callbackOrSelector, delegatedCallbackOrOptions, options = {}) => attachListener(
    documentAndWindowJLight,
    [argument],
    eventNames,
    callbackOrSelector,
    delegatedCallbackOrOptions,
    {
      ...(options || {}),
      once: true,
    },
    jLight,
  ),

  /* eslint-enable max-len */

  off: (eventNames, callback) => removeListener(
    documentAndWindowJLight,
    [argument],
    eventNames,
    callback,
  ),

  trigger: (eventNames, jLightEventData) => triggerListener(
    documentAndWindowJLight,
    [argument],
    eventNames,
    jLightEventData,
  ),

  innerWidth: () => window.innerWidth,

  innerHeight: () => window.innerHeight,

  outerWidth: () => window.outerWidth,

  outerHeight: () => window.outerHeight,

  scrollTop: (value) => {
    if (value !== undefined) {
      window.scrollTo(0, value);

      return documentAndWindowJLight(argument);
    }

    return window.pageYOffset;
  },

  scrollLeft: (value) => {
    if (value !== undefined) {
      window.scrollTo(value, 0);

      return documentAndWindowJLight(argument);
    }

    return window.pageXOffset;
  },

  scrollTo: (theArgument, duration = 300, theOffset = {}, callback) => {
    const offset = {
      x: 0,
      y: 0,
      ...theOffset,
    };

    const elements = getElementsFromArgument(theArgument);
    const boundingBox = elements[0].getBoundingClientRect();
    const top = boundingBox.top + window.pageYOffset;
    const left = boundingBox.left + window.pageXOffset;
    const { innerWidth, innerHeight } = window;
    const { scrollWidth, scrollHeight } = document.body;
    const targetX = scrollWidth - left < innerWidth
      ? scrollWidth - innerWidth - offset.x
      : left - offset.x;
    const targetY = scrollHeight - top < innerHeight
      ? scrollHeight - innerHeight - offset.y
      : top - offset.y;
    const startPositionX = window.pageXOffset;
    const startPositionY = window.pageYOffset;
    const differenceX = targetX - startPositionX;
    const differenceY = targetY - startPositionY;

    doEasing(duration, (percent) => {
      window.scrollTo(
        startPositionX + differenceX * percent,
        startPositionY + differenceY * percent,
      );
    }, callback);

    return documentAndWindowJLight(argument);
  },
});

/**
 * @global
 * @function
 * @tutorial tut-constructor
 * @description jLights default export
 * @param {jLight|string|Function|HTMLElement|HTMLCollection|NodeList|document|window} argument
 * The argument to initialize jLight on
 * @property {function} noop [Go to definition]{@link module:Utility.noop}
 * @property {function} uniqid [Go to definition]{@link module:Utility.uniqid}
 * @property {function} generateHash [Go to definition]{@link module:Utility.generateHash}
 * @property {function} isEmptyObject [Go to definition]{@link module:Utility.isEmptyObject}
 * @property {function} isSameObject [Go to definition]{@link module:Utility.isSameObject}
 * @property {function} preventEvent [Go to definition]{@link module:Utility.preventEvent}
 * @property {function} doEasing [Go to definition]{@link module:Utility.doEasing}
 * @property {function} lcfirst [Go to definition]{@link module:String.lcfirst}
 * @property {function} ucfirst [Go to definition]{@link module:String.ucfirst}
 * @property {function} camelToKebab [Go to definition]{@link module:String.camelToKebab}
 * @property {function} camelToSnake [Go to definition]{@link module:String.camelToSnake}
 * @property {function} kebabToCamel [Go to definition]{@link module:String.kebabToCamel}
 * @property {function} kebabToSnake [Go to definition]{@link module:String.kebabToSnake}
 * @property {function} snakeToCamel [Go to definition]{@link module:String.snakeToCamel}
 * @property {function} snakeToKebab [Go to definition]{@link module:String.snakeToKebab}
 * @property {function} ajax [Go to definition]{@link module:Ajax.ajax}
 * @property {function} get [Go to definition]{@link module:Ajax.get}
 * @property {function} post [Go to definition]{@link module:Ajax.post}
 * @returns {jLight} jLight collection
 */
const $ = (argument) => {
  if (!argument) {
    return jLight([]);
  }

  if (argument.elements
    && Array.isArray(argument.elements)
    && argument.elements.every((element) => element instanceof HTMLElement)) {
    return jLight(argument.elements);
  }

  if (typeof argument === 'function') {
    if (document.readyState !== 'loading') {
      argument();
    } else {
      document.addEventListener('DOMContentLoaded', argument);
    }

    return documentAndWindowJLight(document);
  }

  if (argument === document || argument === window) {
    initalizeJLightElementData(argument, argument);

    return documentAndWindowJLight(argument);
  }

  if (argument instanceof HTMLElement) {
    return jLight([argument]);
  }

  if (argument instanceof NodeList
    || argument instanceof HTMLCollection) {
    return jLight([...argument]);
  }

  let elements = [];

  if (typeof argument === 'string') {
    if (argument.match(/<(.|\n)+>/)) {
      elements = [...createElementsFromString(argument)];
    } else {
      try {
        elements = [...document.querySelectorAll(argument)];

        elements.forEach((element) => {
          initalizeJLightElementData(element, argument);
        });
      } catch (e) {
        return jLight([]);
      }
    }
  }

  return jLight(elements);
};

$.noop = noop;
$.uniqid = uniqid;
$.generateHash = generateHash;
$.isEmptyObject = isEmptyObject;
$.isSameObject = isSameObject;
$.preventEvent = preventEvent;
$.openFullscreen = openFullscreen;
$.closeFullscreen = closeFullscreen;
$.toggleFullscreen = toggleFullscreen;
$.doEasing = doEasing;
$.lcfirst = lcfirst;
$.ucfirst = ucfirst;
$.camelToKebab = camelToKebab;
$.camelToSnake = camelToSnake;
$.kebabToCamel = kebabToCamel;
$.kebabToSnake = kebabToSnake;
$.snakeToCamel = snakeToCamel;
$.snakeToKebab = snakeToKebab;
$.ajax = ajax;
$.get = get;
$.post = post;

export default $;
