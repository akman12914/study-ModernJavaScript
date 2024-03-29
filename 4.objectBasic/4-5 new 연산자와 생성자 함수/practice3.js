const prompt = require("prompt-sync")();

function Accumulator(startingValue){
    this.value = startingValue;
    
    this.read = function(){
        let inputValue = +prompt("숫자를 입력하세요: ");
        this.value = this.value + inputValue;
    }
} 

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

console.log(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
