/*
define a simple json

const person = {
    name: "Luca Virgilio",
    age: 24
}
*/
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log('My name is '+ this.name +' and I am '+ this.age);
    }
}


//export a variable, class or a method
module.exports = Person;