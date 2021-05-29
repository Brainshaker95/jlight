[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~addClass}

&nbsp;

This function can be used to add a variable number of css classes to the collections elements.

Before:

```html
<div id="one"></div>
<div id="two"></div>
```

```js
const $one = $('#one');
const $two = $('#two');
const $both = $('#one, #two');

$one.addClass('one');
$two.addClass('two-one two-two');
$both.addClass('both');
```

After:

```html
<div id="one" class="one both"></div>
<div id="two" class="two-one two-two both"></div>
```
