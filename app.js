const request = require('request');

const url =
  'https://api.darksky.net/forecast/a39b2fd254a7eab701964331d2d240c9/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
