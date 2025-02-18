// FileSytem(fs) used for read the files, Write the files(create another content by repalcing that existing content),
// append the content to existing file and deltete the file.



let http = require("http"); // Importing http module
let fs = require("fs"); // Importing fileSystem module short for 'fs'
const { throws } = require("assert");


// http.createServer((req, res) => {
//     fs.readFile("index.text", (error, data) => {
//       res.write(data);
//       res.end();
//     });
// }).listen(6000, () => console.log("Server is running on port number 6000"));


            //  or seeing on the console

// 1. readFile(file.extension,callback(error,data))
// error = Show the error in the console
// data = send the data of file being opened

fs.readFile("index.txt", (error, data) => {
    if(error) throw error
    console.log(data.toString())
});

// 2. appendFile(file.extension,"content to you want to add to existing0,callback(error,data)")
fs.appendFile('index.txt'," I'm Newly added content by appendFile method.",(error)=>{
    if(error) throw error
    console.log("Succesfully added to index.txt file")
})

// 3. WriteFile(file.extension,"content that replaces existing content",callback(error,data))
fs.writeFile('index.txt',"Repalced by writeFile method",(error)=>{
    if (error) throw error
    
})

// 4. unlink(file.extension,callback(error))
fs.unlink('index.js',(error)=>{
    console.log(error)
})

// Note: use only one methode to see the changes.

// In this example, We are appending one file content to another file by using readFile() and appendFile().
fs.readFile('text.txt','utf-8',(error,data)=>{
    fs.appendFile('index.txt',data,(error)=>{
        if (error) throw error
        console.log('successfully appended.')
    })
})