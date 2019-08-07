// npm install install all the dipendences defined in the package-lock.json

//import a variable or a function from a script 
const Person = require('./person.js');
// soon es6 implements a new way to import variables 
// with import ...


const person1 = new Person('Jhon Doe', 30); 
person1.greeting();