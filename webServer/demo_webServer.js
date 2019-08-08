
var http = require('http');

http.createServer(function (req, res){
     res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("hello Client");
    res.end();

}).listen(8080, () => console.log('server is running ...'));

