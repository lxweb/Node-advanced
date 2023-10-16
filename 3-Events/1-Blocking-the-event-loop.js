const fs = require('fs');
const http = require('http');

function readFile(){
    try{
        content = fs.readFileSync('bigfile.txt', 'utf8');
    }catch(e){
        console.log(e)
    }
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