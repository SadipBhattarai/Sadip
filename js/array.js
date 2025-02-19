// 
const entity = [];
const entitties = new Array();

// Create
const group = ["raktim", "binaya", "ram"];
const groups = [{
    name: "raktim shrestha",
    joinedFrom: "1st feb 2025",
    isFullTime: true
}];

// Read

console.log(group[0]);  // array index
console.log(groups[0]); // array index

// Update
group[0] = "raktim shrestha";
console.log(group);

// Delete

[0];
console.log(group);


// ES6 
// Destructuring Objects/ Array using Spread Operator

const user = {
    name: "raktim",
    password: "abc",
    role: "admin",
};

const {password, ...rest } = user;
console.log(rest);


const users = ["raktim", "Binaya", "Ram"];

const[a, ...rests] =users;
console.log(rests);


// CRUD
// Array Method
// Destructure
// Immutable JS
// map, filter, reduce, find, some, every

const car = {
    name: "tata",
    model: 2021,
}
console.log(car);

delete car.model;
console.log({car});
console.log(car.model);


// 
const students = [{
    name: "raktim shrestha",
},
{name: "binaya dhital"},
];

const newStudents = students.map((student) => student.name.toUpperCase());
console.log(newStudents);