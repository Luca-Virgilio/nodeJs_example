const EventEmitter = require('events');
const uuid = require('uuidv4'); 

class logger extends EventEmitter{
    log(msg){
        this.emit('message',{id: uuid(), msg});
    }
}

module.exports = logger;