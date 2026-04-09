// A new way to write functions using the => syntax. 
// They are shorter and do not have their own this binding, 
// which makes them useful in some cases.

const square = n => n * n;
console.log(square(4));

//1. Basic Arrow Function

let greet = () => {
    console.log("Hello");
};
greet(); // Hello

//2. Arrow Function with Parameters

let add = (a, b) => {
    return a + b;
};
console.log(add(2, 3)); // 5

//3. Short Form (Implicit Return)
//No {} and no return

let addition = (a, b) => a + b;
console.log(addition(5, 3)); // 8

//4. Single Parameter (No Brackets)
let sqre = x => x * x;
console.log(sqre(4)); // 16

//5. Arrow Function with Array map()

let arr = [1, 2, 3];
let result = arr.map(num => num * 2);
console.log(result); // [2, 4, 6]

//6. Arrow Function with filter()

let ar = [10, 15, 20, 25];
let even = ar.filter(num => num % 2 === 0);
console.log(even); // [10, 20]

//7. Arrow Function with reduce()

let a = [1, 2, 3, 4];
let sum = a.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10







