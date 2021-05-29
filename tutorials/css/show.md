[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~show}

&nbsp;

This function can be used to show a hidden element.

Before:

```html
<div class="hide"></div>
<span class="hide"></span>
<button class="hide"></button>
```

```css
.hide {
  /* TODO: Add the back arrow on every tutorial (css, ajax done) */
  display: none;
}

.flex {
  display: flex;
}
```

```js
$('.hide').show();
```

After (assuming the elements were always hidden):

```html
<!-- Display property styled as "none" -->
<div class="hide" style="display: revert"></div>
<span class="hide" style="display: revert"></span>
<button class="hide" style="display: revert"></button>
```

After (assuming the elements were hidden by [jLight]{@link jLight}.[hide]{@link module:CSS~hide}):

```html
<!-- Display property not styled -->
<div style="display: block"></div>
<span style="display: inline"></span>
<button style="display: inline-block"></button>

<!-- Display property styled as "flex" -->
<div class="flex" style="display: flex"></div>
<span class="flex" style="display: flex"></span>
<button class="flex" style="display: flex"></button>
```

Optionally you can also force a display state, by passing it to the function:

```js
$('.hide').show('grid');
```

```html
<div class="hide" style="display: grid"></div>
<span class="hide" style="display: grid"></span>
<button class="hide" style="display: grid"></button>
```
