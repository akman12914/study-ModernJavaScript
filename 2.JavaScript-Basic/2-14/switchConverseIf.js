//기존 코드
// switch (browser) {
//   case 'Edge':
//     alert( "Edge를 사용하고 계시네요!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//     break;

//   default:
//     alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
// }

//변환

let browser = 'Firefox';

if(browser == 'Edge'){
  console.log("Edge를 사용하고 계시네요!");
}
else if(browser == 'Chrome'
||browser=='Firefox'
||browser=='Safari'
||browser=='Opera'){
  console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
}
else{
  console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
}