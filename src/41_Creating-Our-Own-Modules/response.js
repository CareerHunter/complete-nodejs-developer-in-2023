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