// const cheerio = require("cheerio");
// const axios = require("axios");

// axios
//   .get("https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget")
//   .then((item) => {
//     let $ = cheerio.load(item.data);
//     let textData = $("#browser_compatibility").text();
//     console.log("getting data is : ", textData);
//   })
//   .catch((error) => {
//     console.log("error is : ", error);
//   });

// work with new puppeteer browser

const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/");
  //   await page.setViewport({ width: 1480, height: 1080 });
  //   await page.screenshot({ path: "page.jpg", fullPage: true });

  //   await page.pdf({ path: "helloworld.pdf", format: "A4" });

  //   const html = await page.content();
  //   console.log("html is : ", html);

  const title = await page.evaluate(() => document.title);
  console.log("title is : ", title);
  await browser.close();
})();
