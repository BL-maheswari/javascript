//A JavaScript String is a sequence of characters, typically used to represent text.

// In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character.
// Like Java and Python, strings in JavaScript are immutable.

// Using Single Quote
let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = "abcd";
console.log(s2);

let s = new String('abcd');
console.log(s);

let s3 = 'gfg';
let s4 = `You are learning from ${s1}`;
console.log(s4);

let s11 = '';
let s21 = "";
console.log(s11);
console.log(s21);


// some of the array methods

//slice()
// extracts a part of the string based on the given stating-index and ending-index and returns a new string.

// Define a string variable 
let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);

// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

//2.substring()

// Define a string variable
let str = "Mind, Power, Soul";
// Use the substring() method to extract a substring 
let part = str.substring(6, 11);
// Output the value of variable
console.log(part);

//3.substr()

// Define a string variable 'str'
let str1 = "Mind, Power, Soul";

// Use the substr() method to extract a substring f
let part1 = str1.substr(6, 5);

// Output the value of variable
console.log(part1);

//4.replace()

// Define a string variable 'str' 
let st = "Mind, Power, Soul";

// Use the replace() method to replace the substring
let par = st.replace("Power", "Space");

// Output the resulting string after replacement
console.log(par);
//5.replaceAll()

// Define a string variable 'str'
let string = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
let p = string.replaceAll("Power", "Space");

// Output the resulting string after replacement
console.log(p);

//6.toUpperCase()

// Define a string variable
let gfg = 'GFG ';

// Define another string variable 
let geeks = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to uppercase using the toUpperCase() method
console.log(geeks.toUpperCase());

//7.toLowerCase()

// Define a string variable
let gf = 'GFG ';

// Define a string variable 
let geek = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to lowercase using the toLowerCase() method
console.log(geek.toLowerCase());

//8.split()

let g = 'GFG '
let ge = 'stands-for-GeeksforGeeks'

// Split string on '-'. 
console.log(ge.split('-'))
