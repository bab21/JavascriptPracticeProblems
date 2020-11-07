const prompt=require('prompt-sync')();
let userInputYear=prompt("Enter year: ");

if (userInputYear % 400 == 0) {
    console.log("leap year.");
    }
else if (userInputYear % 100 == 0) {
        console.log("Not a leap year.");
    }
else if (userInputYear % 4 == 0) {
        console.log("leap year.");
    }
else {
        console.log("Not a leap year.");
}
