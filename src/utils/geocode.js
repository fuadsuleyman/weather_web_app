const request = require('postman-request');

// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12dsds.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12men.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Baku.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'


const getGeoCode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect geo code service!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place_name: body.features[0].place_name    
            })
        }
    })
}

module.exports = getGeoCode;