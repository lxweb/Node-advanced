const fs = require('fs');

const readStr = fs.createReadStream('1bigfile.txt', { encoding: 'utf8' });

readStr.on('open', ()=>{
    console.log('Opening file')
})
.on('data', ()=>{
    console.log('Receiving Data')
})
.on('close', ()=>{
    console.log('Closing file')
})
.on('error', ()=>{
    console.log('File raise an error') // To test this line just change the name of the file to some file that does not exists
})