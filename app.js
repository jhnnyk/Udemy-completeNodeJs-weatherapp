const request = require('request');

const url =
  'https://api.darksky.net/forecast/a39b2fd254a7eab701964331d2d240c9/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.currently);
  console.log(
    response.body.daily.data[0].summary +
      ' It is currently ' +
      response.body.currently.temperature +
      ' degrees out. There is a ' +
      response.body.currently.precipProbability +
      '% chance of rain.'
  );
});
