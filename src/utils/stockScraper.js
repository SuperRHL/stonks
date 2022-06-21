// const puppeteer = require('puppeteer');

// async function start(symbol) {
//     const url = `https://uk.finance.yahoo.com/quote/${symbol}?p=${symbol}`;
//     const browser = await puppeteer.launch({
//         headless: false
//     });
//     const page = await browser.newPage();
//     await page.goto(url);
//     var accept = ("#consent-page > div > div > div > form > div.wizard-body > div.actions.couple > button");
//     await page.click(accept)
//     for (var k = 1; k < 2000; k++) {
//         var element = await page.waitForXPath("/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/div[6]/div/div/div/div[3]/div[1]/div/fin-streamer[3]/span")
//         var price = await page.evaluate(element => element.textContent, element);
//         console.log(price);
//         await page.waitForTimeout(1000);
//     } browser.close();
// }

// export default start