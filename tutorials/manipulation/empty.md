[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~empty}

&nbsp;

This function can be used to empty the collections elements html content.

Before:
```html
<div>Remove me!</div>

<div>
  <span>Remove me!</span>
</div>
```

```js
$('div').empty();
```

After:
```html
<div></div>
<div></div>
```

Notice that this is functionally the same as calling [jLight]{@link jLight}.[html]{@link module:ElementData~html} with an empty string or `null`.
