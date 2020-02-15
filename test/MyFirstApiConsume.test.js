const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {
    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
      });

  it('Consume GET Service with query parameters', async () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };
  
    const response = await agent.get('https://httpbin.org/get').query(query);
  
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(query);
  });

  it('Consume PUT Service', async () => {
      agent.put('https://petstore.swagger.io/v2/user/prueba').send(
        {
                "id": 0,
                "username": "prueba",
                "firstName": "stevens",
                "lastName": "monedero",
                "email": "sivi97a@gmail.com",
                "password": "password",
                "phone": "huawei",
                "userStatus": 0
        }
      ).then(callback => statusCode.OK)
      .catch(errorCallback => statusCode.BAD_REQUEST)
  });

  it('Consume DELETE Service', async () => {
    agent.delete('https://petstore.swagger.io/v2/user/prueba')
    .then(callback => statusCode.OK)
    .catch(errorCallback => statusCode.BAD_REQUEST)
});

});

