const express = require('express')
const app = express()
const router = require('./routes/router')

app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))


app.use(router)

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))