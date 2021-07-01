[🡸 Back]{@tutorial tut-dimensions}
___

[Go to definitition]{@link module:Dimensions~height}

&nbsp;

This function can be used to set the collections elements height or to get the collections first elements height.


```js
console.log($foo.height()); // Returns the height in px as a number (e.g. 300)

$foo.height(200); // Sets the elements height to 200px
```

Setting also works like this (Notice that only px is supported here, if you want different units you have to set the values manually using [jLight]{@link jLight}.[css]{@link module:CSS~css}):

```js
$foo.height('200px');
```
