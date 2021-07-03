[🡸 Back]{@tutorial tut-dimensions}
___

[Go to definitition]{@link module:Dimensions~offset}

&nbsp;

This function can be used to set the collections elements offset or to get the collections first elements offset.

```js
console.log($foo.offset()); // Returns the offset object { top: 200px, left: 100px }

console.log($foo.offset(true)); // Returns the offset object relative to the viewport { top: 300px, left: 200px }
```

```js
// All these are valid examples for setting the offset

$foo.offset({
  top: 200,
  left: 100,
});

$foo.offset({
  top: '200px',
  left: '100px',
});

$foo.offset({
  top: 200,
});

// Sets the offset relative to the viewport
$foo.offset({
  top: 200,
}, true);
```
