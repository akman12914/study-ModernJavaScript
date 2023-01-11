let Person1 = {
    name : "하준",
    bestFriend : "신일"
}

let Person2 = {
    name : "신일",
    bestFriend : "하준"
}

let serializedBestFriend = [Person1.bestFriend, Person2.bestFriend];

JSON.stringify(serializedBestFriend);

console.log(serializedBestFriend);
