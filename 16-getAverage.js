// WPU Coding Challenge 2024
// day 16/366

//https://www.codewars.com/kata/563e320cee5dddcf77000158

// cari rata rata dari array

// cara 1 : looping
// function getAverage(marks) {
// 	let total = 0;
// 	for (let i = 0; i < marks.length; i++) {
// 		total += marks[i];
// 	}
// 	return Math.floor(total / marks.length);
// }

// console.log(getAverage([1, 2, 3, 4, 5]));

// =========================================================

// cara 2 : reduce
function getAverage(marks) {
	return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));
