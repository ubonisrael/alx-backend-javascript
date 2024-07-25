function getPaymentTokenFromAPI(success) {
    if (success && typeof success === 'boolean') {
        return new Promise((resolve, reject) => {
            resolve({data: 'Successful response from the API' })
        });
    }
}

module.exports = getPaymentTokenFromAPI;
