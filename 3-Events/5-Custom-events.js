const fs = require("fs");
const { EventEmitter } = require("stream");
const writeStream = fs.createWriteStream('document.txt', {encoding:'utf8'})

class MyEvent extends EventEmitter{}

const myCustomEvent =  new MyEvent()

function writeInFile(){
    const iterations = 5;
    for(let i=0; i<iterations; i++){
        writeStream.write(`Iteration  #${i}\n`)
    }
    writeStream.write('====== END ======');
    writeStream.end()
}

function emaolNotification(){
    console.log('email notification')
    setTimeout(
        () => {
            myCustomEvent.emit('emailSent')
        },
        1000
    )
}

function readFile(){
    const content = fs.readFile('document.txt', {encoding: 'utf8'}, (error, data)=>{
        console.log(data)
    })
}

writeInFile()

writeStream.on('close', ()=>{
    readFile();
    emaolNotification();
})
myCustomEvent.on('emailSent', ()=>{
    console.log('The email was sent correctly')
})
