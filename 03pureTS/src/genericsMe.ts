const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityGeneric<Type>(val: Type): Type {
    return val;
}

identityGeneric<"3">("3");

function identityGenericShort<T>(val: T): T {
    return val;
}

interface Bottle {
    sizee: string
    type: number
}

identityGenericShort<Bottle>({ sizee: "bigSize", type: 3 });


function searchProduct<Type,>(products: Type[]): Type {
    // do some database operation
    let myIndex = 3
    return products[myIndex]
}

const searchMoreProduct = <T,>(products: T[]): T => {           // arrow function
    // do some database operation
    let myIndex = 4
    return products[myIndex]
}


// generic functions

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "4")


interface Database {
    userName: string
    userId: string
    dbNumber: number
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object {
    return {

    }
}

anotherFunc(3, { userName: "a", userId: "24", dbNumber: 3 });


// generic classes

interface Quiz {
    name: string
    quizId: number
    quizContent: string
}

interface Course {
    name: string
    author: string
    duration: number
}

// -- generic class to handle commonality of quiz & course --

class Sellable <T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}