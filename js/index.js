const person = "Sadip Bhattarai";
console.log(person);

//ES5
var person1 = "Susan Kandel";
person1 = "Sangit Bhattarai"; // {Override}
console.log(person1);

//ES6
const person2 = "Alex";
//person2 = "John"; //{No Override Allowed}
console.log(person2);

let person3 = "Mike";
person3 = "Nathan"; //{Override Allowed}
console.log(person3);


// alert("Hello User");

// const user = prompt("What is your name?");
// console.log(user);

// const student = confirm("Are you above 18?");
// console.log(student);

//Write a program that asks user for their name and alerts their name with greeting


//1. 
const user = prompt("What is your name?");
const greeting = "Welcome to the website, " + user;
alert(greeting);


//2. String Literal
const visitor = prompt("What is your name?");
alert(`Welcome, ${visitor}`);