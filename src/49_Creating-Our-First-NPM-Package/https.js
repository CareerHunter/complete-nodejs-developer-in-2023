const { send } = require('./request');
const { read } = require('./response');
const { REQUEST_TIMEOUT } = require('./request'); // intend error to load `request` twice to see wether double show on result 

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

console.log(require.cache);