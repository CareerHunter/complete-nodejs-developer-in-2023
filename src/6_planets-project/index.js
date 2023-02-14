const parse = require('csv-parse');
const fs = require('fs');

const result = [];

fs.createReadStream('kepler_data.csv')
    .on('data', (data) => {
        result.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(result);
        console.log('done');
    });
// parse();