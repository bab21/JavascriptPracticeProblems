const prompt=require('prompt-sync')();
let number=parseInt(prompt("Enter  number for finding factors "));


let primeCheck=function(number){
    if(number==1)return false;
    for(i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
let factors=new Array();
let primeFactors=new Array();
let factorIndex=0;
let primeFactorIndex=0;

for(let i=1;i<=parseInt(number/2);i++){
    if(number%i==0){
        factors.push(i);
        if(primeCheck(i))
        primeFactors.push(i);
    }
}
factors.push(number);
if(primeCheck(number))
    primeFactors.push(number);

console.log("Factors are "+factors);
console.log("Prime Factors are "+primeFactors);