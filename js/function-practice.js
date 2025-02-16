//  Closure Function
//  A closure is a function that has access to the variables and parameters of its outer function, even after the outer function has finished executing.

/*
let count = 1;
const counter = ()=> {
    const increment = count +1;
    return increment;
};

console.log(counter())
*/

// const counter = () => {
//     let count =1;
//     return () =>{
//         const increment = count ++
//         return increment;
//     }
// };

// const counterA = counter();
// const counterB = counter();
// const counterC = counter();
// const counterD = counter();

// console.log(counterA());
// console.log(counterA());
// console.log(counterA());
// console.log(counterA());


// console.log(counterB());

// Explicit Function

const product = (a, b) => {
    const result = a*b;
    return result;
};

console.log(product(2,3));

// Implicit Function

const sum = (a, b) => a + b;

console.log(sum(2,3));


