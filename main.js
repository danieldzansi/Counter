// // // let age=13;
// // // let gpa=230;
// // // let name ="Daniel";
// // // console.log(name +" is "+ age +"years old and has a grade of"+ gpa);
// // // console.log("your name is ${name}");
// // // let online=false;
// // // // console.log("bro is "+ online);

// // let firstName = "Daniel";
// // let gpa=3.42;
// // let grade="first class";

// // document.getElementById("h1").textContent = ("Your name is ") + firstName;
// // document.getElementById("h2").textContent =gpa;
// let student =30;
// student=student +1;
// student=student + 2;
// console.log(student);
const PI=3.143;
let radius;
let circumference;
 
 document.getElementById("mysubmt").onclick=function(){
 radius =document.getElementByid("mytext").value;
 circumference=2*PI*radius;
 radius=Number(radius);
 document.getElementById("h3").textContent = Circumference;
 console.log("Circumference:", circumference);
 }