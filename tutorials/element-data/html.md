[🡸 Back]{@tutorial tut-element-data}
___

[Go to definitition]{@link module:ElementData~html}

&nbsp;

This function can be used to get or set HTML content.

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

console.log($one.html()); // 'one'
console.log($two.html()); // 'two <div id="three">three</div>' (includes spaces caused by linebreaks)
console.log($three.html()); // 'three' (includes spaces caused by linebreaks)

$one.html('<strong>I am strong!</strong>');
$two.html('<strong><em>I am strong and italic!</em></strong>');

console.log($one.html()); // '<strong>I am strong!</strong>'
console.log($two.html()); // '<strong><em>I am strong and italic!</em></strong>'
```

After:
```html
<div id="one">
  <strong>I am strong!</strong>
</div>

<div id="two"> <!-- notice that the inner div got replaced -->
  <strong>
    <em>I am strong and italic!</em>
  </strong>
</div>
```

You can also supply a function used for setting the inner HTML.

The function will run on each of the collections elements.

Before:
```html
<div id="one" data-foo="bar - 1">
  <strong>I am strong one!</strong>
</div>
<div id="two" data-foo="bar - 2">
  <strong>I am strong two!</strong>
</div>

<div id="three" data-foo="bar - 3">
  <strong>
    <em>I am strong and italic three!</em>
  </strong>
</div>
```

```js
$('div').html((html, index, $element) => `${html}<span>${index} - ${$element.data('foo')}</span>`);
```

After:
```html
<div id="one">
  <strong>I am strong one!</strong>
  <span>0 - bar - 1</span>
</div>

<div id="two">
  <strong>I am strong two!</strong>
  <span>1 - bar - 2</span>
</div>

<div id="three">
  <strong>
    <em>I am strong and italic!</em>
  </strong>

  <span>2 - bar - 3</span>
</div>
```

For details regarding [jLight]{@link jLight}.[data]{@link module:ElementData~data} please refer to [the data tutorial]{@tutorial data}.

