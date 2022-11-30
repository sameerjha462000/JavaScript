// arrow functions

// normal function expression
let square = function (num) {
  return num * num;  
};

console.log(square(34));


// EXAMPLE 2 -- arrow function
let squareArrow = (num) => {
    return num * num;
};

console.log(squareArrow(93));

// We can also have multiple parameters in arrow functions
let multiply = (x, y) => {
    return x * y;
};

console.log(multiply(3, 4));

// RULE 1 -- When there is no argument, then also brackets are necessary

let greet = () => {
    console.log("HI!!!");
};

greet();

// RULE 2 -- When there is only a single argument, then brackets can be avoided

let evenOddDecider = num => {
    return num % 2 === 0 ? "even" : "odd";
};

console.log(evenOddDecider(5));


