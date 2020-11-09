const prompt=require('prompt-sync')();
let number=parseInt(prompt("Enter  number for factorial "));
let factorial=1;
if(number==0){
    console.log("factorial is "+factorial);
    return;
}

for(i=1;i<=number;i++){
    factorial=factorial*i;
}
console.log("Factorial of given number is "+factorial);

