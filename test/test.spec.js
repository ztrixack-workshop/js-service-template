import request from 'supertest'

import app from '../../'

describe('API', () => {

  it('GET /, Service is fine!', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Service is fine!', done)
  })
})
