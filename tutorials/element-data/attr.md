[🡸 Back]{@tutorial tut-element-data}
___

[Go to definitition]{@link module:ElementData~attr}

&nbsp;

This function can be used to get or set attributes.

Before:

```html
<div id="one" data-foo></div>
```

```js
const $div = $('div');

console.log($div.attr('id')); // 'one'
console.log($div.attr('class')); // undefined
console.log($div.attr('data-foo')); // true
```

If the collection contains more than one element only the first element that has the requested value will be taken into consideration.

Setting of attributes can either be done by passing the attribute name as the first and the value as the second parameter or by passing an object:

```js
$div
  .attr('id', 'two')
  .attr('data-foo', false)
  .attr('data-bar', 'foo');

// This will accomplish the same result as the previous lines
$div.attr({
  id: 'two',
  dataFoo: false, // Camel case works
  'data-bar': 'foo', // Kebab case works
});

console.log($div.attr('id')); // 'two'
console.log($div.attr('data-foo')); // 'false' (notice that this is a string and will therefore still evaluate to true)
console.log($div.attr('data-bar')); // 'foo'
```

After:

```html
<div id="two" data-foo="false" data-bar="foo"></div>
```

When passing a boolean or nothing the the function all the elements attributes will be returned:

```js
// By default all attribute names will be converted to camel case for easier handling

console.log($div.attr()); // { id: 'two', dataFoo: true, dataBar: 'foo' }
console.log($div.attr(false)); // { id: 'two', dataFoo: true, dataBar: 'foo' }
console.log($div.attr(true)); // { id: 'two', 'data-foo': true, 'data-bar': 'foo' }
```
