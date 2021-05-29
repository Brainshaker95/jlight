[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~removeClass}

&nbsp;

This function can be used to remove a variable number of css classes from the collections elements.

Before:

```html
<div id="one" class="one both"></div>
<div id="two" class="two-one two-two both"></div>
```

```js
const $one = $('#one');
const $two = $('#two');
const $both = $('#one, #two');

$one.removeClass('one');
$two.removeClass('two-one two-two');
$both.removeClass('both');
```

After:

```html
<div id="one"></div>
<div id="two"></div>
```

You can also remove all the classes an element has by calling the function without any arguments:

```js
$one.removeClass();
```
