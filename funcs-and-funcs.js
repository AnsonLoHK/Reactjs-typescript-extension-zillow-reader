"use strict";
exports.__esModule = true;
exports.arrayMutate = void 0;
// 傳string參數 跟 callback function
function printToFile(text, callback) {
    console.log(text);
    callback();
}
function greeter(message) {
    console.log("".concat(message, ", how are you doing?"));
}
function sayHi(callback) {
    callback("hi");
}
sayHi(greeter);
// numbers 陣列中存放數字 , mutate is callback func and pass number as parameter then teturn a number
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
//  印出來
console.log(arrayMutate([1, 2, 3], function (v) { return v * 10; }));
