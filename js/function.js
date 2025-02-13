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

function area (r){
    const result = 22/7 * r*r;
    return result;
}

const input1 = +prompt("Enter the Radius of the Circle")
const answerArea = area(input1);
alert(answerArea);


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

*/