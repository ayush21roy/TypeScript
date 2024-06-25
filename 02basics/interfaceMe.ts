interface User {
    readonly dbId: number,
    name: string,
    email: string,
    phone?: number,

    // isActive ?: () => string          // func that returns string
    getCoupon(memName: string, discount: number): number
}

let ayush: User = {
    dbId: 21, name: "ayush", email: "ayu@gmail.com",
    getCoupon(name: "ayush", discount: 10) {
        return 10;
    },
}


// reopening an interface

interface A {
    Aname: string,
    Aroll: number
}

let sahil: A = {
    Aname: "sahil",
    Aroll: 12
}

interface A {
    Aphone?: number
}

// inhertiance

interface B extends A {
    Bstd?: string
}

let roy: B = {
    Aname: "roy",
    Aroll: 10
}

export { }

// READ DIFF b/w TYPEs and INTERFACEs in Documentation.
// Crisp & Clear.