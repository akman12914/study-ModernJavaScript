

function hello(name){
    let phrase = `hello, ${name}!`;

    // eslint-disable-next-line no-debugger
    debugger; // 실행이 여기서 멈춤
    
    
    say(phrase);

}

let say = (phrase) =>{
    alert(`${phrase}`);
}

hello("유진");

