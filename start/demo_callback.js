
console.log("user 1 richiede i dati dal db");
setTimeout(provaPrint,5000);
console.log("user 2 richiede i dati dal db");
setTimeout(provaPrint, 1000);
console.log("user 3 richiede i dati dal db");
setTimeout(provaPrint, 2000);

function provaPrint (){
    console.log("accesso ai dati del DB. invio dati all'utente ");
};

