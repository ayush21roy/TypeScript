let user : (number | boolean | string) [] = [1, "ayush", true] // doesn't matter what is the order of values

let user1 : [number, boolean, string]   // TUPLE
// user1 = [1, "ayush", true]               // order matters
user1 = [1, true, "ayush"]


let rgb : [number, number, number]  // TUPLE
rgb = [255, 100, 567]

type myUser = [number, string]     // TYPE
const userAyu : myUser = [621, "ayu@gmail.com"];
userAyu[1] = "sa@gmail.com";   // modification in const  --------- // drawback of tuple
userAyu.push(1) // when TUPLE is fixed, why push,pop etc is allowed  ---- // drawback of tuple

export {}
