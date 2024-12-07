function User(name){
    if(!new.target){
        return new User(name);
    }

    this.name = name;
    this.job = "학생";
}

let bora = User("보라"); 
let yumi = new User("유미");

console.log(bora);
console.log(yumi);