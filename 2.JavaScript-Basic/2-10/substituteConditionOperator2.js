//'if..else'를 '?'로 교체하기


let message;
let login = '임원';

message =   (login == '직원')?'안녕하세요.': 
            (login == '임원')?'환영합니다.':
            (login == '' )?'로그인이 필요합니다.':'';




console.log(message);