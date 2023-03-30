//A random integer from min to max

function randomInteger(min, max){
    return (min +  Math.floor(Math.random() * (max)))
}

console.log( randomInteger(1, 5) );