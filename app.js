const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('The Drumkit')
    // res.render('index')
})

app.get('/test', (req, res) => {
    res.status(500).send({'message':'Error has occured'})
})

const server = app.listen(1111, () => {
    console.log('listening on port ' + server.address().port + '...')
})

module.exports = server