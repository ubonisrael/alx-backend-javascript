const { expect } = require("chai");
const request = require("request");

describe("GET /", function () {
  it('should return "Welcome to the payment system"', function (done) {
    request("http://localhost:7865/", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("GET /cart/:id", function () {
  it('should return "Payment methods for cart id"', function (done) {
    request("http://localhost:7865/cart/4", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 4");
      done();
    });
  });
  it("should return 404 error", function (done) {
    request("http://localhost:7865/cart/hello", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('POST /login { "userName": "Betty" }', function () {
  it('should return "Welcome Berry"', function (done) {
    request.post(
      {
        url: "http://localhost:7865/login",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userName: "Berry" }),
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).equal('Welcome Berry');
        done();
      }
    );
  });
});

describe('GET /available_payments', function () {
  it('should return {"payment_methods":{"credit_cards":true,"paypal":false}}', function (done) {
    request.get(
      {
        url: "http://localhost:7865/available_payments",
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal(JSON.parse('{"payment_methods":{"credit_cards":true,"paypal":false}}'));
        done();
      }
    );
  });
});
