let checkFunction = prompt("변수를 복사해 다른 변수에 할당하는 것처럼 함수를 복사해 다른 변수에 할당하는 방식을 어떻게 지칭하나요?");


let confirm = (checkFunction == "함수표현식")?
function(){alert("함수표현식이 맞네요")}:function(){alert("틀렸습니다.")};

confirm();