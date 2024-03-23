// WPU Coding Challenge 2024
// day 15/366

//https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// cara 1 : Looping
// function sumArray(array) {
// 	// 1. cek kondisi apabila dia null atau 1 atau 2 elemen
// 	if (array === null || array.length <= 2) return 0;
// 	// 2. urutkan lalu ambil nilai 1 dan terakhir dan keluarin, nilai sisanya baru ditambahkan
// 	const sorted = array.sort((a, b) => a - b);
// 	// telusuri nilai pada array
// 	let result = 0;
// 	for (let i = 1; i < sorted.length - 1; i++) {
// 		result += sorted[i];
// 	}
// 	return result;
// }

// console.log(sumArray([6, 2, 1, 8, 10]));

// =====================================================================================

// cara 2 : Reduce

// function sumArray(array) {
// 	// 1. cek kondisi apabila dia null atau 1 atau 2 elemen
// 	if (array === null || array.length <= 2) return 0;
// 	return array
// 		.sort((a, b) => a - b) // urutkan dari terkecil ke terbesar
// 		.slice(1, -1) // lalu ambil nilai 1 dan terakhir dan keluarin
// 		.reduce((acc, curr) => acc + curr); //  nilai sisanya baru ditambahkan
// }

// console.log(sumArray([6, 2, 1, 8, 10]));

// =====================================================================================

// cara 3 : Ternary

function sumArray(array) {
	// 1. cek kondisi apabila dia null atau 1 atau 2 elemen
	return array == null || array.length <= 2
		? 0
		: array
				.sort((a, b) => a - b) // urutkan dari terkecil ke terbesar
				.slice(1, -1) // lalu ambil nilai 1 dan terakhir dan keluarin
				.reduce((acc, curr) => acc + curr); //  nilai sisanya baru ditambahkan
}

console.log(sumArray([6, 2, 1, 8, 10]));
