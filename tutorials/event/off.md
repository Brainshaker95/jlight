[🡸 Back]{@tutorial tut-event}
___

[Go to definitition]{@link module:Event~off}

&nbsp;

This function can be used to remove event listeners from the collections elements.

Let's assume that we want to remove the event listener after the button has been clicked three times.

```html
<button>Button</button>
```

```js
const $button = $('button');
const clicks = 0;

const callback = (event) => {
  // ...

  clicks += 1;

  if (clicks === 3) {
    $button.off('click', callback);
  }
};

$button.on('click', callback);
```

Simply pass the attached callback and the event type(s) to the off function to detach the event listener.

It doesn't matter if the event was delegated or not, the function just removes the attached listeners which are bound to the passed callback.

If you want to detach all event listeners from a collection you can omit the `callback` parameter:

```js
$button.off('click mouseover my-event');
```
