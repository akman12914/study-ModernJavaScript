# Date()생성자

Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 플랫폼에 종속되지 않는 형태로 생성합니다.

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // 월은 0부터 시작
let birthday = new Date(1995, 11, 17, 3, 24, 0);
```

## 인스턴스 메서드

### Date.prototype.getDay()

getDay() 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환합니다. 0은 일요일을 나타냅니다.

```js
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2
```
