const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`Sorry! ${breedName} is not a cat breed.`);
    return;
  }
  if (response.statusCode === 200) {
    console.log(`description: ${data[0].description}`);
  }
});