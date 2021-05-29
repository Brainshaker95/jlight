[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~hasClass}

&nbsp;

This function can be used to check whether the collections elements have specific css classes.

```html
<div id="one" class="one both-one both-two"></div>
<div id="two" class="two both-one both-two"></div>
```

```js
const $one = $('#one');
const $two = $('#two');
const $both = $('#one, #two');

console.log($one.hasClass('one')); // true
console.log($one.hasClass('one both-one')); // true
console.log($two.hasClass('two')); // true
console.log($both.hasClass('two')); // false
console.log($both.hasClass('both-one')); // true
console.log($both.hasClass('both-one both-two')); // true
console.log($both.hasClass('one both-one')); // false
```
