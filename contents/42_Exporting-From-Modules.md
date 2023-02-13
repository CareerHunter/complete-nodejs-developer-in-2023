# 42. Exporting From Modules

<details>
  <summary> Example 1 </summary>

- `http.js` 
```
const request = require('./request');
const read = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
```

---

- `request.js`
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

- `response.js`
```
function decrpt(data) {
    return 'decrypted data'
}

module.exports = function read() {
    return decrpt('data')
}
```

---

-   run `node http.js`
```
sending encrypted data to https://google.com
decrypted data
```
</details>

---

[Previous](./41_Creating-Our-Own-Modules.md) | [Next](./43_CommonJS-vs-ECMAScript.md)