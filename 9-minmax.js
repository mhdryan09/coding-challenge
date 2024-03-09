// WPU Coding Challenge 2024
// day 9/366

// https://www.codewars.com/kata/577a98a6ae28071780000989

// versi barbar
// const min = function (list) {
// 	let minValue = list[0]; // menyimpan angka terkecil
// 	for (let i = 1; i < list.length; i++) {
// 		if (minValue > list[i]) {
// 			// mengecek apakah angka terkecil lebih kecil dari angka selanjutnya
// 			minValue = list[i]; // jika iya, kita update angka terkecil
// 		}
// 	}
// 	return minValue;
// };

// const max = function (list) {
// 	let maxValue = list[0]; // menyimpan angka terbesar
// 	for (let i = 1; i < list.length; i++) {
// 		if (maxValue < list[i]) {
// 			// mengecek apakah angka terbesar lebih kecil dari angka selanjutnya
// 			maxValue = list[i]; // jika iya, kita update angka terbesar
// 		}
// 	}
// 	return maxValue;
// };

// =========================================================================================

// urutkan array lalu cari indeks terbesar/terkecil
// const min = list => list.sort((a, b) => a - b)[0];
// const max = list => list.sort((a, b) => b - a)[0];

// =========================================================================================

// (...) adalah spread operator, mengubah [1,2,3,4,5] menjadi 1,2,3,4,5

// min dan max
const min = list => Math.min(...list);
const max = list => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
