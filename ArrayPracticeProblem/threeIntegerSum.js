const prompt=require('prompt-sync')();
let numbersArray=new Array();
numbersArray.push(parseInt(prompt("Enter first number ")));
numbersArray.push(parseInt(prompt("Enter second number ")));
numbersArray.push(parseInt(0-numbersArray[0]-numbersArray[1]));

console.log("numbers are "+numbersArray);
let sum=0;
numbersArray.forEach(num=>sum=sum+num);
console.log("sum of the numbers is "+sum);