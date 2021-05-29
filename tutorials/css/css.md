[🡸 Back]{@tutorial tut-css}
___

[Go to definitition]{@link module:CSS~css}

&nbsp;

This function can be used to get or set css values or get the whole style declaratation.

* [Set](#set)
* [Get](#get)

&nbsp;
___

### Set

If you only want to set one property you can use the function like this:

Before:

```html
<div>Style me!</div>
```

```js
const $div = $('div');

$div.css('color', 'purple');
```

After:

```html
<div style="color: purple">Style me!</div>
```

If you want to set multiple properties an object can be passed:

```js
$div.css({
  color: 'yellow',
  backgroundColor: 'black', // Camel case works
  'font-size': '20px', // Kebap case works
});
```

After:

```html
<div style="color: yellow; background-color: black; font-size: 20px">Style me!</div>
```

&nbsp;
___

### Get

Get a specific css value:

```js
console.log($div.css('font-size')); // 20px
```

Get the elements whole style declaration:

```js
const computedStyles = $div.css();

console.log(computedStyles.getPropertyValue('font-size')); // 20px
console.log(computedStyles.fontSize); // 20px
```
