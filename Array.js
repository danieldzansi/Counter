// // // // let numbers=[1,2,3];
// // // // numbers.push(5);
// // // // console.log(numbers);
// // // let randomNum=Math.floor(Math.random()*10);
// // // console.log(randomNum);
// // let minValue=15;
// // let maxValue=10;
// // let randomNum=Math.floor(Math.random()*(maxValue-minValue)) + minValue;
// // console.log(randomNum);

// let school=["Legon","GCTU","KNUST","ATU","UDS"];
// let randomIndex=Math.floor(Math.random()* school.length);
// let randomSchool=school[randomIndex];
// console.log(randomSchool);
let numbers=[1,2,3,4,5];
let arrays=numbers.sort(function(){
    return Math.random()-0.5;
});
console.log(numbers[0]);
//homework 1. write a function using the arrow method that randomly selects a list of students 
//create a number gussing game where the computer picks a random number betwween 1 and 100
