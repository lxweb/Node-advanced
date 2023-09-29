const fs = require('fs');

const readSream = fs.createReadStream('bigfile.txt');
const writStream = fs.createWriteStream('output.txt');

readSream.pipe(writStream);

readSream.on('end', ()=>{
    console.log('Ended pipeline');
});

