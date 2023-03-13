"use strict"

console.log( 7.3e9 );  // 73억 (7,300,000,000)

let billion = 1e9;  // 10억, 1과 9개의 0
let ms = 1e-6;
let hexadecimal = 0xff; // 255의 16진수
let binary = 0b11111111;// 255의 2진수
let oct = 0o377; //255 8진수

//toString(base)
console.log( hexadecimal.toString(16) );
console.log( binary.toString(2) );
console.log( 123423432423432..toString(36) );

//어림수 구하기 

///1. 곱하기와 나누기
let num1 = 1.282943328;
console.log(Math.trunc( num1 * 100 ) / 100 );

//2.foFixed(n)
let num2 = 12.4352;
console.log( num2.toFixed(9) ); 
console.log( typeof num2.toFixed(9) );

//부정확한 계산
console.log( 99999999999999999 ); //정밀도 손실

//isNaN과 isFinite
console.log( isNaN(NaN) );
console.log( isNaN("str") );
console.log( NaN === NaN );
console.log( isFinite("15") );
console.log(  Object.is(NaN, NaN) ); //NaN을 대상으로 비교





