// WPU Coding Challenge 2024
// day 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// cara 1 : barbar
// function hero(bullets, dragons) {
// 	// jika peluru / 2 lebih besar dari jumlah naga
// 	if (bullets / 2 >= dragons) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(hero(10, 5));

// cara 2 : ternary operator
// function hero(bullets, dragons) {
// 	// return bullets / 2 >= dragons ? true : false;
// 	return bullets / 2 >= dragons;
// }
// console.log(hero(10, 5));

// cara 3 : arrow function
const hero = (bullets, dragons) => bullets / 2 >= dragons;
console.log(hero(10, 5));

// ====================================================================

// alternative :
// function hero(bullets, dragons) {
// 	return bullets >= dragons * 2;
// }
