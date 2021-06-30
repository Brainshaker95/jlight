[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~appendTo}

&nbsp;

This function can be used to append the collections elements to another collections last element.

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
$('#three').appendTo('div');
```

After:
```html
<div>
  <span id="one"></span>
  <span id="two"></span>
  <span id="three"></span>
</div>
```
