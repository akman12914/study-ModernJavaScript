function Habit() {
    this.name = "일상";

    return { name: "농구"}; // this가 아닌 새 객체 반환
}

console.log(new Habit().name);