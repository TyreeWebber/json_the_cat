const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('gives a description of the breed if the breed is real.', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('gives an error if the breed of cat is not real.', (done) => {
    fetchBreedDescription('Stinky Kendra', (err, desc) => {
      assert.equal(err, `The breed you searched for does not exist.`);
      assert.equal(desc, null);
      done();
    });
  });

});