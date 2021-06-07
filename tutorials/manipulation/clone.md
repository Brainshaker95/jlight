[🡸 Back]{@tutorial tut-manipulation}
___

[Go to definitition]{@link module:Manipulation~clone}

&nbsp;

This function can be used to clone the collections elements and create a new collection of the clones.

Before:
```html
<body>
  <div>I am real!</div>

  <div>
    <span>Me too!</span>
  </div>
</body>
```

```js
$('body').append($('div').clone());
```

After:
```html
<body>
  <div class="foo">I am real!</div>

  <div>
    <span>Me too!</span>
  </div>

  <div class="foo">I am real!</div>

  <div>
    <span>Me too!</span>
  </div>
</body>
```

For details regarding [jLight]{@link jLight}.[append]{@link module:Manipulation~append} please refer to [the append tutorial]{@tutorial append}.

If you don't want deep cloning of the nodes you can disable it by passing `false` to the function:

```js
$('body').append($('div').clone(false));
```

After:
```html
<body>
  <div class="foo">I am real!</div>

  <div>
    <span>Me too!</span>
  </div>

  <div class="foo"></div>

  <div></div>
</body>
```
