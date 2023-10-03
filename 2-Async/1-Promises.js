const promises = require('fs').promises;

promises.copyFile('new_file.txt', 'file_with_promises.txt')
.then(()=>{
    console.log('The copy was created succesfuly')
})
.catch(()=>{
    console.log('There was an error!')
})
.finally(()=>{
    console.log('This block of code will be executed no matter success or fail')
});
