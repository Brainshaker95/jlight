[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility~isSameJLight}

&nbsp;

This function can be used to check if two jLight collections contain the same elements.

```html
<div id="one" class="one"></div>
<div id="two" class="two"></div>
<div id="three" class="three"></div>
<div id="four" class="four"></div>

<span class="span one"></span>
<span class="span two"></span>
```

```js
const $divs = $('div');

console.log($divs.isSameJLight($('div'))); // true
console.log($divs.isSameJLight($('[id]'))); // true
console.log($divs.isSameJLight($('[class]'))); // false
console.log($('span').isSameJLight($('.span'))); // true
console.log($('span.one').isSameJLight($('.one'))); // false
```
