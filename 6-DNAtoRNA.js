// WPU Coding Challenge 2024
// day 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// cara barbar
// function DNAtoRNA(dna) {
// 	let rna = "";
// 	for (let i = 0; i < dna.length; i++) {
// 		if (dna[i] === "T") {
// 			rna += "U";
// 		} else {
// 			rna += dna[i];
// 		}
// 	}

// 	return rna;
// }

// ========================================================================

// cara 2 : ternary operator with function declaration
// function DNAtoRNA(dna) {
// 	let rna = "";
// 	for (let i = 0; i < dna.length; i++) {
// 		rna += dna[i] === "T" ? "U" : dna[i];
// 	}

// 	return rna;
// }

// ==========================================================================

// cara 3 : split, map, join
// function DNAtoRNA(dna) {
// 	return dna
// 		.split("")
// 		.map(el => (el === "T" ? "U" : el))
// 		.join("");
// }
// split : mengembalikan array dari string / memecah string jadi array

// cara arrrow function
// const DNAtoRNA = dna =>
// 	dna
// 		.split("")
// 		.map(el => (el === "T" ? "U" : el))
// 		.join("");

// ===========================================================================

// cara 4 : regex

// const DNAtoRNA = dna => dna.replace(/T/g, "U");
// /T/g adalah regex untuk mencari semua huruf T dalam string dna

// cara lain : replaceAll
// const DNAtoRNA = dna => dna.replaceAll("T", "U");

// ===========================================================================

// simple version
function DNAtoRNA(dna) {
	return dna.split("T").join("U");
}

console.log(DNAtoRNA("GCAT"));
