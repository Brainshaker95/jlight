[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility.isEmptyObject}

&nbsp;

This function can be used to check if an object is empty.

```js
console.log($.isEmptyObject({})); // true
console.log($.isEmptyObject(new Object())); // true
console.log($.isEmptyObject(new Array())); // false
console.log($.isEmptyObject({ foo: 'bar' })); // false
console.log($.isEmptyObject(null)); // false
console.log($.isEmptyObject('')); // false
console.log($.isEmptyObject(1)); // false
```
