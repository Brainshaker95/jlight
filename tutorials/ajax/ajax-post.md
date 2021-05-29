[🡸 Back]{@tutorial tut-ajax}
___

[Go to definition]{@link module:Ajax.post}

&nbsp;

This function can be used to simplify the process of sending POST XMLHttpRequests.

It is a shorthand version of [Ajax]{@link module:Ajax}.[ajax]{@link module:Ajax.ajax}.

For a full tutorial on all the available options please refer to [the ajax tutorial]{@tutorial ajax}.

```js
$.post('/api/example', {
  done: (response) => {
    // ...
  },
  // All options of the default ajax function can be used here
  // `url` and `method` are automatically set
});
```
