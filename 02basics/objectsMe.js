"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = {
    name: "Ayush",
    age: 23,
    isActive: true
};
function getUser(_a) {
    var string = _a.name, number = _a.age;
    return {};
}
getUser({ name: "ayu", age: 24 });
// getUser({name : "ayu",age : 24, email : "ayu@s.com"}) // error as email is extra parameter
var userData = { name: "ayu", age: 24, email: "ayu@s.com" };
getUser(userData); // works fine w extra parameter // drawback of Js-Ts
function setUser(user) {
    return { name: "", email: "", isActive: true };
}
setUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "Ayu",
    email: "a@a",
    isActive: true
};
myUser.email = "a@r"; // change email
