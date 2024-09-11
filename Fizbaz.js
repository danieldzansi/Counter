let i=[];
let j=1;

function fizzBuzz() {
    while(j<=100){
    if (j % 3=== 0 && j % 5 ===0) {
        i.push("FizzBuzz");
    } 
    else if (j % 3 === 0){
        i.push("Fizz");
    } 
    else if (j % 5 === 0){
        i.push("Buzz");
    }
    else{
    i.push(j);
    }
    j++;
    }
    return i;
}
console.log(fizzBuzz());