/**
 * This example is used to integrate information from many data sources
 */

function userLogin(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
             resolve({
                user:'Max',
                age:23
            })
        }, 2000)
    } )
}


function getUserData(user){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            const extendedUserData = {
                data:123,
                data2: 'testing data',
                data3: 'etc'
            }
            resolve(Object.assign({}, user, extendedUserData))
        }, 2000 )
    } )
}

// userLogin().then((userData)=>{
//     console.log(userData)
//     getUserData(userData).then((userExData)=>{
//         console.log(userExData)
//     })
// })

userLogin().then( (userData) => {
    console.log(userData);
    return getUserData(userData);
}).then( (userExData)=>{
    console.log(userExData)
} )