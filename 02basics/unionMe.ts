let score : number | string = 33
 
score = 44
score = "55"

type User = {
    name : string;
    id :  number
}

type Admin = {
    username : string;
    id : number
}

let ayush : User | Admin = {
    name : "Ayu",
    id : 2106
}

ayush = {username: "ayus", id : 2106}


function getDbId(id: number | string){
    // making some API calls
    console.log(`DB id is : ${id}`);  
    
    // id.toUpperCase(); // problematic

    if(typeof id === "string") {
        id.toUpperCase();
    }
}

getDbId(3)
getDbId("3") 


// array

const data : number[] = [1,2,3]
const data2 : string[] = ["1","2"]
const data3 : (string|number)[] = [1,2,3,"a"]

// keeping pi value constant
let pi:3.14 = 3.14
// pi = 3.145   // cannot change as pi:3.14 = 3.14

//--- useful case scenario of above pi ---

let seatAllotment : "aisle" | "middle" | "window";

seatAllotment = "middle";
// seatAllotment = "crewSeat";   // can't


export {}