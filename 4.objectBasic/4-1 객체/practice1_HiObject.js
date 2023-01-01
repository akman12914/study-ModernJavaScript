let user = {};
user = {
    name : "John",
    surname : "Smith",
};
console.log(user.name);
user.name = "Pete";
console.log(user.name);
delete user.name;
console.log(user.name);