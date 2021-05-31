[🡸 Back]{@tutorial tut-event}
___

[Go to definitition]{@link module:Event~once}

&nbsp;

This function can be used to add event listeners to the collections elements that will be called just once.

It mostly works identically as [jLight]{@link jLight}.[once]{@link module:Event~on}.

The only difference is that the `once` option will be passed as `true` to the underlying event listener, no matter what value was manually passed in to the options of this function.

For a full tutorial on all possibilites please refer to [the on tutorial]{@tutorial on}.

```html
<button>Button</button>
<button>Button</button>
<button>Button</button>
```

```js
$buttons.once('click', (event) => {
  // This callback will be called only once
  // ...
});
```
