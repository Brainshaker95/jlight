[Go to definition]{@link $}

A jLight collection can be constructed using a variety of inputs.

When invalid input is provided or no elements matching the selector are found an empty collection is returned.

* [Element selection](#element-selection)
* [Element creation](#element-creation)
* [DOM ready](#dom-ready)
* [Monadic structure](#monadic-structure)

&nbsp;
___

### Element selection

Let's assume the following html structure

```html
<div id="one" class="class-name" data-type="one"></div>

<section class="my-section">
  <div id="two" class="class-name" data-type="two"></div>
</section>
```

We can us all valid css selectors

```js
import $ from 'jlight'; // Will be omitted in further tutorials

let $foo; // All jLight collections in this tutorial are prefixed with the $ symbol to easily identify them

$foo = $('div'); // #one, #two
$foo = $('#one'); // #one
$foo = $('#one, #two'); // #one, #two
$foo = $('.class-name'); // #one, #two
$foo = $('[data-type]'); // #one, #two
$foo = $('[data-type="one"]'); // #one
$foo = $('section div'); // #two
$foo = $('.my-section .class-name'); // #two
```

&nbsp;
___

### Element creation

We can easliy create new elements by just passing html to the constructor

```js
let $foo;

// All these create a div element
$foo = $('<div>');
$foo = $('<div/>');
$foo = $('<div />');
$foo = $('<div></div>');

// It is possible to nest tags, all necessary elements wil be created
$foo = $('<section><div></section>');
$foo = $('<div><strong>I am strong!</strong></div>');

// HTMLElements, HTMLCollections an NodeLists are supported as well
$foo = $(document.querySelector('#one'));
$foo = $(document.querySelectorAll('div'));
$foo = $(document.getElementById('#two'));
$foo = $(document.getElementsByTagName('div'));

// It is also possible to get a jLight element from the document or the window
// These elements have a greatly reduced set of functions though

// The full list of the supported functions:
// - on
// - off
// - trigger
// - innerWidth
// - innerHeight
// - outerWidth
// - outerHeight
// - scrollTop
// - scrollLeft
// - scrollTo

$foo = $(document);
$foo = $(window);
```

&nbsp;
___

### DOM ready

A function passed to the constructor will be executed when the DOM content has finished loading
or immediately if that is already the case.

A jLight element of the document will be returned.

```js
$(() => {
  // ...
});

const myFunction = () => {
  // ...
};

$(myFunction);
```

&nbsp;
___

### Monadic structure

Almost all of jLights instance methods behave monadic.

They don't return the current instance but a new one, meaning that the collection at the top of the method chain won't be modified.

Refer to the docs to see which methods return an object of type `jLight` to see where you can make use of this.

```js
$('div')
  .addClass('new-class')
  .prepend('<strong>I am strong!</strong>')
  .attr('data-type', null)
  .fadeOut()
  // ...
```
