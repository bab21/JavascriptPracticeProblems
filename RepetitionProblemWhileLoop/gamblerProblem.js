let currentAmount=100;
let goal=200;
let numWins=0;
let numBets=0;
while(currentAmount!=0 && currentAmount<goal){
    console.log("Current amount is "+currentAmount);
    let winOrLoss=Math.floor(Math.random()*2);
    if(winOrLoss==1){
        currentAmount++;
        numWins++;
    }
    else currentAmount--;
    numBets++;
}
if(currentAmount==goal)
    console.log("Won");
else console.log("lose");
console.log("Number of times bet won "+numWins);
console.log("Number of times bet made "+numBets);
