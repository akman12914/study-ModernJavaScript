/**
 * x를 n번 곱한 수를 반환함
 *
 * @param {number} x 거듭제곱할 숫자
 * @param {number} n 곱할 횟수, 반드시 자연수여야 함
 * @return {number} x의 n 거듭제곱을 반환함
 */

let number;

 function pow(x, n) {
    number = x**n;
    return number;
  }

console.log(pow(2,3));