//1. map() → Transform each element

let arr = [1, 2, 3, 4];
let result = arr.map(num => num * 2);
console.log(result); // [2, 4, 6, 8]


//2. filter() → Select elements based on condition

let ar = [1, 2, 3, 4, 5, 6];
let even = ar.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6]

//3. reduce() → Reduce array to single value

let arr1 = [1, 2, 3, 4];
let sum = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//4. forEach() → Iterate through array

let arr2 = [10, 20, 30];
arr2.forEach(num => {
    console.log(num);
});


//5.find() → Get first matching element

let arr3 = [5, 8, 12, 20];
let res = arr3.find(num => num > 10);
console.log(res); // 12

//6. includes() → Check value exists

let arr4 = [1, 2, 3, 4];
console.log(arr4.includes(3)); // true
console.log(arr4.includes(10)); // false

//7. push() & pop() → Add / Remove at end

let arr6 = [1, 2, 3];
arr6.push(4);  
console.log(arr6); // [1, 2, 3, 4]
arr6.pop();  
console.log(arr6); // [1, 2, 3]

//8. shift() & unshift() → Start operations

let arr7 = [2, 3];
arr7.unshift(1);  
console.log(arr); // [1, 2, 3]
arr7.shift();  
console.log(arr7); // [2, 3]

//9. sort() → Sort array
let a = [2, 3];
a.unshift(1);  
console.log(a); // [1, 2, 3]
a.shift();  
console.log(a); // [2, 3]

//10. reverse() → Reverse array

let b = [1, 2, 3];
b.reverse();
console.log(b); // [3, 2, 1]




























