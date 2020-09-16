//jshint esversion:8
const request = require('supertest');
const app = require('../app');


describe('Get Endpoint', () => {
    it('should show welcome message', async () => {
      const res = await request(app)
        .get('/api');
      expect(res.statusCode).toEqual(200);
      expect('Welcome to African Literature api. An api that provides data of literature in Africa.');
    });
  });

