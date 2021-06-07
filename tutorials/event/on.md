[🡸 Back]{@tutorial tut-event}
___

[Go to definitition]{@link module:Event~on}

&nbsp;

This function can be used to add event listeners to the collections elements.

* [Simple usage](#simple-usage)
* [Delegation](#delegation)
+ [Preventing behavior](#preventing-behavior)
* [Options](#options)

&nbsp;
___

### Simple usage

Let's assume we want to attach event listeners to all these buttons:

```html
<button>Button</button>
<button>Button</button>
<button>Button</button>
```

```js
const $buttons = $('button');

$buttons
  .on('click', (event) => {
    // ...
  })
  .on('mouseover', ({ $currentTarget }) => {
    // $currentTarget is the button being mouseovered
    $currentTarget.addClass('hovered');
  })
  .on('mouseleave', ({ $currentTarget }) => {
    $currentTarget.removeClass('hovered');
  })
  .on('my-event', (event) => {
    // ...
  });
```

The event passed to the callback function contains everything the underlying event also contains.

The only difference is that the jLight event is extended with 2 custom properties: `event.$target` and `event.$currentTarget`

These are the jLight elements equivalent to `event.target` and `event.currentTarget`.

It is also possible to attach multiple listeners for the same callback:

```js
$buttons.on('click focusin mouseover', (event) => {
  // ...
});
```

&nbsp;
___

### Delegation

It may be the case that an element isn't already part of the DOM but you want to attach a listener to it.

In that case you can use event delegation:

```html
<div>
  <button>Button</button>
</div>
```

Let's assume that another button should be added on click on one of the existing buttons.

We could either attach a listner to the last added button or we delegate the event like so:

```js
$('div').on('click', 'button', (event) => {
  // event.$currentTarget is the div containing the buttons
  event.$currentTarget.append('<button>Button</button>');
});
```

A new button will be appended to the div every time one of the existing buttons is clicked.

For details regarding [jLight]{@link jLight}.[data]{@link module:Manipulation~append} please refer to [the append tutorial]{@tutorial append}.

&nbsp;
___

### Preventing behavior

The are several different possibilites for dealing with the events default behavior, propagation and immediate propagation. You can of course call the methods `event.preventDefault()`, `event.stopPropagation()` and `event.stopImmediatePropagation()` manually, but there are shorthands if you want to call all three of them:

```html
<a href="https//www.example.com">Example</a>
```

```js
const $link = $('a');

$link.on('click', false);

$link.on('click', (event) => {
  // ...

  return false;
});

$link.on('click', (event) => {
  // ...
}, false);

$link.on('click', 'span', (event) => {
  // ...

  return false;
});

$link.on('click', 'span', (event) => {
  // ...
}, false);
```

Using [jLight]{@link jLight}.[preventEvent]{@link module:Utility.preventEvent}:

```js
$link.on('click', $.preventEvent);

$link.on('click', (event) => {
  $.preventEvent(event);

  // ...
});
```

&nbsp;
___

### Options

An optional options object can be passed to the underlying `addEventListener` call:

```js
// Options as third parameter
$buttons.on('click', (event) => {
  // ...
}, {
  capture: true,
  once: true,
});

// Options as fourth parameter
$link.on('click', 'span', (event) => {
  // ...
}, {
  capture: true,
  once: true,
});
```

If you only want to set the `once` option you can use [jLight]{@link jLight}.[once]{@link module:Event~once}.
