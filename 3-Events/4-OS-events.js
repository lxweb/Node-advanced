const fs = require("fs");
const writeStream = fs.createWriteStream('document.txt', {encoding:'utf8'})

function writeInFile(){
    const iterations = 5;
    for(let i=0; i<iterations; i++){
        writeStream.write(`Iteration  #${i}\n`)
    }
    writeStream.write('====== END ======');
    writeStream.end()
}

function readFile(){
    const content = fs.readFile('document.txt', {encoding: 'utf8'}, (error, data)=>{
        console.log(data)
    })
}

writeInFile()

writeStream.on('close', ()=>{
    readFile();
})
