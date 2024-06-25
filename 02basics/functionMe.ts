function addTwo(num: number) {
    return num + 2
}

// addTwo("2")
addTwo(2)

function loginUser(name: string, email: string, age: number) {
    return "Hello "+{name};
}

loginUser("Ayush","ayu@r.com", 22);

// arrow functions and DEFAULT parameter


let signUser = (name: string, age: number, isPaid: boolean = false) => {
    return "Hello "+{name};
}

signUser("abc", 24);     // third parameter value is set DEFAULT is func declaration

// specify the return type of function too

function addThree (num : number) : number {
    return num+3;
}

function logError (errMsg : string) : void {
    console.log(errMsg);   
}

// The type - "never" (mainly used to throw exception or terminate)

// ------ CHECK DOCUMENTATION -----

function throwError (errMsg : string) : never {
    throw new Error(errMsg);
}



export {}