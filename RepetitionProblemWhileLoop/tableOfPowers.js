const arguments=process.argv.slice(2);
let n=arguments[0];
let powerFunction=function(base,exponent){
    let ans=1;
    for(let i=1;i<=exponent;i++){
        ans=ans*base;
    }
    return ans;
}

console.log("meeee");
let power=1;
let max=powerFunction(2,n);

while(power<=max &&  power<=256){
    console.log(power);
    power=power*2;
}
