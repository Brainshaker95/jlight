[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility.isSameObject}

&nbsp;

This function can be used to check if two objects are the same.

```js
const object1 = { foo: 'bar' };
const object2 = object1;
const $foo = $('.foo');
const $bar = $foo;

console.log($.isSameObject({ foo: 'bar' }, { foo: 'bar' })); // false
console.log($.isSameObject(object1, object1)); // true
console.log($.isSameObject(object1, object2)); // true
console.log($.isSameObject(object1, null)); // false
console.log($.isSameObject(null, null)); // false
console.log($.isSameObject($foo, $('.foo'))); // false
console.log($.isSameObject($foo, $bar)); // true
console.log($.isSameObject($foo, $bar.clone())); // false
```
