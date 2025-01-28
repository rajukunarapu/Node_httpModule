// 1. http module = It's predefined module and It's used to create server, But it's an old technology to create server. In modern days we are using Express framework.

let http = require('http') ;

// creating server by using createServer()
// moduleName.createServer(callbackfunction).listen(portnumber)

http.createServer(function(req,res){
    res.write(req.url)    //send response to client(browser)
    res.end()                         // If I use this response is completed.
    // Better to know server is running or not
    console.log('Server is running')
}).listen(5000)
