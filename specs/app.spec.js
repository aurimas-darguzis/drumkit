const Request = require('request')

describe('Server', () => {
    let server

    beforeAll(() => {
        server = require('../app')
    })
    afterAll(() => {
        server.close()
    })

    describe('GET /', () => {
        const data = {}
        beforeAll(done => {
            Reqeust.get('http://localhost:1111', (err, res, body) => {
                data.status = response.statusCode
                data.body = body
                done()
            })
        })
        it('Status 200', () => {
            expect(data.status).toBe(200)
        })
        it('Body', () => {
            expect(data.body).toBe('The Drumkit')
        })
    })
})