const { expect } = require("chai");
const Utils = require("./utils");
const sinon = require('sinon');
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
  it("sendPaymentRequestToApi(100, 20) logs", function () {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(`The total is: ${120}`)).to.be.true;
    
    spy.restore();
  });
  it("sendPaymentRequestToApi(100, 20) should be equal to Utils.calculateNumber('SUM', 100, 20)", function () {
    const spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20)

    expect(spy.calculateNumber.calledOnce).to.be.true;
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    spy.calculateNumber.restore()
  });
});
