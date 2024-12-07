function Habit() {
    this.name = "일상";

    return { name: "농구"}; // this가 아닌 새 객체 반환
}

console.log(new Habit().name);

//괄호 생략 가능. '좋은 스타일'은 아니다.

let habit = new Habit;

console.log(habit);