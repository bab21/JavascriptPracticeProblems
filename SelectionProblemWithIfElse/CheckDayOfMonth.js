const prompt=require('prompt-sync')();
let day=prompt("Enter day : ");
let month=prompt("Enter month : ");
month=month-1;

let year=2020;
let userGivenDate = new Date();
userGivenDate.setMonth(month);
userGivenDate.setDate(day);
userGivenDate.setFullYear(year);

let startDate = new Date('March 20, 2020');
let endDate = new Date('June 20, 2020');
if(userGivenDate>= startDate && userGivenDate<=endDate)
    console.log("true");
else console.log("false");
