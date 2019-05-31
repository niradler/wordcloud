const puppeteer = require("puppeteer");
const fs = require("fs");

const getHtmlTemplate = data => {
  let htmlString = fs.readFileSync("./template/index.html", "utf-8");
  htmlString = htmlString.replace("!!", JSON.stringify(data));

  return htmlString;
};

const createFromData = async data => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(getHtmlTemplate(data));
  await page.screenshot({ path: "wordcloud.png" });
  await browser.close();
};

module.exports = createFromData;
