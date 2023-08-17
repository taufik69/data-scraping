const cheerio = require("cheerio");
const axios = require("axios");

axios
  .get("https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget")
  .then((item) => {
    let $ = cheerio.load(item.data);
    let textData = $(".page-footer").text();
    console.log("getting data is : ", textData.slice(0, 50));
  })
  .catch((error) => {
    console.log("error is : ", error);
  });
