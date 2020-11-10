const prompt=require('prompt-sync')();
let n=parseInt(prompt("Enter  number  "));

let primeCheck=function(number){
    if(number==1)return false;

    for(let i=2;i<number;i++){
        if(Math.floor(number%i)==0){
            return false;
        }
    }
    return true;
    
}

let primeFactorArray=new Array();
for(let i=1;i<=n/2;i++){
    if(n%i==0 && primeCheck(i))
        primeFactorArray.push(i);
}
if(primeCheck(n))
    primeFactorArray.push(n);

console.log("Prime factors of given number is "+primeFactorArray);
