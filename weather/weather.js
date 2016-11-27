const appkey = ''
const requst = require('request');

var getWeather = (lat,lng, callback) => {
    requst({
        url: `https://api.darksky.net/forecast/${appkey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            });
        } else {
          callback('unable to connect to forecast.io server');
        }

    });
}

module.exports.getWeather = getWeather;
