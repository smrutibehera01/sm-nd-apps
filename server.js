// ! How create Node server and run with localhost
// ! Multiple variants to create server looks the code below

// import statements 
 const http = require('http')

//Create a function to listen the http.ServerResponse variant-1
// function requestLq(req, res){
//     console.log('Server')
// }

//variant-2 Note --  This is an {Event Driven ARC which Node use heavily all evry where}

//  http.createServer(function(req, res){
//     console.log('Server 2')
//  });

//variant- 3  Note --  Next Gen - of Es6 with arrow function to create server
const server = http.createServer ((req, res) =>{
    console.log(req);
    //process.exit(); ! How to quit the event loop from the server
});

server.listen(4000);

//Understanding Requests

http.createServer ((req,res) =>{
    //console.log('Server Configure Method', 'Methods : ' , req.method, 'Listen : ' , req.listen, 'Headers : ' , req.headers, 'URL : ' , req.url)
    console.log(req.url, req.method, req.headers)
}).listen(3000)