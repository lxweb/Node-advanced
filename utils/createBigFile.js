const fs = require('fs');
const bigFile = fs.createWriteStream('bigfile.txt');

for(let i=0; i<1e6; i++){
    bigFile.write('Quis aliqua amet veniam esse cillum dolor. Dolor ad in ipsum consectetur mollit dolor adipisicing aliquip ut Lorem. Dolore in nisi duis nisi deserunt ex velit amet ad et ad laborum adipisicing exercitation. Ea et ad reprehenderit incididunt incididunt ipsum id ex minim id sit. Adipisicing commodo Lorem anim voluptate nulla excepteur quis ad eu do qui sint quis. Ullamco esse veniam labore cupidatat officia consequat duis exercitation qui exercitation officia in nulla. Commodo commodo qui enim nostrud ut.')
}

bigFile.end()