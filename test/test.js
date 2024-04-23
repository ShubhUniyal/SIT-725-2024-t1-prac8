const request = require("request");

// Importing your server file to ensure it starts the server for testing
require('../index.js');

// Define the base URL for your API endpoints
const baseUrl = 'http://localhost:3000';

describe('API Tests', function () {
    // Test case for retrieving all cards
    describe('GET /api/cards', function () {
        it('should return status code 200 and an array of cards', function (done) {
            import('chai').then(chai => {
                const expect = chai.expect;
                request.get(`${baseUrl}/api/cards`, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    expect(JSON.parse(body).data).to.be.an('array');
                    done();
                });
            }).catch(err => {
                console.error('Error importing Chai:', err);
                done(err);
            });
        });
    });
});

describe('API Tests', function () {
    // Test case for adding a new card
    describe('POST /api/addCard', function () {
        it('should return status code 200 and success message', function (done) {
            import('chai').then(chai => {
                const expect = chai.expect;
                const newCard = {
                    name: 'Test Card',
                    desc: 'Test Desc',
                   
                };
                request.post({
                    url: `${baseUrl}/api/addCard`,
                    json: newCard
                }, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    expect(body.message).to.equal('Card added successfully');
                    done();
                });
            }).catch(err => {
                console.error('Error importing Chai:', err);
                done(err);
            });
        });
    });
})