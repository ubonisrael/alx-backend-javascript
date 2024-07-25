const { expect } = require("chai");
const Utils = require("./utils");
const sinon = require('sinon');
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", function () {
    let sandbox, spy;

    beforeEach(() => {
        if (!spy) {
            spy = sinon.spy(console)
        }
    })
    afterEach(() => {
        spy.log.resetHistory()
    })
  it("sendPaymentRequestToApi(100, 20) logs 120 to the console", function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.log.calledOnce).to.be.true;
    expect(spy.log.calledWith('The total is: 120')).to.be.true;

  });
  it("sendPaymentRequestToApi(10, 10) logs 20 to the console", function () {
    sendPaymentRequestToApi(10, 10);

    expect(spy.log.calledOnce).to.be.true;
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
  });
});
