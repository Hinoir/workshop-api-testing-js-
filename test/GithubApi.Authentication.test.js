const agent = require('superagent');
const statusCode = require('http-status-codes');
const { expect } = require('chai');

const urlBase = 'https://api.github.com';
const githubUserName = 'Hinoir';
const repository = 'workshop-api-testing-js-';
const accesToken = process.env.ACCESS_TOKEN;

describe('Github Api Test', () => {
  describe('Authentication', () => {
    it('Via OAuth2 Tokens by Header', async () => {
      const response = await agent.get(`${urlBase}/repos/${githubUserName}/${repository}`)
        .auth('token', accesToken)
        .set('User-Agent', 'agent');

      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.description).equal('Este es un repositorio para el taller de automatizacion');
    });

    it('Via OAuth2 Tokens by parameter', () => agent.get(`${urlBase}/repos/${githubUserName}/${repository}`)
      .query(`access_token=${accesToken}`)
      .set('User-Agent', 'agent')
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.description).equal('Este es un repositorio para el taller de automatizacion');
      }));
  });
});
