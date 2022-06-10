const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback('error found: ', null);
      return;
    }
    const breed = JSON.parse(body);
    if (!breed[0]) {
      callback(`Sorry! ${breedName} is not a cat breed.`, null);
      return;
    }
    if (response.statusCode === 200) {
      callback(null, breed[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
