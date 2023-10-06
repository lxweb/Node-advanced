function randomNumber(){
    return new Promise( (resolve, reject)=> {
        setTimeout( () => {
            resolve( Math.floor( Math.random() * 100 ) );
        }, 2000)
        
    });
};

randomNumber()
.then( (rNumber)=>{
    console.log('Data::', rNumber)
})
.catch(()=>{
    console.log('error')
})