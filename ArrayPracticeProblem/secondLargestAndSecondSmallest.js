let array=new Array();
for(let i=0;i<10;i++){
    array[i]=parseInt(Math.floor(Math.random()*899+100));
}
let largest=0;
let secondLargest=0;
let smallest=1000;
let secondSmallest=1000;
console.log("array generated is "+array);

for(let j=0;j<10;j++){
    if(array[j]>largest){
        secondLargest=largest;
        largest=array[j];
    }
    else if(array[j]<largest && array[j]>secondLargest)
        secondLargest=array[j];
    if(array[j]<smallest){
        secondSmallest=smallest;
        smallest=array[j];
    }
    else if(array[j]>smallest && array[j]<secondSmallest)
        secondSmallest=array[j];

}

console.log("Second smallest element is "+secondSmallest);
console.log("Second largest element is "+secondLargest);

//using sorting...
console.log("using array sort ");
array.sort();
console.log("Second smallest element is "+array[1]);
console.log("Second largest element is "+array[8]);
