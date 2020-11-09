const arguments=process.argv.slice(2);
let n=arguments[0];
let power=function(base,exponent){
    let ans=1;
    for(let i=1;i<=exponent;i++){
        ans=ans*base;
    }
    return ans;
}

for(count=0;count<=n;count++){
    console.log("for n = "+count +" value is "+power(2,count));
}

