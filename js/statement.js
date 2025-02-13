// Conditional Operator


// ES5
// if-else
// switch-case

// ES6
// Ternary Operator



// const gender = prompt ("Enter Gender");
// if (gender== "m"){
//     console.log("Male");
// }
// else{
//     console.log("Female");
// }



// const day = Number (prompt("Enter day 1 to 7"));
// switch (day){
//     case 1:
//         alert("Sunday");
//         break;
//     case 2:
//         alert("Monday");
//         break;
//     case 3:
//         alert("Tuesday");
//         break; 
//     case 4:
//         alert("Wednesday");
//         break;
//     case 5:
//         alert("Thursday");
//         break;
//     case 6:
//         alert("Friday");
//         break;
//     case 7:
//         alert("Saturday")
//         break;
//     default:
//         alert("Invalid Number")

// }


// Write a js program that handles the grading
// Logic
// 80% and above: Distinction
// 70% - 79.99%: First Division
// 60% - 69.99%: Second Division
// Below 60%: Fail



// const grade = Number(prompt("Enter the Marks"));

// switch(true){
//     case score <=80:
//         alert("Distinction");
//         break;
//     case score <=70 && >=79.99:
//         alert("First Division");
//         break;
//     case score <=60 && >= 69.99:
//         alert("Second Division");
//         break;
//     case score >=60:
//         alert("Fail");
//         break;
//     case default:
//         alert("Invalid Number")
// }

// Write a js program to ask user their drink order
// (tea, coffee)
// alert=> You have ordered


// const order= prompt("Enter your order")
// order ==="tea" 
// ? alert(`You have ordered Tea`) 
// : alert(`You have ordered Coffee`);



// const drink = prompt("What would you like to drink?")
// drink ==="tea"
// ? alert(`You have ordered Tea`)
// : drink ==="coffee"
// ? alert ===(`You have ordered Coffee`)
// : drink ==="coke"
// ? alert ===(`You have ordered Coke`)
// : drink === "milk"
// ? alert ===(`You have ordered Milk`)
// : alert ===(`You have ordered ${drink}`)

const day = Number(prompt("Write the day in number from 1 to 7"))
  day === 1
? alert (`The day is Sunday`)
: day === 2
? alert (`The day is Monday`)
: day === 3
? alert (`The day is Tuesday`)
: day === 4
? alert (`The day is Wednesday`)
: day === 5 
? alert (`The day is Thursday`)
: day === 6 
? alert (`The day is Friday`)
: alert (`The day is Saturday`)