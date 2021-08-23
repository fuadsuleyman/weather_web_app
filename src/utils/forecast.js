const request = require('postman-request');

// https://weatherstack.com/documentation
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=f';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=s';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=';


const getForecast = ({latitude, longitude}, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=${latitude},${longitude}`;
    request({url,
             json: true},
            (error, {body}) => {
                if (error) {
                    callback('Unable to connect weather service!', undefined)
                    // console.log(chalk.error('Unable to connect weather service!'));
                } else if(body.error) {
                    callback(body.error.info, undefined)
                    // console.log(chalk.error('Unable to find location. Try another search!'));
                } else {
                    callback(undefined, {
                        temperature: body.current.temperature,
                        feelsLike: body.current.feelslike,
                        weather_descriptions: body.current.weather_descriptions[0]
                    })
                    // console.log(chalk.success(`${weather_descriptions} .It is currently ${temprature} degree out, it feels ${feelsLike} degree out.`));
                }

            })    
}


module.exports = getForecast;