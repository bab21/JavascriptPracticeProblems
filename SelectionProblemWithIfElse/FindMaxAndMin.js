// const prompt=require('prompt-sync')();
let numbers=new Array();

for(let index=0;index<5;index++){
    numbers[index]=Math.floor(Math.random()*9+1)*100 + Math.floor(Math.random()*10)*10 + Math.floor(Math.random()*10);
}
let maximum=0;
let minimum=1000;

for(let index=0;index<5;index++){
    if(numbers[index]>maximum)
        maximum=numbers[index];
    if(numbers[index]<minimum)
        minimum=numbers[index];
}
console.log("numbers are "+numbers);
console.log("Maximum Value is "+maximum);
console.log("Minimum Value is "+minimum);