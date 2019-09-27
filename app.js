const request = require('request');

// Weather
const url =
  'https://api.darksky.net/forecast/a39b2fd254a7eab701964331d2d240c9/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(
      response.body.daily.data[0].summary +
        ' It is currently ' +
        response.body.currently.temperature +
        ' degrees out. There is a ' +
        response.body.currently.precipProbability +
        '% chance of rain.'
    );
  }
});

// Geocoding
const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamhubnlrIiwiYSI6ImNrMTJteTZsZjAwZHozZW4wMnVoNGpnaWkifQ.JRcpHE6B8o7bt7HMxxEtvw';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find that location. Try another search.');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
