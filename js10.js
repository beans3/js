// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'whtie',
    size: null,
    birthDate: new Date(),
    symbole: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`)
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

// 2. JSON to Object