// Object = 토끼, 당근
// 자료구조 = Object들의 묵음, 보통 동일한 타입들끼리 묶을 수 있다
// Javascript는 다양한 타입을 묶을 수 있음 (권장하지 않음)
// 검색, 삽입, 정렬, 삭제
'user strict';
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const f = ['apple','banana'];
console.log(f);
console.log(f.length);
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
console.log(f[f.length - 1]);

// 3. Looping over an array
for(key in f) {
    console.log(f[key]);
}

for(let ff of f) {
    console.log(ff);
}

f.forEach((f, index, /*array*/) => console.log(f, index, /*array*/));

// 4. add, delete, copy
// push
f.push('strawberry', 'peach');
console.log(f);

// pop
f.pop();
console.log(f);

// unshift
f.unshift('a', 'b');
console.log(f);

// shift
f.shift();
console.log(f);

// shift, unshitf are slower than pop, push
// remove an item by index position
// f.splice(1); // 1부터 모두 지움
f.splice(1, 1);
console.log(f);

f.splice(1, 1, 'a', 'c');
console.log(f);

// combine two arrays
const f2 = ['d', 'e'];
const f3 = f.concat(f2);
console.log(f3);

// 5. Searching
// find index
console.clear();
console.log(f);
console.log(f.indexOf('b'));
console.log(f.includes('a'));
console.log(f.includes('r'));
console.log(f.indexOf('r'));

// lastIndexOf
console.clear();
f.push('strawberry');
console.log(f);
console.log(f.indexOf('strawberry'));
console.log(f.lastIndexOf('strawberry'));
