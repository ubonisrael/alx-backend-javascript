const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    amount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${amount}`);
    return amount
}

module.exports = sendPaymentRequestToApi;
