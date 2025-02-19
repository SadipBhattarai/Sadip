// String Manipulation (Pure Function)
// Closure
// Callback Function

// Closure

//  Global Scope Variable
var global = 1;
const globals =1;


const counter = () => {
    console.log(global,globals);
    let count = 0;  // Private variable
    return () => count++;
};


// console.log(count); // Trying to access the local scoped variable

const counterA = counter();
console.log(counterA(), counterA());

const counterB = counter();
console.log(counterB());


// Lexical Scoping => 


// Callback Function

const taxCal = (item) => 0.13 * item;

const cart = (items, calculateTaxFn) => {
    return calculateTaxFn(items);
};

const taxAmt = cart