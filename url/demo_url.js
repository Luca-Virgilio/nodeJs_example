
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address: url into ogject
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);

/*with URL object */
console.log('----- with URL object -----');
const myUrl = new URL ('http://localhost:8000/default.htm?year=2019&month=august');

console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);

/* add parameter*/ 
myUrl.searchParams.append('temperature',35);
console.log('myUrl modified:');
console.log(myUrl.searchParams);

/* loop through parameter */
myUrl.searchParams.forEach(
    (name,value)=> {console.log(name + ':' + value)}
);


