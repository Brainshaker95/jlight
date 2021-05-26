[Go to definition]{@link module:Ajax.ajax}

The ajax function can be used to simplify the process of sending XMLHttpRequests.

* [Basic call](#basic-call)
* [Sending data](#sending-data)
* [Callbacks](#callbacks)
* [Further configuration](#further-configuration)

&nbsp;
___

### Basic call

The most simple call would look like this:

```js
$.ajax({
  url: '/api/example', // URL to send the request to
});
```

&nbsp;
___

### Sending data

Adding data to send:

```js
// data: Object.<string, *>
$.ajax({
  url: '/api/example',
  data: {
    foo: 'bar',
    bar: ['foo', 'baz'],
  },
});

// or

// data: string
$.ajax({
  url: '/api/example',
  data: 'foo=bar&bar=baz',
});
```

The serialization shown here can easily be achieved by using [jLight]{@link jLight}.[serialize]{@link module:Utility~serialize} or [jLight]{@link jLight}.[serializeJson]{@link module:Utility~serializeJson}.

&nbsp;
___

### Callbacks

There are 5 different callbacks to the ajax function.

`done`, `fail` and `always` receive these 3 arguments:

* response (the response sent by the server)
* status (the requests status)
* request (the original request object)

```js
$.ajax({
  url: '/api/example',
  data: 'foo=bar&bar=baz',
  done: (response, status, request) => { // Called when request completes
    console.log(response);
  },
  fail: (response, status, request) => { // Called when request fails
    // ...
  },
  always: (response, status, request) => { // Called every time
    // ...
  },
  abort: () => { // Called when the request was aborted
    // ...
  },
  xhr: (request) => { // Called before the request is sent, can be used to modify it beforehand
    // e.g. updating a percentage display
    request.upload.onprogress = (event) => {
      const { loaded, total } = event;

      // ...
    };

    return request;
  },
});
```

&nbsp;
___

### Further configuration

The request can be finetuned using all these remaining options:

```js
$.ajax({
  // ...
  method: 'GET', // The HTTP method to use for the request
  headers: { // The HTTP headers to send
    Accept: 'application/json',
    'X-FOO-BAR': 'baz',
  },
  contentType: 'application/json', // Shorthand for setting the 'Content-Type' header
  async: true, // Whether to send the request asynchronously or not
  crossDomain: false, // If set to false no 'X-Requested-With' will be added to the request
  processData: true, // Whether to automatically process the data passed to the request
  // The credentials to use for authentification
  username: 'foo',
  password: 'bar',
});
```

To send binary data the `contentType` and `processData` options need to be set to `false`.
