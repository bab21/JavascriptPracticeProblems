let diceNum1=Math.floor(Math.random()*6+1);
let diceNum2=Math.floor(Math.random()*6+1);
let sumOfDiceNums=diceNum1+diceNum2;
console.log("sum of two dice numbers "+diceNum1+" and "+diceNum2+" is "+sumOfDiceNums);

let num1=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num3=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num4=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
let num5=Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);

let sumOfFiveRandomNums=num1+num2+num3+num4+num5;
console.log("sum of five random two digit numbers is "+sumOfFiveRandomNums);
let averageOfFiveRandomNums=sumOfFiveRandomNums/5;
console.log("average of the five two digit numbers is "+averageOfFiveRandomNums);

const feetToMeter=0.3048;
let lengthInFeet=60;
let breadthInFeet=40;
let areaInMeter=lengthInFeet*(feetToMeter)*breadthInFeet*(feetToMeter);
let areaOf25Plots=25*areaInMeter;
console.log("area of rectangle in meter is :"+areaInMeter);
console.log("area of 25 such plots is "+areaOf25Plots);
