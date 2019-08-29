const request = require("request");

const fetchBreedDescription = function(breedN, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedN;
  request(url, (error, status, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      let breed = data[0];
      if (!breed) {
        callback("Breed does not exist", null);
      } else {
        callback(null, breed.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
