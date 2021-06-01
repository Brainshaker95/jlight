[🡸 Back]{@tutorial tut-element-data}
___

[Go to definitition]{@link module:ElementData~prop}

&nbsp;

This function can be used to get or set a property.

Before:

```html
<input type="checkbox" checked>

<select>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```

```js
const $checkbox = $('[type="checkbox"]');
const $select = $('select');

console.log($checkbox.prop('checked')); // true
console.log($select.prop('multiple')); // false
console.log($select.prop('selectedOptions')); // HTMLCollection

$checkbox.prop('checked', false);
$select.prop('multiple', true);

console.log($checkbox.prop('checked')); // false
console.log($select.prop('multiple')); // true
```

```html
<input type="checkbox">

<select multiple>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```
