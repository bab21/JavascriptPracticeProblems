const prompt=require('prompt-sync')();
let number=parseInt(prompt("Enter  number  "));

for(i=2;i<number;i++){
    if(number%i==0){
        console.log("not a prime number");
        return;
    }
}
console.log("prime number ");
