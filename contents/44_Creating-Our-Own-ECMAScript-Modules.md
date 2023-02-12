# 44. Creating Our Own ECMAScript Modules

<details>
  <summary> Example 1 </summary>

- `http.mjs` 
```
import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
```

---

- `request.mjs`
```
const REQUEST_TIMEOUT = 500;

function encrypt (data){
    return "encrypted data";
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

export {
    REQUEST_TIMEOUT,
    send,
}
```

---

- `response.mjs`
```
function decrpt(data) {
    return 'decrypted data'
}

function read() {
    return decrpt('data')
}

export {
    read,
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

[Previous](./43_CommonJS-vs-ECMAScript.md) | [Next]()

