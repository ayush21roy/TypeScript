"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityGeneric(val) {
    return val;
}
identityGeneric("3");
function identityGenericShort(val) {
    return val;
}
identityGenericShort({ sizee: "bigSize", type: 3 });
function searchProduct(products) {
    // do some database operation
    let myIndex = 3;
    return products[myIndex];
}
const searchMoreProduct = (products) => {
    // do some database operation
    let myIndex = 4;
    return products[myIndex];
};
// generic functions
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, "4");
function anotherFunc(valOne, valTwo) {
    return {};
}
anotherFunc(3, { userName: "a", userId: "24", dbNumber: 3 });
// -- generic class to handle commonality of quiz & course --
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
