const express = require('express');
const http = require('http');

// create Express server
var app = express();
// callback is a funtion will called when server start 
const server = http.createServer(app);

//app.use(express.static('public_folder'));
server.listen(8080);

// bind socket to our server
var io = require('socket.io')(server);


// connecting with the serial port of arduino
const SerialPort = require('serialport'); 
const Readline = SerialPort.parsers.Readline;
//set the right port
const port = new SerialPort('COM15');
// set the parser
// read every new line
const parser = port.pipe(new Readline({delimiter: '\r\n'}));

// parser read the data. the data become parameter of the callback function (temp)

parser.on('data', (temp) => {
    //var today = new Date();
    //io.sockets.emit('temp', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:temp});
    io.sockets.emit('temp',temp);
    
    

});


io.on('connection', (socket) => {
    console.log("Someone connected."); //show a log as a new client connects.

    // siulate data --> create json with arduino data
    socket.on('simulate', ()=> {
        data = {temp: Math.floor(Math.random()*100), 
            flame: 0,
            wifi:Math.floor(Math.random()*-100), 
            sound:Math.floor(Math.random()*100),
            light:Math.floor(Math.random()*100),
            distance:Math.floor(Math.random()*100)
        }
    //send data
    console.log(data);
    socket.emit('sensor', data);
    });

})

app.get('/', function(req,res){
    res.sendFile(__dirname+'/public_folder/home.html');
})

