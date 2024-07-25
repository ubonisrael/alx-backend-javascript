const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("getPaymentTokenFromAPI(true) results to {data: 'Successful response from the API' }", function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
        expect(data).to.deep.equal({data: 'Successful response from the API' });
        done();
    })

  });
});
