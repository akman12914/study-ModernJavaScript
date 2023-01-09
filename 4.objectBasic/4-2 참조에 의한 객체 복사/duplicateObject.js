let user = {
    name : "akman12914",
    age : 25,
    major : "computer",
}

let clone = {};

for(let key in user){
    clone[key] = user[key];
}

clone.major = "design";

console.log(user.major);
console.log(clone.major);