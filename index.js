import puppeteer from "puppeteer";

const getInfos = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto(
      "https://www.amazon.in/s?k=macbook+air+m1&crid=14KX0Z18GFI2&sprefix=macbook+air+m1%2Caps%2C310&ref=nb_sb_noss_1/",
      {
        waitUntil: "domcontentloaded",
      }
    );

    const Infos = await page.evaluate(() => {
      const wholeContainer = document.querySelectorAll(".s-list-col-right");

      return Array.from(wholeContainer).map((document) => {
        const title = document.querySelector(
          ".s-title-instructions-style"
        ).innerText;
        const price = document.querySelector(".a-price-whole").innerText;

        return { title, price };
      });
    });

    console.log(Infos);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};
getInfos();
