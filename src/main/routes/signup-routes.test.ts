import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    const route = '/api/signup'
    await request(app)
      .post(route)
      .send({
        name: 'any',
        email: 'any@mail.com',
        password: 'secret',
        passwordConfirmation: 'secret'
      })
      .expect(200)
  })
})
