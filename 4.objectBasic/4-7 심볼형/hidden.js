let id = Symbol("id");
let pw = Symbol.for("pw");
let tempPw = Symbol.for("pw");


let user = { // 서드파티 코드에서 가져온 객체
    name: "John",
    [id]: 123
  };
  

  
//   user[id] = "제 3 스크립트 id 값";

for (let key in user) console.log(key); // 심볼형 배제 

let clone = Object.assign({}, user);
  
console.log( user[id] ); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.
console.log( clone[id] );
console.log( pw === tempPw );