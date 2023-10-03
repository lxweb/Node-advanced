const fs = require('fs');
const path = 'cb.txt'; // This works
const errPath = './asd/asd/asd/cb.txt'; // This does not work

fs.writeFile(errPath, '123456', (err) => { // this is a CB
    if(err){
       return console.log('there was an error', err.code)
    }
    console.log('File created!')
} )