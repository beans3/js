// 1. Literals and properties
const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4}
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
console.log(ellie.name);
console.log(ellie['name']);

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}

printValue(ellie, 'name');

// 3. Property value shorthand
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
}

// 5. in operator: check
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

console.clear();
// 6. for...in vs for...of
// for (key in obj)
for (key in ellie) {
    console.log(key);
}

// for
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. cloning
const user = { name: 'ellie', age: '20'};
const user2 = user;

user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//const user4 = {};
//Object.assign(user4, user);
const user4 = Object.assign({}, user);

console.log(user4);

// another example
// 뒤에 것이 앞에 있는 것을 덮어 씀
const f1 = { color: 'red' };
const f2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, f1, f2);
console.log(mixed.color);
console.log(mixed.size);