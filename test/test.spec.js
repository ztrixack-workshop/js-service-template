import request from 'supertest'

import app from '../src/server'

describe('API', () => {
  it('GET / Service is fine!', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  })
})