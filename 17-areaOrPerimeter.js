// WPU Coding Challenge 2024
// day 17/366

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// aturan :
// jika dia persegi panjang, cari luas dgn cara panjang x lebar
// jika dia bujur sangkar, cari kelilingnya

// cara barbar
// const areaOrPerimeter = function (l, w) {
// 	// cek panjang dan lebar
// 	if (l === w) {
// 		return l * w;
// 	} else {
// 		return 2 * (l + w); // jika bukan, kita cari kelilingnya
// 	}
// };

// ternary operator
const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(3, 3));
