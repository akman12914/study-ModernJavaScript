const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let calculator = {
    read(){
        rl.on("line", (line) =>{
           let input = line.split(' ').map(el=>Number(el));
           this.a = input[0];
           this.b = input[1];
           console.log(calculator.sum());
           console.log(calculator.mul());
           rl.close();
        }).on('close', ()=>process.exit);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
}

calculator.read();
