const path = require('path');
const fs = require('fs');

// path of the this file
console.log(path.join(__filename,'/test2'));

// create directory
 // fs.mkdir(path.join(__direname,'/test'), (err)=>{
       //     if(err) throw err;
//     console.log('directory created...');
    // });

// create a file
// !!! writeFile always creates a new File
// fs.writeFile(path.join(__dirname, 'test','message.txt',),'Hello world', err =>{
//     if (err) throw err;
//     console.log('file created...');
// } );

// write on file (add new lines)
// fs.appendFile(path.join(__dirname, 'test','message.txt',),'\n This is node!!!', err =>{
//     if (err) throw err;
//     console.log('file updated...');
// } );

//read a file
//!!! without the option 'utf8' readFile read only a stram of bytes
fs.readFile(path.join(__dirname, 'test','message.txt',),'utf8', (err,data) =>{
    if (err) throw err;
    console.log(data);
} );