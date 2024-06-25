"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo("2")
addTwo(2);
function loginUser(name, email, age) {
    return "Hello " + { name: name };
}
loginUser("Ayush", "ayu@r.com", 22);
// arrow functions and DEFAULT parameter
var signUser = function (name, age, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "Hello " + { name: name };
};
signUser("abc", 24); // third parameter value is set DEFAULT is func declaration
// specify the return type of function too
function addThree(num) {
    return num + 3;
}
function logError(errMsg) {
    console.log(errMsg);
}
// The type - "never" (mainly used to throw exception or terminate)
function throwError(errMsg) {
    throw new Error(errMsg);
}
