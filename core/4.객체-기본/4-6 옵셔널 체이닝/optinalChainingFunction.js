"use strict"

let user1 = {
    printHi(){
        console.log("안뇽?");
    }
};

let user2 = {};

let key = "printHi";

user1?.[key]();//안뇽?
user2?.[key]();//에러발생