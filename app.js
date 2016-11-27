const requst = require('request');

requst({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=14%20pedro%20street,london',
    json: true
}, (error, response, body) => {
    console.log(body);
});
