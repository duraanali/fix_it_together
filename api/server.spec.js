const server = require('./server.js')
const request = require('supertest')

describe('server.js', ()=>{
    test('verify testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', ()=>{
        it('should return status of 200', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
        })
    })

    it('should be JSON', async () => {
        const res = await request(server).get('/')
        expect(res.type).toBe('application/json')
    })

    it('should return the right object', async () => {
        const res = await request(server).get('')
        expect(res.body).toEqual({ message: "🗡 ==={ The API that you seek is running 🔥😎🎉}===🗡" })
    })
})