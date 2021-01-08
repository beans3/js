// 자바스크립트 function은 object
function log(message){
    console.log(message);
}

log('hello');

// 2. Parameters
function changeName(obj){
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. default Message
function showMessage(message, from = 'un'){
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 4. Rest Parameters
function Allie(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
}

Allie('dream', 'coding', 'ellie'); // 배열 형태로 저장

// 5. local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';

function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}

printMessage();

// 6. Return value
// return undefined 생략
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }

    // long upgrade logic...
}

// First-class function
// hoist 가능
const print = function () {
    console.log('print');
}

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// callback

// arrow function

const simplePrint = () => console.log('simplePrint!');
console.log(simplePrint());
const add = (a, b) => a + b;
const simpleMyltiply = (a, b) => {
    return a + b;
}


// IIFE
(function hello() {
    console.log('IIFE');
})();
