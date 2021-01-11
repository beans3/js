'use strict';
// Class declarations
class Person {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setter
class User {
    constructor(name1, name2, age) {
        this.name1 = name1;
        this.name2 = name2;
        this.age = age; //get, set 호출
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Kim', 'Sohee', '-1');
console.log(user1.age);