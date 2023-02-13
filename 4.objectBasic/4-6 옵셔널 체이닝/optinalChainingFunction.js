"use strict"

let user1 = {
    printHi(){
        console.log("안뇽?");
    }
};

let user2 = {};

console.log(user1.printHi?.());
console.log(user2.printHi?.());