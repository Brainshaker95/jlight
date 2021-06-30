[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~after}

&nbsp;

This function can be used to insert another collections elements after the collections last element.

Different types of values can be supplied. Please refer to [the add tutorial]{@tutorial add} for details.

Before:
```html
<div>
  <span id="one"></span>
  <span id="two"></span>
</div>

<span id="three"></span>
```

```js
$('div').after('#three');
```

After:
```html
<span id="three"></span>

<div>
  <span id="one"></span>
  <span id="two"></span>
</div>
```
