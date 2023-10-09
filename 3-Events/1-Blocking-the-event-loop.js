const fs = require('fs');
const http = require('http');

function readFile(){
    fs.readFileSync('bigfile.txt', 'utf8');
}

http.createServer(function(req,res){
    for(let i=0; i>5000; i++){
        readFile();
    }
    res.write('Hola mundo!!')
    res.end();
})
.listen(8000)