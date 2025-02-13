// Logical Operator
// 3

// AND
// OR
// NOT

// AND
// Condition 1 && Condition 2

// const age = Number(prompt("Enter your Age"));
// const dl = confirm ("Do you have Driving License?")

// const isAllowed = age >= 18 && dl === ture 
// ? "You are Invited"
// : "Sorry"

// OR
// Condition 1 || Condition 2
// syntax ||

// const age1 = Number (prompt("What is your Age?"));
// const driving = confirm("Do you have Driving License?")

// const isAllowed1 = age1 >= 18 || driving === true
// ? "You are Invited"
// : "Sorry"


// Show user if they are allowed to vote based on Citizensip card or Voter Card
// Alert if eligility

// const citizenCard = confirm("Do you have Citizenship Card?")
// const voterCard= confirm("Do you have Voter Card?")

// const isEligible = citizenCard  || voterCard 
// ? "You are Allowed to Vote"
// : "Sorry you are not Eligible"
// alert(isEligible);


// NOT

// const user = prompt("What is your Name?") // Output is either: null, " ", "Some-word"
// console.log(user);


const user = prompt("What is your Name?") // Output is either: null, " ", false
if (!user){
    alert("Username is Misssing")
}

