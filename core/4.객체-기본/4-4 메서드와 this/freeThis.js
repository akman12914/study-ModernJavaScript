let athlete = { name: "상호" };
let actor = { name: "이유한" };

function sayHi(){
    console.log(this.name);
}

athlete.sayHi = sayHi;
actor.sayHi = sayHi;

athlete.sayHi();
actor.sayHi();

actor['sayHi']();