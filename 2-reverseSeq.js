// WPU Coding Challenge 2024
// day 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// cara 1 : looping
// const reverseSeq = n => {
//   const result = []; // create an array
//   for (let i = n; i >= 1; i--) {
//     result.push(i); // push the value of i into the array
//   }
// 	return result;
// };
// console.log(reverseSeq(5));

// ====================================================================================


// cara 2 : fill, map, reverse
// const reverseSeq = n => {
// 	return Array(n)
// 		.fill(0)
// 		.map((el, i) => i + 1)
// 		.reverse();
// };
// console.log(reverseSeq(5));

// Array(n) artinya create an array of length n
// fill adalah fungsi yang digunakan untuk mengisi array

// Array(n).fill(); sama seperti [...Array(n)]
// map artinya memetakan setiap elemen pada array menggunakan fungsi tertentu
// reverse artinya membalikkan array

// ====================================================================================


// cara 3 :
const reverseSeq = n => [...Array(n)].map((el, i) => n - i);
console.log(reverseSeq(5));
