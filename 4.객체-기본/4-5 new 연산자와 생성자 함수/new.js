function User(name){
    //this = {}; (빈 객체가 임시적으로 만들어짐) //new를 실행했을 때

    //새 프로퍼티를 this에 추가 
    this.name = name;

    //return this; (this가 암시적으로 반환됨) //new를 실행했을 때
    
}
    
let admin = new function() {
    this.name = "John";
    this.isAdmin = true;
  
  };

let user = new User("민");

console.log(user.name);
console.log(admin);