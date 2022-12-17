function hello(name){
    let phrase = `hello, ${name}!`;

    debugger; // 실행이 여기서 멈춤
    
    
    say(phrase);

}

let say = (phrase) =>{
    alert(`${phrase}`);
}

