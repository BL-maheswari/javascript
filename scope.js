//Global Scope

//A variable declared outside any function or block.

let name = "Maheswari";

function show() {
  console.log(name); // accessible
}
show();
console.log(name); // accessible everywhere

//Function Scope

//Variables declared inside a function are only available inside that function.

function display() {
  let message = "Hello";
  console.log(message); // accessible
}

display();
// console.log(message); ❌ Error

//Block Scope (let and const)

//Variables inside { } (if, loop, etc.)

if (true) {
  let a = 10;
  const b = 20;
  console.log(a, b); // works
}

// console.log(a); ❌ Error
// console.log(b); ❌ Error