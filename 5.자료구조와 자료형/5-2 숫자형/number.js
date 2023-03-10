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
let num = 1.282943328;
console.log(Math.trunc( num * 100 ) / 100 );








