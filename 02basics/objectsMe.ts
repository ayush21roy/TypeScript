let users = {
    name: "Ayush",
    age: 23,
    isActive: true
}

function getUser({ name: string, age: number }):{} {
    return {}
}

getUser({ name: "ayu", age: 24 })

// getUser({name : "ayu",age : 24, email : "ayu@s.com"}) // error as email is extra parameter

let userData = { name: "ayu", age: 24, email: "ayu@s.com" }
getUser(userData)  // works fine w extra parameter // drawback of Js-Ts

// --------------------------- Type Alias ------------------------------------

type User = {
    name : string;
    email : string;
    isActive : boolean
}

function setUser (user: User) : User {
    return {name : "", email : "", isActive : true}
}

setUser({name : "", email : "", isActive : true})


// READONLY and optional

type User1 = {
   readonly _id : string
    name : string
    email : string
    isActive : boolean
    credcardDetails ?: number
}

let myUser: User1 =  {
    _id : "1234",
    name : "Ayu",
    email : "a@a",
    isActive : true
}

myUser.email = "a@r" // change email
// myUser._id = "change"  // cannot change READONLY

//----------- mix n match ------------

type cardNumber = {
    cardnumber : string;
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {  // extra 3rd type that has cvv number
    cvv : number
} 


export {}