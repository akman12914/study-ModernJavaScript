let user = {};

// console.log(user.address.street); 오류발생 
console.log(user && user.address && user.address.street);
console.log( user?.address?.street ); //옵셔널 체이닝
console.log( user?.address.street ); //두번째 점 연산자에서 에러 발생

// let html = document.querySelector('.my-element').innerHTML;