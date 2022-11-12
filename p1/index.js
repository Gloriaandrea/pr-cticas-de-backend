console.log("hola mundo");
const http = require('http');
const host = '0.0.0.0';
const port = 3000;
const server = http.createServer((request, response)=>{
    //200 = ok / 300 = redireccion / 400 = not found / 500 = error server
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    response.end("Hola Mundo UwU")
});

server.listen(port,host,()=>{
    console.log("Server encendido en "+host+"/"+port);
});