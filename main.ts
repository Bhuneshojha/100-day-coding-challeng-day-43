//          100 days of coding challenge ( DAY 43 )

// Question 01  
// --Traditional function expression
let traditionalFunction = function (a: number, b: number) {
  return a + b;
};

// --Converted to arrow function
let arrowFunction = (a: number, b: number) => a + b;

console.log(traditionalFunction(5, 3)); // Outputs: 8
console.log(arrowFunction(5, 3)); // Outputs: 8
// --Demonstrates the conversion of a traditional function expression to an arrow function.
// Question 02
// ---Arrow function that calculates the product of all its parameters
let multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 3, 4)); // Outputs: 24

// Question 03 

// ---Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function (p0: number) {
    console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
  },
  arrowFunction: (p0?: number) => {
    console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
  },
};

traditionalVsArrow.traditionalFunction(56); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(56); // Likely undefined, depending on the outer scope's 'this.value'