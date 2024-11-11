let user = {
    name: "mijin",
    age: 19,

    toString() {
        return this.name;
    }, //console.log 출력시 명시적으로 선언해주어야한다.

    valueOf() {
        return this.age;
    }
};

// alert(user); //[object Object]
console.log(user.toString()*2); // NaN
console.log(user.toString() + 200); //[object Object]200
console.log(user.toString());

//alert()는 toString() 메서드를 사용하여 객체를 문자열로 변환하는 반면 console.log()는 객체 속성의 미리보기를 콘솔에 표시한다.
//console.log() 메서드는 개체를 문자열로 변환하는 데 toString() 메서드를 사용하지 않습니다. 개체를 디버깅 및 분석에 유용한 형식으로 콘솔에 출력하도록 설계되었기 때문입니다. 
console.log(user + 500);
console.log(user.valueOf() === user);