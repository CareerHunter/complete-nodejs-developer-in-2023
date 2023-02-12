const { spawn } = require('child_process');
spawn('git', ['stuff']);

console.log(spawn('git', ['stuff']));