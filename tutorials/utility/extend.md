[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility.extend}

&nbsp;

This function can be used to extend all jLight collections with a custom function.

Let's assume we have to set the background color of elements over and over again.

It could get cumbersome always calling [jLight]{@link jLight}.[css]{@link module:CSS~css} manually with the `background-color` key. So let's extend jLight with a custom function that handles this for us.

Remember to always use the `function` keyword in this case since an arrow function as no access to the current jLight collection by using `this`.

```js
$.extend('bgColor', function bgColor(color) {
  this.css('background-color', color);

  // If you want to use this function monadically make sure to return `$(this)` or `this`
  // `$(this)` will create a new jLight instance while `this` will not.
  // The former is the behavior every native jLight method uses.
  return $(this);
});

$foo
  .bgColor('red') // Sets the background color to red
  .bgColor('green'); // Sets the background color to green
```

This example concats every elements text content (Please refer to [the reduce tutorial]{@tutorial reduce} for details):

```html
<div>a</div>
<div>b</div>
<div>c</div>
<div>d</div>
```

```js
const concatText = function concatText() {
  return this.reduce((text, $element) => text + $element.text(), '');
};

$.extend('concatText', concatText);

console.log($('div').concatText()); // abcd
```
