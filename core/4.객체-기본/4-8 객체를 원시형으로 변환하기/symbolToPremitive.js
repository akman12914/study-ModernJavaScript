let user = {
    name: "min",
    age: 19,

    [Symbol.toPrimitive](hint){
        console.log(`hint : ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.age;
    }
}
    
console.log(user);
console.log(+user);
console.log(user + 500);