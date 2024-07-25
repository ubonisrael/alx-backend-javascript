const { expect } = require("chai");
const Utils = require("./utils");
const sinon = require('sinon');
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  it("sendPaymentRequestToApi(100, 20) logs 10 to the console", function () {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils).calculateNumber.returns(10)
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(`The total is: ${10}`)).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    
    spy.restore();
    stub.restore();
  });
});
