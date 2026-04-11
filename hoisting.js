//Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. 
// This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.

// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };

//Note: The variable hello is hoisted, but it is not initialized until 
// the assignment line is reached since it holds a function expression. 
// Thus, calling hello() before its initialization throws a TypeError.

//1. Variable Hoisting with var

console.log(a); // undefined
var a = 5;

//2. Variable Hoisting with let and const

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

//3. Function Declaration Hoisting
greet(); // "Hello, Mahima!"
function greet() {
    console.log("Hello, Mahima!");
}

//4. Function Expression Hoisting
// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };

//5. Hoisting with let and const in Functions
function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 50;
}
test();

//6.6. Hoisting with Classes
// const obj = new MyClass(); // ReferenceError
// class MyClass {
//     constructor() {
//         this.name = "Mahima Bhardwaj";
//     }
// }

//7.7. Re-declaring Variables with var

var a = 10;
var a = 20; // No error
console.log(a); // 20