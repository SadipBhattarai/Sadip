// Function are the building block of application

// How it works?

// Function takes input, uses logic and return output
// Function must do only 1 task


// Syntax

// ES5

// function fnName (input){
//     // logic
//     // return
// }

// ES6

// Write a function to add 2 numbers

// Function declaration/ Initalization
// Inputs are called parameters, arguments
// function sum (num1, num2){
//     const result = num1 + num2
//     return result;

// }

// Input data
// const value1 = +prompt ("Enter First Number");
// const value2 = +prompt ("Enter Second Number");

// const answer = sum(value1, value2);
// alert(answer);


// DRY (Don't Repeat Yourself)
// console.log(sum(1,0));



// Write a function to calculate Area of Circle

// function area (r){
//     const result = 22/7 * r*r;
//     return result;
// }

// const input1 = +prompt("Enter the Radius of the Circle")
// const answerArea = area(input1);
// alert(answerArea);


/*
1.  Arrow Function (ES6)
2.  Default Function
3.  Parameterized Function
4.  Closure
5.  IIFEs
6.  Explicit Function
7.  Implicit Function
8.  Anonymous Function
9.  Inline Function
10. Callback Function 
11. Pure Function

*/
// Arrow Function
// const sum = (num1, num2) =>{
//     const result = num1 + num2;
//     return result;
// }

// // Function Call
// console.log(sum(2, 5));

// const firstNumber= +prompt("Enter the first Number");
// const secondNumber = +prompt("Enter the Second Number")


// Default Function

// const pagination = (page =1) => {
//     return `page number ${page}`;
// }

// console.log(pagination(2));
// console.log(pagination());


// Write a function that says welcome person
// If user name is provided else it says welcome user

// const user = (person = "User") => {
//     return `Welcome ${person}`
// }

// console.log(user("Sadip"));
// console.log(user());

// const data = prompt ("Enter your Name");
// result = user(data);
// alert(result);

// Parameterized Function

// Write a parameterized function to calculate the volume of cuboid: volume = l*b*h

// const volume = ({length, breadth, height}) => {
//     return length*breadth*height;
// };

// console.log(volume({length:2, breadth:5 , height:4}));


//  IIFEs (Immediately Invoked Functional Expressions)

// (() => {})();

// ((a = "Test") =>{
//     console.log("IIFE", a);
// })("Sadip");


// Function can return Primitive Datatype / Complex Datatype / Fuction

// Closure Function

// let count =1;
// const counter = () => {
//     const increment = count + 1;
//     return increment;
// };
// console.log(counter());


const counter = () => {
    let count = 1;
    return () => {
        const increment = count ++;
        return increment;
    }
};

const counterA = counter();
const counterB = counter();
const counterC = counter();
const counterD = counter();

console.log(counterA());    // dashain
console.log(counterA());    // dashain
console.log(counterA());    // dashain

console.log(counterB());    // tihar
console.log(counterB());    // tihar



// Private Variables
// Local Variables
// Global Variables
// Lexical Scoping

// Closure Concept => lexical Scoping => local, Private Variable, Global Variable

// Variables that can be accessed outise or even inside the function is called global variable.


// Explicit Function
//  const summer = () =>{
//     return 0;
//  }

//  console.log({summer: summer()});

 //

//  const addition = (a, b) => {
//     const sum = a +b;
//     return sum;
//  };


 // Implicit Function

//  const summer1 =() => 0;

//  console.log(summer1());

//  // 
//  const additon1 = (a,b) => a + b;

//  console.log (additon1(4, 5));


 // Anonymous Funciton

//  const test = function(){
//     console.log("Test");
//  };
//  test();
// Used in Logger Implementation => Warn User, Alert



 // Inline Funciton

//  const testInLine = function (){

//  }


// Callback Function
// Callback Function is a fuction that accepts another function as an parameter.

const print = (data) => {
    console.log(`Hello ${data}`);
};

const main = (user = "user", callbackFn) => {
    const information = `Mr ${user}`;
    return callbackFn(information);
};

main("sadip", print);

// Write a js funciton that calcualtes the volume of Cuboid
// V= l*b*h

const volume = (length=0 , breadth=0, height=0) => length*breadth*height;

console.log(volume(2, 3, 4))

// Write a js closure funciton that mimics the bank account opening and deposit

const bank = (initialAmout= 0) => {
    let count = initialAmout;
    return  () => count;
}

const acHolder1 = bank(20000);
const acHolder2 = bank(1000);

console.log(acHolder1());
console.log(acHolder2());


// Write a callback Function to calculate the VAT of the product 13% of item cost

const calcTax = (qty, costPrice) => 0.13* +qty* +costPrice;
const cart = ({item, quantity= 1, tax}) => {
return tax (quantity, item);
};

const taxAmt = cart ({ item:100, tax: calcTax});
console.log(taxAmt);


// Pure Function result doesn't changes for the same Input
// Utilities Fuction
// Proper Case Function Sadip Bhattarai