const arguments=process.argv.slice(2);
let n=arguments[0];

let low=0;
let high=100;
let mid=(low+high)/2;

console.log("jeee");
while(mid!=n){
    if(n>mid){
        low=mid;
        mid=(low+high)/2;
    }
    else if(n<mid){
        high=mid;
        mid=(low+high)/2;
    }
}
if(n==mid)
    console.log("Magic number found ");