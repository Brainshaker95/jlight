[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility~delay}

&nbsp;

This function can be used to delay code execution.

The duration of the timeout can optionally be passed. A promise is returned.

For details regarding [jLight]{@link jLight}.[css]{@link module:CSS~css} please refer to [the css tutorial]{@tutorial css}.

```js
$foo
  .css('color', 'red')
  .delay(1000) // duration of timeout in ms
  .then(() => {
    $foo.css('color', 'green');
  });
```

