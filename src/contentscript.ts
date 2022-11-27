// 爬的資料在這邊
// https://www.zillow.com/homedetails/13335-Loumont-St-Whittier-CA-90601/21417950_zpid/

const getPriceText = () => {
  const tag = document.querySelector(
    "span.hdp__sc-ym74hh-0 span.xGfxD span"
  ) as HTMLSpanElement;
  return tag?.innerText ?? "No data";
};

console.log("zillow 可以", getPriceText());

// ---------------

// 蝦皮位置
// https://shopee.tw/%E7%8F%BE%E8%B2%A824H%E5%87%BA%E8%B2%A8-gaole-%E5%AF%B6%E5%8F%AF%E5%A4%A2-%E4%BA%94%E6%98%9F%E5%8D%A1-%E5%82%B3%E8%AA%AA%E7%AC%AC%E4%B8%89%E5%BD%88-%E7%AC%AC%E4%B8%83%E5%BD%88-%E5%88%97%E7%A9%BA%E5%BA%A7-%E5%99%B4%E7%81%AB%E9%BE%8D-%E5%9F%BA%E6%A0%BC%E7%88%BE%E5%BE%B7-%E9%AB%94%E9%A9%97%E5%8D%A1-i.35864159.14294795470?sp_atk=304507de-3368-4b18-b2d2-487d296bbe27&xptdk=304507de-3368-4b18-b2d2-487d296bbe27
const shopeeGetPriceTexts = () => {
  const price = document.querySelector(
    "#main div.Jjq1lh div.items-center > div.XfTb20 > div.items-center > div.X0xUb5"
  ) as HTMLDivElement;
  return price?.innerText ?? "No data";
};

console.log("蝦皮失敗", shopeeGetPriceTexts());

// TODO!: 價格爬不到 不確定是不是 測試過 HTMLSpanElement 跟
//     "#main div.Jjq1lh div.items-center > div.XfTb20 > div.items-center > div.X0xUb5"

const shopeeGetTitleTexts = () => {
  const title = document.querySelector(
    "#main div.eJx7oo div.YPqix5 span"
  ) as HTMLSpanElement;
  return title?.innerText ?? "No data";
};

console.log("蝦皮標題獲取失敗", shopeeGetTitleTexts());

//------------

const shopeeGetprice = () => {
  const title = document.querySelector(
    "div.vioxXd span.ZEgDH9"
  ) as HTMLSpanElement;
  return title?.innerText ?? "No data";
};

console.log("蝦皮價格!", shopeeGetprice());
