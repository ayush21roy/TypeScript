"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = [1, "ayush", true]; // doesn't matter what is the order of values
var user1; // TUPLE
// user1 = [1, "ayush", true]               // order matters
user1 = [1, true, "ayush"];
var rgb; // TUPLE
rgb = [255, 100, 567];
var userAyu = [621, "ayu@gmail.com"];
userAyu[1] = "sa@gmail.com"; // modification in const  --------- // drawback of tuple
userAyu.push(1); // when TUPLE is fixed, why push,pop etc is allowed  ---- // drawback of tuple
