let diceValueCount=new Map();
console.log("hello");

upperloop:
while(true){
    if(diceValueCount.size>0){
        for(let [key,value] of diceValueCount.entries()){
            if(value==10)
                break upperloop;
        }
    }
    let diceValue=Math.floor(Math.random()*5+1);
    if(diceValueCount.has(diceValue)){
        diceValueCount.set(diceValue,diceValueCount.get(diceValue)+1);
    }
    else{
        diceValueCount.set(diceValue,1);
    }
}


let max=0;
let min=11;
let diceValueMaxAppeared=0;
let diceValueMinAppeared=0;

for(let [key,value] of diceValueCount){
    console.log("key value pair is "+key+" = "+value);
    if(value>max){
        max=value;
        diceValueMaxAppeared=key
    }
    if(value<min){
        min=value;
        diceValueMinAppeared=key;
    }
}

console.log("Number that appeared maximum times is "+diceValueMaxAppeared);
console.log("Number that appeared minimum times "+diceValueMinAppeared);

