[🡸 Back]{@tutorial tut-event}
___

[Go to definitition]{@link module:Event~trigger}

&nbsp;

This function can be used to synthetically trigger events on the collections elements.

Without any user interaction both attached callback functions will be executed:

```html
<button>Button</button>
```

```js
const $button = $('button');

$button
  .on('click', (event) => {
    console.log('clicked!');
  })
  .on('my-event', (event) => {
    console.log('my event triggered!');
  });

$button
  .trigger('click')
  .trigger('my-event');
```

You can also pass arbitrary custom data to the callback which will be accessible through the events `jLightEventData` property or as a second parameter to the callback:

```js
$button
  .on('click', (event) => {
    console.log(event.jLightEventData.key); // value
  })
  .on('my-event-1', (event, data) => {
    console.log(data[1]); // 1
  })
  .on('my-event-2', (event, isTriggered) => {
    console.log(isTriggered); // true
  });

$button
  .trigger('click', { key: 'value' })
  .trigger('my-event-1', [0, 1, 2])
  .trigger('my-event-2', true);
```
