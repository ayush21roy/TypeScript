function detectType(val: string | number) {
    if (typeof val === "string") {
        return val
    }

    return val + 3
}


function provideId(id: string | null) {
    if (!id) {
        console.log("id not found");
        return;
    }
    id.toLowerCase();
}


// --------------- DOCUMENTATION EXAMPLE -----------------------------
function printAll(strs: string | string[] | null) {

    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);

            }
        }
        else if (typeof strs === "string") {
            console.log(strs);

        }
    }
}

/*
      what we have not handled in above documentation example is the case of an 
      empty string ("").
*/


// --- "in" keyword ---

interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean
}

function isAdminAccount(person: User | Admin) {
    if ("isAdmin" in person) {
        return person.isAdmin;
    }
}

// --- "instanceof" keyword ---

function logValue(val: Date | string) {
    if (val instanceof Date) {
        console.log(val.toUTCString());
    }
    else {
        console.log(val.toUpperCase());

    }
}

// ------ TYPE PREDICATORS ------

type Fish = { swim: () => void }
type Bird = { bird: () => void }

function isFish(pet: Fish | Bird): pet is Fish {      // "is" keyword
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        console.log("Get Fish Food");
    }
    else {
        pet
        console.log("Get Bird Food");

    }
}

// Discriminated union

interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    width: number
    length: number
}

type shape = Square | Circle | Rectangle

function getShape(obj: shape) {
    if (obj.kind === "square") {
        console.log("square");
    }
    else {
        console.log("circle");
    }
}

function getArea(obj: shape) {
    switch (obj.kind) {
        case "circle":
            return Math.PI * obj.radius * obj.radius;
            break;

        case "square":
            return obj.side * obj.side;
            break;

        case "rectangle":
            return obj.length * obj.width

        default:
            const _defaultforshape: never = obj
            return _defaultforshape
    }
}