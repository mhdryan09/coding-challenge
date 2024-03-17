// WPU Coding Challenge 2024
// day 12/366

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// cara 1 : looping
// function arrayPlusArray(arr1, arr2) {
// 	let total = 0;

// 	// looping untuk arr1
// 	for (let i = 0; i < arr1.length; i++) {
// 		total += arr1[i];
// 	}

// 	// looping untuk arr2
// 	for (let i = 0; i < arr2.length; i++) {
// 		total += arr2[i];
// 	}

// 	return total;
// }

// ============================================

// cara 2 : arguments
// kita cek arguments dengan indeks lalu kita looping
// function arrayPlusArray() {
// 	let total = 0;

// 	// looping array terluar yaitu ada 2 array
// 	for (let i = 0; i < arguments.length; i++) {
// 		// looping di dalam masing masing array
// 		for (let j = 0; j < arguments[i].length; j++) {
// 			total += arguments[i][j];
// 		}
// 	}

// 	return total;
// }

// ============================================

// cara 3 : spread operator dan reduce
function arrayPlusArray(arr1, arr2) {
	return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
