//  Complex Data Types
//  Object, Array, Date


// 1. Multiple Datatypes exists within Complex Data types
// 2. CRUD (Create, Read, Update, Delete)

// Create

const person = {}; // Functional based Concept
const persons = new Object(); // Class based Concept

console.log(person, typeof person, persons);

const laptop = {
    brand: "apple",
    model: "macbook air",
    modelYear: 2024,
    age: function (){
        return 2025 - this.modelYear;
    },// es5
    ageNew: () => {
        return 2025 - laptop.modelYear;
    },// es6
};


// Read (using . notation with key)
console.log(laptop.brand);
console.log(laptop.age());
console.log(laptop.ageNew());


// Update

laptop.brand ="dell";
console.log(laptop);

// Delete

// es5

delete laptop.brand;
console.log(laptop);


// Write a CRUD operation for student object data

const student = {
    name: "Sadip",
    class: "5",
    rollNum: "25",
    
};

// Read
console.log(student.class);
console.log(student.name);


// Update

student.class= "9";
console.log(student);

// Delete

delete student.rollNum;
console.log(student);



// Find the value of the price property and if it is greater than Rs.100, discount it by 10%.
// It that's not the case, discount it by 7%.

// Update the object with the new property
// discout and the corresponding value (7% to 10%) and the new price.

// Use given object and loop through its properties and if it has property "discount" print "Already discounted by..." and add the value (how much is discount.)

// In opposite case, do what you did in the previous exercise: check the price , depending on it(if it's greater or lower than 100) add discount (10% or 7%) and add the property "discount" to the object.

let product = {
    name: "Speaker",
    price: 7350,
}

// End result should be like this>>
// end result case 1;
//{name: "headphones", price:"77.84", disount: "7%"}

const reviewProduct = (product) => {
    product.price = product.price > 100
    ? (product.price - 0.1 * product.price.to).toFixed(2)
    : (product.price - 0.07 * product.price).toFixed(2);
    product.discount = product.price > 100 
    ? "10%"
    : "7%";
    return product;
}

const newProduct = reviewProduct(product);
console.log(newProduct);