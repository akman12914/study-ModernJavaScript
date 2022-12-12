let age =  15;

//'?'를 사용하여 함수 재작성
function checkAge(age){
    let checkAge = (age>18)?true : '보호자의 동의를 받으셨나요?';
    return checkAge;
}


//'||'를 사용하여 함수 재작성
function checkAge(age){
    let checkAge = (age>18)||'보호자의 동의를 받으셨나요?';
    return checkAge;
}

console.log(checkAge(age));