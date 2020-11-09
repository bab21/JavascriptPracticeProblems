let headCount=0;
let tailCount=0;
while(true){
    let headOrTail=Math.floor(Math.random()*2);
    if(headOrTail==0)
        headCount++;
    else tailCount++;
    if(headCount==11 || tailCount==11)
        break;
}
console.log("Head count "+headCount);
console.log("Tail count "+tailCount);