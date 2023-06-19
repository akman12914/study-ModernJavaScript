function truncate(str, maxlength){
    let firstStr = '';
    let secoundStr = '';
    if( str.length > maxlength ){
        firstStr = str.slice(0, maxlength-1);
        secoundStr = "…"
        return firstStr + secoundStr;
    }
    else return str;

}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));