function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
let family = marry({
name: "John"
}, {
name: "Ann"
});

console.log(family);


family = null; //도달할 수 없는 섬

console.log("------------------------------------------------------");
console.log(family.father);