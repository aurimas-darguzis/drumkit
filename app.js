const express = require('express')
const app = express()

app.get('/', (req, res) => {
    response.status(200).send('The Drumkit')
})

app.get('/test', (req, res) => {
    response.status(500).send({'message':'Error has occured'})
})

const server = app.listen(1111, () => {
    console.log('listening on port ' + server.address().port + '...')
})

module.exports = server