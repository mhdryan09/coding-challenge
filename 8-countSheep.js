// WPU Coding Challenge 2024
// day 7/366

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// barbar dgn stirng literal
// const countSheep = function (num) {
// 	let result = "";
// 	for (let i = 1; i <= num; i++) {
// 		result += `${i} sheep...`;
// 	}

// 	return result;
// };

// ==================================================================

// function declaration with map and join
const countSheep = function (num) {
	return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
};

// arrow function
// const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
