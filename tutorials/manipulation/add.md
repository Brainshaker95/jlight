[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~add}

&nbsp;

This function adds a collection to the current collection and returns a new one.

The new collection won't contain duplicates even if an element was present in both source collections.

```html
<div id="one"></div>
<div id="two"></div>
<span id="three"></div>
```

```js
let $foo;

$foo = $('#one').add('#two'); // #one, #two
$foo = $('#one').add($('#two')); // #one, #two
$foo = $('#three').add('div'); // #one, #two, #three
$foo = $('#three').add('<div>'); // #three, <div></div>
$foo = $('#one').add('div'); // #one, #two
$foo = $('#one').add(document.querySelector('span')); // #one, #three
$foo = $('#one').add(document.querySelectorAll('div')); // #one, #two
$foo = $('#one').add(document.getElementById('#two')); // #one, #two
$foo = $('#one').add(document.getElementsByTagName('div')); // #one, #two
```
