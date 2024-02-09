// WPU Coding Challenge 2024
// day 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// cara 1 : join()
// function smash(words) {
// 	return words.join(" ");
// }
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

// join adalah method yang menggabungkan semua elemen pada array dengan delimeter(pembatas)

// =================================================

// cara 2 : arrow function
// const smash = words => words.join(" ");
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

// =================================================

// cara 3 : barbar
function smash(words) {
	let result = "";
	for (let i = 0; i < words.length; i++) {
		result += words[i];

		// jika indeks (saat ini) tidak sama dengan indeks terakhir, kasih spasi
		if (i !== words.length - 1) {
			result += " ";
		}
	}

	return result;
}
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
