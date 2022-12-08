// let n = 5;
// let sign = '';

// nextPrime: for(let i = 2; i<=n ; i++){
//     for(let j=2; j<i; j++){
//         if((i!=j)&&(i%j==0))continue nextPrime;
        
//     }

//     console.log(i);

// }

let n = 5;
let i=2;
let j=2;
// j=2;
nextPrime : while(i<=n){

    j=2;

    while(j<i){
       
       if((i!=j)&&(i%j==0))continue nextPrime;
       j++;
    }

    console.log(i);
    i++;
    
}