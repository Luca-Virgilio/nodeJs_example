const logger = require('./logger');

const myLogger = new logger();

myLogger.on('message', data => console.log('Called listener', data) );

myLogger.log('Hello world!!');
myLogger.log('test1');
myLogger.log('test2');