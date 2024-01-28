// WPU Coding Challenge 2024
// day 1/366

// soal :
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// cara 1 :
// function declaration
// function grow(x) {
//   let result = x[0]; // ambil elemen 1 pada array

//   for(let i = 1; i < x.length; i++) {
//     result = result * x[i]; // result kita timpa dgn hasil dari 1 * 2 dst
//   }

//   return result;
// }
// console.log(grow([1,2,3,4]));

// ======================================================

// cara 2 :
// reduce adalah fungsi yang digunakan untuk melakukan proses array dan mengembalikan 1 nilai setelah proses selesai
// reduce mengembalikan array baru
// accumulator (acc) adalah nilai hasilnya dari proses sebelumnya
// current (cur) adalah elemen array yang sedang diproses 
// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }
// // 1 adalah iniitial value atau nilai awal

// console.log(grow([1,2,3,4]));

// ===================================================

// cara 3 :
// function expression
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
// 1 adalah iniitial value atau nilai awal

console.log(grow([1,2,3,4]));