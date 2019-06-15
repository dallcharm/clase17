const express = require('express')
const app = express()
const router=require('./auth')

app.use('/auth',router)

app.get('/', (request,reponse) => {
    reponse.send('Hello World')
})

app.listen(9000)