const prompt=require('prompt-sync')();
let palindromeCheck=function(firstNum,secondNum){
    let arrayFirstNum=new Array();
    let arraySecondNum=new Array();

    while(firstNum>0){
        arrayFirstNum.push(firstNum%10);
        firstNum=Math.floor(firstNum/10);
    }
    while(secondNum>0){
        arraySecondNum.push(secondNum%10);
        secondNum=Math.floor(secondNum/10);
    }

    if(arrayFirstNum.length!=arraySecondNum.length)
    {
        console.log("not palindromes");
        return false;
    }
    n=arrayFirstNum.length;

    for(let i=0;i<=n/2;i++){
        if(arrayFirstNum[i]!=arraySecondNum[n-1-i])
        {
            console.log("not  palindromes");
            return false;
        }
    }
    console.log("palindromes");
    return true;
}

let firstNum=parseInt(prompt("Enter  first number  "));
let secondNum=parseInt(prompt("Enter  Second  number  "));
palindromeCheck(firstNum,secondNum);

