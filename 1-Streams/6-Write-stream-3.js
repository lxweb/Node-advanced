const fs = require('fs');

let content = 'Adding this content to the file';
const iterations = 15;
const writstream = fs.createWriteStream('new_file.txt');

for(let i=0; i<iterations; i++){
    content += content
    writstream.write(content, res => {
        console.log('Chunk added to the file')
    })
}

writstream.end()

