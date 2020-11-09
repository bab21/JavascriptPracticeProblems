const prompt=require('prompt-sync')();

let primeCheck=function(number){
    if(number==1)return false;

    for(let i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
let power=function(base,exponent){
    let ans=1;
    for(let i=1;i<=exponent;i++){
        ans=ans*base;
    }
    return ans;
}
let getPalindrome=function(number){
    let arrayNums=new Array();

    while(number>0){
        arrayNums.push(number%10);
        number=Math.floor(number/10);
    }

    n=arrayNums.length;
    let palindrome=0;
    for(let i=0;i<n;i++){
        palindrome=palindrome+arrayNums[i]*power(10,n-i-1);
    }
    return palindrome;
}

let number=prompt("Enter Number");
if(primeCheck(number)){
    let palindrome=getPalindrome(number);
    if(primeCheck(palindrome)){
        console.log("Both number and its palindrome are prime");
    }
    else{
        console.log("Number is prime but its palindrome is not prime");
    }
}
else
    console.log("Number is not prime");