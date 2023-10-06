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


function getUserData(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            const extendedUserData = {
                data:123,
                data2: 'testing data',
                data3: 'etc'
            }
            resolve(extendedUserData)
        }, 2000 )
    } )
}


Promise.all([userLogin(), getUserData()]).then( results => {
    console.log(results) // The results here has the same order
} )