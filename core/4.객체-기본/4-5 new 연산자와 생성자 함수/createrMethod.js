function athlete(name, region){

this.name = name;
this.region = region;
switch(this.region){
    case "부산":{
        this.school = "지상고";
        break;
    }
    case "서울":{
        this.school = "장도고";
        break;
    }
    case "경기도":{
        this.school = "원중고";
        break;
    }
}
    
}
function printObj(obj){
    this.obj = obj;
    for(let key in obj){
        console.log(key + ":" + obj[key]);
    }
    console.log("-----------------------");
}

let SF = new athlete("기상호", "부산");
let PG = new athlete("전영중", "경기도");
let SG = new athlete("성준수", "부산");
let C = new athlete("임승대", "서울");
let PF = new athlete("지국민", "경기도");

console.log("----------팀 편성표--------------")
printObj(SF);
printObj(PG);
printObj(SG);
printObj(C);
printObj(PF);
console.log("--------------------------------")