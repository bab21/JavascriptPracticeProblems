const prompt=require('prompt-sync')();
let count=parseInt(prompt("Enter  number  of values to check for prime "));

let arrayNumbers=new Array();

let primeCheck=function(number){
    if(number==1)return false;
    for(i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

for(let index=0;index<count;index++){
    arrayNumbers[index]=parseInt(prompt("Enter " +parseInt(index+1)+" number "));
}
for(let i=0;i<arrayNumbers.length;i++){
    if(primeCheck(arrayNumbers[i]))
        console.log(arrayNumbers[i]+" : Prime Number");
    else console.log(arrayNumbers[i]+" : Not a Prime Number");
}
