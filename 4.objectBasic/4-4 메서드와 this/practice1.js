/* eslint-disable no-extra-semi */
function makeUser(){
    return{
        name: "John",
        // ref: this // this 값은 런타임에 결정되며, 함수가 호출되기 전까지 this엔 값이 할당되지 않는다.
        //           // 따라서, name = undefined
        ref(){
            return this; //return으로 값을 돌려줘야 호출로 사용할 수 있다.
        }
    };
};

let user = makeUser();

console.log(user.ref().name);

