// ! How create Node server and run with localhost
// ! Multiple variants to create server looks the code below

// import statements 
 const { create } = require('domain');
const http = require('http');
const { url } = require('inspector');
const fs = require('fs')

//Create a function to listen the http.ServerResponse variant-1
// function requestLq(req, res){
//     console.log('Server')
// }

//variant-2 Note --  This is an {Event Driven ARC which Node use heavily all evry where}

//  http.createServer(function(req, res){
//     console.log('Server 2')
//  });

//variant- 3  Note --  Next Gen - of Es6 with arrow function to create server
// const server = http.createServer ((req, res) => {
//     res.write('Hello World!');
//     res.end()
//     console.log(req);
//     //process.exit(); ! How to quit the event loop from the server
// });

// server.listen(2200);

//Understanding Requests

// http.createServer ((req,res) =>{
//     //console.log('Server Configure Method', 'Methods : ' , req.method, 'Listen : ' , req.listen, 'Headers : ' , req.headers, 'URL : ' , req.url)
//     console.log(req.url, req.method, req.headers)
// }).listen(3000)

// e.g
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080);

// Date 19/23 Module is contuning 
const serverlq = http.createServer ((req, res) =>{
    console.log(req);
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method
    if(url === '/'){
    // Create HTML content
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter the Message!</title></head>');
    res.write('<body><h1>Fill the Data in textbox then click Send !</h1><form action="/message" method="POST"><input name= "message" type="text"><button type="submit">Send</button></form></body>');
    res.write('</html>')
    return res.end()
    }
    if(url === '/message' && method == 'POST'){
        fs.writeFileSync('message.txt', 'Hello world');
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
    }
    // Create HTML 2 content
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Node Apps !</title></head>');
    res.write('<body><h1>Hello from Node JS Server</h1></body>');
    res.write('</html>')
    res.end()
});
serverlq.listen(8000);

