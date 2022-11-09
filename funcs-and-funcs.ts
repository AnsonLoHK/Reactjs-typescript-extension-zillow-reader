// 傳string參數 跟 callback function
function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

interface Greeter {
  (message: string): void;
}

// callback function 中夾帶參數 定義 T1傳入param的型別 跟 回傳後的型別
interface CallbackOneParam<T1, T2 = void> {
  (message: T1): T2;
}

function greeter(message: string) {
  console.log(`${message}, how are you doing?`);
}

function sayHi(callback: CallbackOneParam<string>) {
  callback("hi");
}

sayHi(greeter);
