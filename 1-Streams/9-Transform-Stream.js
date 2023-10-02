const fs = require('fs');
const { Transform } = require('stream');

const readSream = fs.createReadStream('bigfile.txt');
const writStream = fs.createWriteStream('output-transform.txt');

readSream.setEncoding('utf8');

const filter = new Transform({
    writableObjectMode: true, //Alow us to modify the data in the fly
    transform(data, encoding, callback){
        this.push(data.toString().toUpperCase())
        callback();
    },
    final(callback){
        callback()
    }
}); 

readSream.pipe(filter).pipe(writStream);
