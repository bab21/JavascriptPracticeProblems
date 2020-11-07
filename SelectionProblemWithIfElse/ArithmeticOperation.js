const prompt=require('prompt-sync')();
let a=prompt("Enter First number : ");
let b=prompt("Enter Second number : ");
let c=prompt("Enter Third number : ");

let operations=new Array();
operations[0]=a+b*c;
operations[1]=a%b+c;
operations[2]=c+a/b;
operations[4]=a*b+c;

let maximum=0;
let minimum=operations[0];

for(let index=0;index<operations.length;index++){
    if(operations[index]>maximum)
        maximum=operations[index];
    if(operations[index]<minimum)
        minimum=operations[index];
}

console.log("maximum value is "+maximum);
console.log("minimum value is "+minimum);