// WPU Coding Challenge 2024
// day 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// cara 1 : looping manual
// function countBy(x, n) {
// 	let z = [];

// 	for (let i = 1; i <= n; i++) {
// 		// masukkan index ke z
// 		z.push(i * x);
// 	}

// 	return z;
// }

// =========================================================================================

// cara : map
// function countBy(x, n) {
// 	return [...Array(n)].map((el, i) => (i + 1) * x);
// }

// =========================================================================================

// cara : arrow function
const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(2, 5));
