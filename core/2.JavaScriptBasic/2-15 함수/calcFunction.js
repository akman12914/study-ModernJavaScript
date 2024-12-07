function min(a,b){
    if(a>b){
        return b;
    }
    else{
        return a;
    }
}

console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));

function pow(x,n){
    if(n<1){
        return "자연수를 입력하세요";
    }
    else{return x**n;}
}

console.log(pow(3,0));