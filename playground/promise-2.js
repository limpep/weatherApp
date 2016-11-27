const requst = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        requst({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google server');
            } else if (body.status === 'ZERO_RESULTS') {
                reject(`Unable to find address: ${address}`);
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};



geocodeAddress('000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
