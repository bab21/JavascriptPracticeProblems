const prompt=require('prompt-sync')();
let degreeConversion=function(){
console.log("1.Celsius To Fahrenheit");
console.log("2.Fahrenheit To Celsius");

let number=parseInt(prompt("Choose One Conversion "));
if(number==1){
    let celsius=prompt("Enter Degree In Celsius ");
    let inFahrenheit=(celsius*9/5)+32;
    console.log("Degree In Fahrenheit is : "+inFahrenheit);
}
else{
    let fahrenheit=prompt("Enter Degree In Fahrenheit ");
    let inCelsius=(fahrenheit-32)*5/9;
    console.log("Degree In Celsius is : "+inCelsius);
}
};

degreeConversion();
