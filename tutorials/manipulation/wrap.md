[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~wrap}

&nbsp;

This function can be used to wrap the collections elements with another collections elements.

Different types of values can be supplied. Please refer to [the add tutorial]{@tutorial add} for details.

Before:
```html
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
```

```js
$('#one').wrap('<div>');
$('#three').wrap('#two');
```

After:
```html
<div>
  <div id="one"></div>
</div>

<div id="two">
  <div id="three"></div>
</div>
```

You can also wrap in multiple elements:

Before:
```html
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
```

```js
// The next 3 lines accomplish the same result
$('#one').wrap('<div></div><span></span>'); // The elements have to be added sequentially
$('#one').wrap('<div></div><span />');
$('#one').wrap('<div></div><span>');

$('#four').wrap($('#two, #three'));
```

After:
```html
<div>
  <span>
    <div id="one"></div>
  </span>
</div>

<div id="two">
  <div id="three">
    <div id="four"></div>
  </div>
</div>
```
