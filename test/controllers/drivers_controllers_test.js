const assert = require('assert');
const request = require('supertest');
const Driver = require('../../models/driver');
const app = require('../../app');

describe('Drivers controllers', () => {
    it('Post to /api/drivers creates a new driver', done => {
        Driver.count().then(count => {
            request(app)
                .post('/api/drivers')
                .send({
                    email: 'test@test.com'
                })
                .end(() => {
                })
            Driver.count().then(newCount => {
                assert(count + 1 === newCount);
                done()
            })
        })
    })
})