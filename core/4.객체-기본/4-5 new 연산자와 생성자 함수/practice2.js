const prompt = require("prompt-sync")();

function Calculator(){
    let x;
    let y;
   this.read = function(){
    x = +prompt("첫 번째 숫자를 입력하세요: ");
    y = +prompt("두 번째 숫자를 저장하세요: ");
   }
   this.sum = function(){
    return x+y;
   }
   this.mul = function(){
    return x*y;
   }
   }
let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );