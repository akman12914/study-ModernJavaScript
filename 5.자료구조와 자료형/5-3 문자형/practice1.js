function ucFirst(str){
    if (!str) return str;

    let firstStr = str[0].toUpperCase();
    let secondStr = str.slice(1);
    return firstStr + secondStr;
}

console.log(ucFirst("john"));
console.log(ucFirst(""));