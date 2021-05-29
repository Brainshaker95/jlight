[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~toggle}

&nbsp;

This function can be used to toggle an elements display state.

Before:

```html
<div></div>
<span class="hide"></span>
```

```css
.hide {
  display: none;
}
```

```js
const $elements = $('div, span');

$elements.toggle();
```

After:

```html
<div style="display: none"></div>
<span class="hide" style="display: revert"></span>
```

If the function is called again the initial state will be restored.

Optionally you can also force a display state, by passing it to the function.
It then will toggle between the chosen display state and "none".

```js
$elements.toggle('grid');
```

An optional second parameter can be used to force the state:

```js
$elements.toggle(null, true); // Show the elements
$elements.toggle(null, false); // Hide the elements
```

For more details on that refer to [the show tutorial]{@tutorial show} and [the hide tutorial]{@tutorial hide}.

