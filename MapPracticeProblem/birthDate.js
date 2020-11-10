function randomDateFunction(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


let mapMonthDate=new Map();
for(let i=0;i<50;i++){
    randomDate=randomDateFunction(new Date(1992, 0, 1), new Date(1993,12,31));
    if(!mapMonthDate.has(randomDate.getMonth())){
        let array=new Array();
        array.push(randomDate);
        mapMonthDate.set(randomDate.getMonth(),array);
    }
    else{
        let array=mapMonthDate.get(randomDate.getMonth());
        array.push(randomDate);
        mapMonthDate.set(randomDate.getMonth(),array);
    }
}

for(let [key,value] of mapMonthDate.entries()){
    console.log("month "+key+" contains "+ value);
    console.log("...........")
}