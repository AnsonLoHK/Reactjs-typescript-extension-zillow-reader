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

// ********************** 傳多個字串陣列當參數 此func無法正常運行
export const introduce = (salutation: string, ...names: string[]): string => {
  return `${salutation} ${names.join("")}`;
};

// ********************** obj 傳入 str 傳出
export const getName = (user: { first: string; last: string }): string => {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
};
