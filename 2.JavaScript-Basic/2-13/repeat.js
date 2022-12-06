//for 반복문을 이용하여 짝수 출력하기
for(let i=2; i<=10; i++){
    if(i%2)continue;

    console.log(i);
}

//for 반복문을 while 반복문으로 바꾸기 
let i = 0;

while(i<3){
    console.log(`number ${i}!`);
    i++;
}