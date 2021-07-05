[🡸 Back]{@tutorial tut-utility}
___

[Go to definitition]{@link module:Utility.toggleFullscreen}

&nbsp;

This function can be used to toggle fullscreen mode. It can either be called statically or on a jLight instance.

```js
// Static usage
$.toggleFullscreen();

// Instance usage
$foo.toggleFullscreen();
```

An optional second parameter can be used to force the state:


```js
// Static usage
$.toggleFullscreen(true); // Open fullscreen
$.toggleFullscreen(false); // Close fullscreen

// Instance usage
$foo.toggleFullscreen(true); // Open fullscreen
$foo.toggleFullscreen(false); // Close fullscreen
```
