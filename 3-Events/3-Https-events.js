const https = require('https')

const correctURL = 'https://rickandmortyapi.com/api'
const errorURL = 'https://rickaaaaandmortyapi.com/api' //Use this URL to raice an error

const req = https.get(correctURL, (res)=>{
   
    res.on('data', (data)=>{
    console.log(JSON.parse(data.toString()))
   })

   res.on('end', ()=>{
    console.log('Ends')
   })
})

req.on("socket", (data) => {
    console.log('Connection started')
})

req.on('error', (error)=>{
    console.log('Error', error)
})

