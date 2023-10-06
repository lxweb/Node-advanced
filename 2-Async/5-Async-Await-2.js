function randomNumber(){
    return new Promise( (resolve, reject)=> {
        setTimeout( () => {
            resolve( Math.floor( Math.random() * 100 ) );
        }, 2000)
        
    });
};

const getRandomNumber = async () => {
    const newRandomName = await randomNumber();
    console.log('Data::', newRandomName);
    return newRandomName;
};

getRandomNumber()