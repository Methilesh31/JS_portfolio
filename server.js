const http = require('http');
const PORT = 3000

const fs = require('fs')
const fspromises = require('fs').promise
const path = require('path')

const server = http.createServer( (request , response) =>{
    let filePath = '';
    let contentType = '';

    if (request.url === '/') {
        filePath = path.join(__dirname, 'index.html');
        contentType = 'text/html';
    } 
    else if (request.url.endsWith('.css')) {
        filePath = path.join(__dirname, request.url);
        contentType = 'text/css';
    } 
    else if(request.url.endsWith('.js')){
        filePath = path.join(__dirname , request.url);
        contentType = 'application/javascript';
    }
    else if (request.url.match(/\.(jpg|jpeg|png|gif)$/)) {
        filePath = path.join(__dirname, request.url);
        const ext = path.extname(request.url).toLowerCase();
        switch (ext) {
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.gif':
                contentType = 'image/gif';
                break;
            default:
                response.statusCode = 404;
                response.end('Not Found');
                return;
        }
    }
    else {
        response.statusCode = 404;
        response.end('Not Found');
        return;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            response.statusCode = 404;
            response.end('An Error has Occurred');
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', contentType);
            response.end(data);
        }
    });
})

server.listen(PORT , (error) =>{
    if(error){
        console.error(error)
    }
    else{
        console.log("Server is running on Port : " + PORT);
    }
})