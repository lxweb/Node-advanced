const fs = require('fs');
const { Duplex } = require('stream');

const readSream = fs.createReadStream('bigfile.txt');
const writStream = fs.createWriteStream('output.txt');

const report = new Duplex({
    write(data, encode, callback){
        // console.log('Data is::', data.toString())
        // console.log('encode is::', encode)
        callback();
    },
    read(size){
        console.log('Size is::', size)
    }
}); // Duplex always needs 2 methods

readSream.pipe(report).pipe(writStream);

readSream.on('end', ()=>{
    console.log('Ended pipeline');
});


