// 1. 문자열 합치기
console.log('my'+'cat');

// 2. 숫자 계산
console.log(2 ** 3);

// 3. 증감 연산자

// 4. 연산자 생략

// 5. 비교

// 6. 논리 연산자
// 복잡한 연산은 뒤로 빼기
// !(not)

// 7. 값 비교
const f = '5';
const f2 = 5;

console.log(f==f2);
console.log(f===f2);

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. if

// 9. Ternary operator
// condition ? value1 : value2

// 10. switch

// 11. Loop
let i = 3;
while(i>0) {
    console.log(`while: ${i}`);
    i--;
}

for(let i = 0; i < 10; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

for(let i = 0; i < 10; i++){
    if(i > 8){
        break;
    }
    console.log(i);
}



