// WPU Coding Challenge 2024
// day 18/366

// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// cara barbar
// function greet(name, owner) {
// 	if (name === owner) {
// 		return "Hello boss";
// 	} else if (name !== owner) {
// 		return "Hello guest";
// 	}
// }

// ============================================================

// else
// function greet(name, owner) {
// 	if (name === owner) {
// 		return "Hello boss";
// 	} else {
// 		return "Hello guest";
// 	}
// }

// ============================================================

// ternary operator
// function greet(name, owner) {
// 	return name === owner ? "Hello boss" : "Hello guest";
// }

// ============================================================

// arrow function
const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

console.log(greet("Daniel", "Daniel"));
