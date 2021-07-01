[🡸 Back]{@tutorial tut-dimensions}
___

[Go to definitition]{@link module:Dimensions~width}

&nbsp;

This function can be used to set the collections elements width or to get the collections first elements width.

```js
console.log($foo.width()); // Returns the width in px as a number (e.g. 300)

$foo.width(200); // Sets the elements width to 200px
```

Setting also works like this (Notice that only px is supported here, if you want different units you have to set the values manually using [jLight]{@link jLight}.[css]{@link module:CSS~css}):

```js
$foo.width('200px');
```
