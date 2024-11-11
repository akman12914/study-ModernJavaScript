const prompt = require("prompt-sync")();



let calculator = {
    read(){
        this.a = +prompt("첫 번째 수를 입력하세요: "); ///숫자 형변환
        this.b = +prompt("두 번째 수를 입력하세요: ");
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
}



calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
