// WPU Coding Challenge 2024
// day 14/366

//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// rules :
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// cara 1 : if else
// function getGrade(s1, s2, s3) {
// 	const score = (s1 + s2 + s3) / 3;

// 	// cek kondisi dari terbawah
// 	if (score < 60) return "F";
// 	if (score < 70) return "D";
// 	if (score < 80) return "C";
// 	if (score < 90) return "B";
// 	return "A";
// }
// console.log(getGrade(95, 90, 93));

// cara 2 : reduce dan ini sudah dinamis
function getGrade(...s) {
	const score = s.reduce((acc, curr) => (acc + curr) / s.length);

	// cek kondisi dari terbawah
	if (score < 60) return "F";
	if (score < 70) return "D";
	if (score < 80) return "C";
	if (score < 90) return "B";
	return "A";
}
console.log(getGrade(95, 90, 93));
