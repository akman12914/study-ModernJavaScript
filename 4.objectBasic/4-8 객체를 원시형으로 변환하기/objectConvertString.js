let obj = {
    key : "키",
    value : "값"
};
console.log(obj);

let anotherObj = {
    key : "키",
    value : "값"
}

anotherObj[obj] = 123; //객체를 프로퍼티로 사용

console.log(anotherObj);