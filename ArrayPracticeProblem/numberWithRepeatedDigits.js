let array=new Array();

for(let i=11;i<=99;i++){
    if(Math.floor(i%10)==Math.floor(i/10))
        array.push(i);
}

console.log("numbers with repeated digits are "+array);