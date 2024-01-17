const EventEmitter = require('events');
var url = 'http://localhost.io/log';

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit('logging', "I love Mosh");
    }
}

//This is how you export function/s 
module.exports = Logger;