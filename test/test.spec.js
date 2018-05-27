import request from 'supertest'

import server from '../src/server'

const app = server()

describe('API', () => {
  it('GET / Service is fine!', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  })
})