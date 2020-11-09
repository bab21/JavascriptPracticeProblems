const arguments=process.argv.slice(2);
let n=arguments[0];
let harmonicNumber=0;
console.log("meee");

for(let i=1;i<=n;i++){
    harmonicNumber=harmonicNumber+(1/i);
}
console.log("Harmonic value of given number is "+harmonicNumber);
