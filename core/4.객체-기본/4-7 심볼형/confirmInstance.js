class Animal {
    constructor() {}
  }
  
const cat = new Animal();
  
console.log(Animal[Symbol.hasInstance](cat)); // true