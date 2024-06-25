"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val;
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("id not found");
        return;
    }
    id.toLowerCase();
}
// --------------- DOCUMENTATION EXAMPLE -----------------------------
function printAll(strs) {
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
function isAdminAccount(person) {
    if ("isAdmin" in person) {
        return person.isAdmin;
    }
}
// --- "instanceof" keyword ---
function logValue(val) {
    if (val instanceof Date) {
        console.log(val.toUTCString());
    }
    else {
        console.log(val.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        console.log("Get Fish Food");
    }
    else {
        pet;
        console.log("Get Bird Food");
    }
}
function getShape(obj) {
    if (obj.kind === "square") {
        console.log("square");
    }
    else {
        console.log("circle");
    }
}
function getArea(obj) {
    switch (obj.kind) {
        case "circle":
            return Math.PI * obj.radius * obj.radius;
            break;
        case "square":
            return obj.side * obj.side;
            break;
        case "rectangle":
            return obj.length * obj.width;
        default:
            const _defaultforshape = obj;
            return _defaultforshape;
    }
}
