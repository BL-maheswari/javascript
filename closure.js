//A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.

// Retains access to outer function variables.
// Preserves the lexical scope.
// Allows data encapsulation and privacy.
// Commonly used in callbacks and asynchronous code.


function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();

function counter() {
    
    // Private variable
    let count = 0; 
    
    return function () {
        
        // Access and modify the private variable
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

//Closure and setTimeout
function createTimers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Timer ${i}`);
        }, i * 1000);
    }
}
createTimers();

//Closures with this keyword
//Closures can be confusing with the this keyword because this is determined by how a function is called, 
// not where it is defined, so inside a closure it may not refer to the expected object.

function Person(name) {
    this.name = name;
    
    this.sayName = function () {
        console.log(this.name);
    };

    setTimeout(function () {
        console.log(this.name); 
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); 
    // Fix with bind
}

const G = new Person("GFG");
G.sayName();


