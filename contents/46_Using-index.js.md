# 46. Using index.js

<details>
  <summary> Example 1 </summary>

- `http.mjs` 
```
const { send, read } = require('./internals');
// const request = require('./internals/request');
// const read = require('./internals/response');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
```

---

-   `./internals/index.js`

```
module.exports = {
    ...require('./request'),
    ...require('./response')
}

/* 
const request = require('./request');
const response = require('./response');

module.exports = {
    REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
    send: request.send,
    read: response.read,
}
*/
```

- `./internals/request.mjs`
```
exports.REQUEST_TIMEOUT = 500;

function encrypt (data){
    return "encrypted data";
}

exports.send = function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}
```

---

- `./internals/response.mjs`
```
function decrpt(data) {
    return 'decrypted data'
}

exports.read = function read() {
    return decrpt('data')
}
```

---

-   run `node http.mjs`
```
sending encrypted data to https://google.com
decrypted data
```
</details>

---

[Previous](./45_Module-Caching.md) | [Next](./47_Should-We-Use-index.js%3F.md)