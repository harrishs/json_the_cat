const request = require("request");

let breedN = process.argv[2];
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedN;
request(url, (error, status, body) => {
  if (error) {
    console.log("Failed request: ", error);
  } else {
    const data = JSON.parse(body);
    let breed = data[0];
    if (breed) {
      console.log(breed.description);
    } else {
      console.log("Could not find breed");
    }
  }
});
