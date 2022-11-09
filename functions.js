"use strict";
exports.__esModule = true;
exports.getName =
  exports.introduce =
  exports.fetchData =
  exports.printFormat =
  exports.format =
    void 0;
function addNumbers(a, b) {
  return a + b;
}
exports["default"] = addNumbers;
// ********************** 複數個type種類 +　其中一個func調用另一個func
var format = function (title, param) {
  return "\u7D50\u679C: ".concat(title, " ").concat(param);
};
exports.format = format;
var printFormat = function (title, param) {
  console.log("其他", (0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// ********************** 運用Promise
var fetchData = function (url) {
  return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// ********************** 傳多個字串陣列當參數 此func無法正常運行
var introduce = function (salutation) {
  var names = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    names[_i - 1] = arguments[_i];
  }
  return "".concat(salutation, " ").concat(names.join(""));
};
exports.introduce = introduce;
// ********************** obj 傳入 str 傳出
var getName = function (user) {
  var _a, _b;
  return ""
    .concat(
      (_a = user === null || user === void 0 ? void 0 : user.first) !== null &&
        _a !== void 0
        ? _a
        : "FIRST",
      " "
    )
    .concat(
      (_b = user === null || user === void 0 ? void 0 : user.last) !== null &&
        _b !== void 0
        ? _b
        : "LAST"
    );
};
exports.getName = getName;
