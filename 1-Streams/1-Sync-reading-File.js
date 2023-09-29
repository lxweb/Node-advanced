/**
 * Streams let us read and write information without blocking the execution time
 * Means that we can interact with big files with efficiency
 */

const fs = require('fs');

console.time('Response Time');

for(let i=0; i<5; i++){
    fs.readFileSync('bigfile.txt', 'utf8')
}

console.timeEnd('Response Time');