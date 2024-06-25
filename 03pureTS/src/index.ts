// class User {
//     public name: string
//     private age: number
//  private readonly city: string = "patna"

//     constructor(name: string, age: number) {
//         this.name = name,
//         this.age = age
//     }
// }

class User {

    protected _coursecount = 1
    readonly city: string = "patna"

    constructor(public name: string, public age: number) {

    }

    // we can have private methods too
    // private delToken() : string {
    //     return "Token Deleted"
    // }

    get getAppleEmail(): string {
        return `apple${this.name}@gmail.com`
    }

    get courseCount(): number {
        return this._coursecount
    }

    set courseCount(count) {
        if (count <= 1) {
            throw new Error("course count to be >= 1")
        }
        this._coursecount = count
    }
}

// inherits

class subUser extends User {
    isFamily: boolean = true

    changeCourseContent() {
        this._coursecount = 4;
    }
}

const ayush = new User("ayush", 23)
// ayush.city    // cannot even access as its private
// ayush.city = ""  // cannot assign to readonly

// ayush.delToken()    // cannot access a private method outside class

