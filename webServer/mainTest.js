const http = require ('http');
const path = require ('path');
const fs = require ('fs');

const server = http.createServer((req,res) =>{
    // if(req.url==='/'){
    //     fs.readFile(
    //         path.join( __dirname, 'public', 'index.html'),
    //         (err,content) =>{
    //             if(err) throw err;
    //             console.log('get page');
    //             res.writeHead(200, {'content-type':'text/html'});
    //             res.end(content);
    //     })
    // }

    // if(req.url==='/about'){
    //     fs.readFile(
    //         path.join( __dirname, 'public', 'about.html'),
    //         (err,content) =>{
    //             if(err) throw err;
    //             console.log('get page');
    //             res.writeHead(200, {'content-type':'text/html'});
    //             res.end(content);
    //     })
    // }
    // if(req.url==='/api/users'){
    //     const users = [
    //         {name:'John Doe', age:40},
    //         {name:'Jackson Snow', age:30}
    //     ];
    //     res.writeHead(200, {'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // build path dinamically
    let filePath = path.join(
        __dirname,
        'public',
        req.url ==='/' ? 'index.html' : req.url
        );

        console.log(filePath);
     

    // extension of file
    let extname =path.extname(filePath);
    
    //initial content type
    let contentType = 'text/html';

    //check and set content type:
    switch (extname){
        case '.js': 
        contentType='text/javascript';
        break;
        case '.css': 
        contentType='text/css';
        break;
        case '.json': 
        contentType='application/json';
        break;
        case '.png': 
        contentType='image/png';
        break;
    }
    
    //Read File
    fs.readFile(filePath, (err,content) =>{
        if (err){
            if(err.code='ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'), (err,content)=>{
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content,'utf8');
                })
            }else{
                //some Server error
                res.writeHead(500);
                res.end('Server error:'+ err.code);   
            }
        } else {
            //Success
            res.writeHead(200, {'Content-Type':contentType});
            res.end(content,'utf8');
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server is running ...'));