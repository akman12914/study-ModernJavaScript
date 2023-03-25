const prompt = require("prompt-sync")();

function readNumber() {
    let num;

    do {
        num = prompt("유효한 숫자값을 입력하세요 : ", 0);
    } while ( !isFinite(num) );

    if (num == null || num === '') return null;

    return +num;
}

console.log(`Read : ${readNumber()}`);

