# 41. Creating Our Own Modules

<details>
  <summary> Example 1 </summary>

- `http.js` 
```
const { send } = require('./request');
const { read } = require('./response');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

/* 
const request = require('./request');
const response = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    return response.read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
*/

/* 
const request = require('./request');
const read = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
 */
```

---

- `request.js`
```
const REQUEST_TIMEOUT = 500;

function encrypt (data){
    return "encrypted data";
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
    REQUEST_TIMEOUT,
    send,
}

/* 
exports.REQUEST_TIMEOUT = 500;

function encrypt (data){
    return "encrypted data";
}

exports.send = function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}
*/

```

---

- `response.js`
```
function decrpt(data) {
    return 'decrypted data'
}

function read() {
    return decrpt('data')
}

module.exports = {
    read,
}

/* 
function decrpt(data) {
    return 'decrypted data'
}

module.exports = function read() {
    return decrpt('data')
}
*/
```

---

-   run `node http.js`
```
sending encrypted data to https://google.com
decrypted data
```
</details>

---

[Previous](./40_Why-Use-Modules%3F.md) | [Next](./42_Exporting-From-Modules.md)