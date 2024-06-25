var score = 33;
score = 44;
score = "55";
var ayush = {
    name: "Ayu",
    id: 2106
};
ayush = { username: "ayus", id: 2106 };
function getDbId(id) {
    // making some API calls
    console.log("DB id is : ".concat(id));
    // id.toUpperCase(); // problematic
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
getDbId(3);
getDbId("3");
// array
var data = [1, 2, 3];
var data2 = ["1", "2"];
var data3 = [1, 2, 3, "a"];
// keeping pi value constant
var pi = 3.14;
// pi = 3.145   // cannot change as pi:3.14 = 3.14
//--- useful case scenario of above pi ---
var seatAllotment;
seatAllotment = "middle";
// seatAllotment = "crewSeat";   // can't
