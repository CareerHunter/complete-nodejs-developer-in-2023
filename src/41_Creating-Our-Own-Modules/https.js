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