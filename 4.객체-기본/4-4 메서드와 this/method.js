"use strict";

let user = {
  name: "John",
  age: 30,
  sayName(){
    console.log(this.name);
  },
  sayAge(){
    console.log(user.age);
  },
};

user.sayHi = function() {
  console.log("안녕하세요!");
};

function sayBye() {
  console.log("안녕히가세요!");
}

let admin = user;
user = null;

admin.sayBye = sayBye;
admin.sayHi(); // 안녕하세요!
admin.sayBye(); // 안녕히가세요!
admin.sayName();
admin.sayAge(); //ERROR - 다른 객체로 덮어썼기 때문에 user.age는 출력되지 않는다.

