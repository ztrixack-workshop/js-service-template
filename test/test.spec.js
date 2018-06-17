import request from 'supertest'
import chai from 'chai'

import app from '../src/server'

const should = chai.should()
const expect = chai.expect

describe('API', () => {
  it('GET / Service is fine!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => { 
        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.property("code")
        expect(res.body).to.have.property("status")
        expect(res.body).to.have.property("data")
        expect(res.body.code).to.be.equal(200)
        expect(res.body.status).to.be.equal('OK')
        expect(res.body.data).to.be.equal("Service is fine!")
        done()
      })
  })
})