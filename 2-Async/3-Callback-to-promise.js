const fs = require('fs');
const util = require('util')

const path = 'cb.txt'; // This works

fs.writeFile(path, '123456', (err) => { // this is a CB
    console.log('File created!');
} );

const writeFilePromise = util.promisify(fs.writeFile);

writeFilePromise(path, '123456')
.then(()=>{
    console.log('The file was created')
})
.catch(()=>{
    console.log('Error')
})