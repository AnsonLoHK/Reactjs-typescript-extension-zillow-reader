export default function addNumbers(a: number, b: number): number {
  return a + b;
}

// ********************** 複數個type種類 +　其中一個func調用另一個func

export const format = (title: string, param: string | number): string =>
  `結果: ${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log("其他", format(title, param));
};

// ********************** 運用Promise

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// ********************** 傳多個字串陣列當參數
