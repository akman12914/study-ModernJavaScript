let id = Symbol("id");
let pw = Symbol.for("pw"); //전역심볼
let tempPw = Symbol.for("pw"); //전역심볼



let user = { // 서드파티 코드에서 가져온 객체
    name: "John",
    [id]: 123
  };
  

  
//   user[id] = "제 3 스크립트 id 값";

for (let key in user) console.log(key); // 심볼형 배제 

let clone = Object.assign({}, user);
  
console.log( user[id] ); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.
console.log( clone[id] );
console.log( pw === tempPw ); //전역심볼 = true
console.log( Symbol.keyFor(pw) ); //전역 심볼을 찾을 때 사용되는 메서드
console.log( Symbol.keyFor(tempPw) ); //전역 심볼을 찾을 때 사용되는 메서드
console.log( Symbol.keyFor(id) ); //전역 심볼을 찾을 때 사용되는 메서드, 전역심볼이 아니므로 undefined 출력
console.log( user[Symbol.hasInstance]);
console.log( id.description );
console.log(user);

//대부분 라이브러리, 내장 함수들은 사용하지 않는 메서드
console.log(Object.getOwnPropertySymbols(user)); //모든 심볼 확인 
console.log(Reflect.ownKeys(user)); // 심볼형 키 포함 모든 키 반환