const { expect } = require("chai");
const request = require('request')

describe("GET /", function () {
  it("should return \"Welcome to the payment system\"", function (done) {
    request('http://localhost:7865/', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
    })
  });
});
