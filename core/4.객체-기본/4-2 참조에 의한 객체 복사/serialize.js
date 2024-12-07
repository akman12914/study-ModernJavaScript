
let Person = {
    name : "하준",
    bestFriend : "신일"
}

let serializedBestFriend = JSON.stringify(Person);

    // 오류케이스 
    // ex
    // let serializedBestFrined = Person ; 
    // JSON.stringify(serializedBestFriend);

    // Person의 메모리주소를 가리키는 변수가 하나 더 생기고, Person객체의 키값들을 직렬화하지는 못한다. 
    // 프로퍼티를 복사하는 것만으론 객체를 복제할 수 없기 때문이다.

console.log(serializedBestFriend);
console.log(typeof serializedBestFriend);

console.log("---------------------------");

let deserializedBestFriend = JSON.parse(serializedBestFriend);

console.log(deserializedBestFriend);
console.log(typeof deserializedBestFriend);
