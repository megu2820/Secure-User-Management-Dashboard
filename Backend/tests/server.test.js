import * as chai from 'chai';
import supertest from 'supertest';
import app from '../server.js'

const { expect } = chai;
const request = supertest(app);

describe('Express Server Tests', () => {

    it('POST /login should return data from ReqRes API with valid credentials', async () => {
        const credentials = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka',
        };

        const response = await request.post('/login').send(credentials);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token'); // Assuming the response structure has a 'token' property
    });

    it('POST /login should handle invalid credentials and return a 500 status', async () => {
        const invalidCredentials = {
            email: 'invalid@example.com',
            password: 'invalidpassword',
        };

        const response = await request.post('/login').send(invalidCredentials);

        expect(response.status).to.equal(500);
        expect(response.body).to.have.property('error'); // Assuming the response structure has a 'token' property
    });

    it('POST /register should return data from ReqRes API with valid credentials', async () => {
        const credentials = {
            email: 'eve.holt@reqres.in',
            password: '123456789',
        };

        const response = await request.post('/register').send(credentials);
        // console.log(response);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token'); // Assuming the response structure has a 'token' property
    });


    it('POST /register should handle invalid credentials and return a 500 status', async () => {
        const invalidCredentials = {
            email: 'invalid@example.com',
            password: 'invalidpassword',
        };

        const response = await request.post('/register').send(invalidCredentials);

        expect(response.status).to.equal(500);
        expect(response.body).to.have.property('error'); // Assuming the response structure has a 'token' property
    });
})