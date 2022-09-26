/** 
 *  @jest-environment jsdom
 * */

 const server = require('./server')
 const request = require('supertest')

 describe('/ route', () => {
  test('loads correctly', () => {
    // make a request to /
    // check that it worked
    return request(server)
      .get('/')
      .then((response) => {
        const status = response.status
        expect(status).toBe(200)
      })
  })
})