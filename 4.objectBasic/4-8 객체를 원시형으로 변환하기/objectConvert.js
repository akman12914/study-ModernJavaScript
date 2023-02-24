//to String

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

console.log(anotherObj); //string

//to Number

let num =  Number(obj); 

let n = +obj;
let greater = n > num; //당시 숫자형으로 변환

console.log(n); //숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN

console.log(num); //숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN
console.log(greater);