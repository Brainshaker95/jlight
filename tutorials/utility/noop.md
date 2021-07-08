[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility.noop}

&nbsp;

This function can be used when an empty function is needed.

Example use cases:

```js
const foo = (callback = $.noop) => {
  // Do stuff

  callback();
};
```

```js
const foo = (opts = {}) => {
  const options = {
    onBefore: $.noop,
    onAfter: $.noop,
    ...opts,
  };

  options.onBefore();

  // Do stuff

  options.onAfter();
};
```
