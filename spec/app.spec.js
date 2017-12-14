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
            Request.get('http://localhost:1111', (err, res, body) => {
                data.status = res.statusCode
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

    describe('GET /test', () => {
        const data = {}
        beforeAll(done => {
            Request.get('http://localhost:1111/test', (err, res, body) => {
                data.status = res.statusCode
                data.body = JSON.parse(body)
                done()
            })
        })
        it('Status 200', () => {
            expect(data.status).toBe(500)
        })
        it('Body', () => {
            expect(data.body.message).toBe('Error has occured')
        })
    })
})