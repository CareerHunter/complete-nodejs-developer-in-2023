const path = require('path');

function getMessages (req, res)  {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpeg'));
    // res.send('<ul><li>Helloo Albert!</li></ul>');
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages
}