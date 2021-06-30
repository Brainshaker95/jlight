[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~remove}

&nbsp;

This funcion can either be used to remove elements from a collection or to completely remove them from the DOM.

Different types of values can be supplied. Please refer to [the add tutorial]{@tutorial add} for details.

Before:
```html
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
```

```js
$('div').remove();
```

After:
```html
<!-- Nothing left -->
```

You can choose to only remove a subset of the collection:
```js
$('div').remove('#two');
```

After:
```html
<div id="one"></div>
<div id="three"></div>
```

Alternatively if you only want a modified collection and want to leave the DOM elements untouched you can pass `false` as the second parameter:

```js
$('div').remove('#two', false); // #one, #three
```

After:
```html
<!--  Notice that the DOM was not modifed -->
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
```
