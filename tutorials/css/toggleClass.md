[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~toggleClass}

&nbsp;

This function can be used to toggle a variable number of css classes on the collections elements.

Before:

```html
<div id="one toggle-one"></div>
<div id="two"></div>
```

```js
const $one = $('#one');
const $both = $('#one, #two');

$one.toggleClass('toggle-two toggle-three');
$both.toggleClass('toggle-one');
```

After:

```html
<div id="one" class="one toggle-two toggle-three"></div>
<div id="two" class="two toggle-one"></div>
```

If the function is called again the initial state will be restored.

An optional second parameter can be used to force the state:

```js
$both.toggleClass('toggle-one', true); // Add if class is not present
$both.toggleClass('toggle-one', false); // Remove if class is present
```
