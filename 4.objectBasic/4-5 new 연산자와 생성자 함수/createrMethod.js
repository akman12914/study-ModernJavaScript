function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "제 이름은 " + this.name + "입니다." );
    };
  }
  
  let bora = new User("이보라");
  
  bora.sayHi(); // 제 이름은 이보라입니다.
  
  /*
  bora = {
     name: "이보라",
     sayHi: function() { ... }
  }
  */