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

### Date.prototype.getTime()

표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환

이 메서드를 사용하면 다른 Date 객체에 날짜와 시간을 지정할 수 있습니다. 이 메소드는 기능적으로 valueOf() 메소드와 동일합니다.


```js
dateObj.getTime();
```

#### Return value
1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초 1/1000)을 나타내는 숫자

#### Examples
날짜 복사에 getTime () 사용

동일한 시간 값으로 날짜 객체를 생성

```js
// 월은 0부터 시작하여 생일은 1995 년 1 월 10 일이됩니다.
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());