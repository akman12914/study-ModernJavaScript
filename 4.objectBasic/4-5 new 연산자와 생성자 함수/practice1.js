function A(){
return A;
}

function B(){
return A;
}

let a = new A;
let b = new B;

console.log( a == b );