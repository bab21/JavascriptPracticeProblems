const prompt=require('prompt-sync')();

const feetToInch=12;
const inchToFeet=1/12;
const feetToMeter=0.3048;
const meterToFeet=3.28084;

console.log("1.Feet To Inch");
console.log("2.Inch To Feet");
console.log("3.Feet To Meter");
console.log("4.Meter To Feet");
let choice=parseInt(prompt("choose one "));

let number=parseInt(prompt("Enter value for conversion :"));
switch(choice){
    case 1:console.log("value in feet converted to inch "+number*feetToInch);
        break;
    case 2:console.log("Value in inch converted to feet "+number*inchToFeet);
        break;
    case 3:console.log("Value in feet converted to meters "+number*feetToMeter);
        break;
    case 4:console.log("value in meter converted to feet "+number*meterToFeet);
        break;
    default:console.log("invalid choice");
}
