const axios = require("axios");
const axios2 = require("axios2");

axios.get("https://swapi.dev/api/").then(({ data }) => {
  console.log("1", data);
});

axios2.get("https://swapi.dev/api/").then(({ data }) => {
  console.log("2", data);
});
