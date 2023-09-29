const fs = require('fs');

let content = 'Adding this content to the file';
const iterations = 15;

for(let i=0; i<iterations; i++){
    content += content
}

const writstream = fs.createWriteStream('new_file.txt');

writstream.write(content, res => {
    console.log('Writing process finalized')
})