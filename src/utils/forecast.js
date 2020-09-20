const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e7ec68644774247ab659c8a49695973&query=' + latitude + ',' + longitude + '&units=f' + '&lim=1'
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather server!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location, try another search!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature + ' degrees out.' + ' Windspeed is ' + response.body.current.wind_speed + 'mph.')
        }
    })
}

module.exports = forecast