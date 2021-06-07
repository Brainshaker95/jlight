[🡸 Back]{@tutorial tut-element-data}
___

[Go to definitition]{@link module:ElementData~text}

&nbsp;

This function can be used to get or set text content.

Before:
```html
<div id="one">one</div>

<div id="two">
  two
  <div id="three">
    three
  </div>
</div>
```

```js
const $one = $('#one');
const $two = $('#two');
const $three = $('#three');

console.log($one.text()); // 'one'
console.log($two.text()); // 'two three' (includes spaces caused by linebreaks)
console.log($three.text()); // 'three' (includes spaces caused by linebreaks)

$one.text('new one');
$two.text('new two');

console.log($one.text()); // 'new one'
console.log($two.text()); // 'new two'
```

After:
```html
<div id="one">new one</div>
<div id="two">new two</div> <!-- notice that the inner div got replaced -->
```

You can also supply a function used for setting the text content.

The function will run on each of the collections elements.

Before:
```html
<div id="one" data-foo="bar - 1">one</div>
<div id="two" data-foo="bar - 2">two</div>
<div id="three" data-foo="bar - 3">three</div>
```

```js
$('div').text((text, index, $element) => `${text} - ${index} - ${$element.data('foo')}`);
```

After:
```html
<div id="one">one - 0 - bar - 1</div>
<div id="two">two - 1 - bar - 2</div>
<div id="three">three - 2 - bar - 3</div>
```

For details regarding [jLight]{@link jLight}.[data]{@link module:ElementData~data} please refer to [the data tutorial]{@tutorial data}.
