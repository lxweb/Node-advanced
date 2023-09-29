const fs = require('fs');

let content = 'Adding this content to the file';
const iterations = 15;

for(let i=0; i<iterations; i++){
    content += content
}

fs.writeFile('new_file.txt', content, ()=>{
    console.log('Finishing the direct writeing process')
})