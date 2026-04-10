//A function without a name. Usually stored in a variable or used directly.

let greet = function() {
    console.log("Hello from anonymous function");
};

greet();


let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);


let numbers = [1, 2, 3, 4];

let squares = numbers.map(function(num) {
    return num * num;
});

console.log(squares); // [1, 4, 9, 16]