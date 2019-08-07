/*
function printStuff(stuff){
    console.log(stuff);
};
*/
var printStuff = function(stuff){console.log(stuff)};

function mainFunction( fun, value ){
    fun(value);
};

mainFunction(printStuff,"Hello World");

mainFunction(function (stuff){console.log(stuff);}, "Ciao");