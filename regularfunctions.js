//A regular function in JavaScript is a named 
// function that you define using the 
// function keyword. It is used to group reusable code and can be called whenever needed.
//A regular function:

// Has a name
// Uses the function keyword
// Can take parameters
// Can return a value
// Can be reused multiple times


function greet() {
    console.log("Hello, Welcome!");
}

greet(); // calling the function

function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8


function calculateSalary(basic, bonus) {
    return basic + bonus;
}

console.log(calculateSalary(20000, 5000)); // 25000