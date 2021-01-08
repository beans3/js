// 2. Variable 메모리에 바로 저장
let aa = 'hi';

// 3. const = 변경 안되는 변수
// 보안, 쓰레드, 실수 줄임
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
const count = 17; //Integer
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number';
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// big Int Chrome, firefox만 지원
const bigInt = 123456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// ubdefined
let x;
let y = undefined;

// symbol, create unique identifiers for objects
// 주어진 값에 상관없이 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2);

const gSymbole1 = Symbol.for('id');
const gSymbole2 = Symbol.for('id');

console.log(gSymbole1==gSymbole2);
//console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // 오류 발생,  string으로 변환해줄 것
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 오류 발생,  string으로 변환해줄 것

// object, real-life object, data structure // 레퍼런스에 저장
const ellie = { name: 'ellie', age: 20 }

// 5. dynamic typing
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
text = 1;
console.log(text.charAt(0)); // 오류