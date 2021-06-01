[🡸 Back]{@tutorial tut-element-data}
___

[Go to definitition]{@link module:ElementData~removeAttr}

&nbsp;

This function can be used to remove attributes.

Before:

```html
<div id="two" data-foo="false" data-bar="foo"></div>
```

```js
$('div')
  .removeAttr('id')
  .removeAttr('data-foo data-bar'); // Passing multiple space separated attributes also works
```

After:

```html
<div></div>
```
