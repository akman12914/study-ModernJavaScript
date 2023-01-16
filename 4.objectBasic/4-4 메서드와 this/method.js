let user = {
    name: "John",
    age: 30,
    sayName(){
      console.log(user.name);
    }
  };
  
  user.sayHi = function() {
    console.log("안녕하세요!");
  };
  
  function sayBye() {
    console.log("안녕히가세요!");
  }

  user.sayBye = sayBye;
  user.sayHi(); // 안녕하세요!
  user.sayBye(); // 안녕히가세요!
  user.sayName();