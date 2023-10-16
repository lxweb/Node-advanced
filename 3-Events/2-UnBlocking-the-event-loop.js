const fs = require('fs');
const http = require('http');

function readFile(){
    const streamRead = fs.createReadStream("./bigfile.txt",{
        encoding:'utf8'
    });
}

http.createServer(function(req,res){
    console.log("Starting server")
    for(let i=0; i<5000; i++){
        readFile();
    }
    res.write('Hola mundo!!')
    res.end();
})
.listen(8000)