[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~insertAfter}

&nbsp;

This function can be used to insert the collections elements after another collections last element.

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
$('div').insertAfter('#three');
```

After:
```html
<span id="three"></span>

<div>
  <span id="one"></span>
  <span id="two"></span>
</div>
```
