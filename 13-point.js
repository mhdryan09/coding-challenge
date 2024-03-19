// WPU Coding Challenge 2024
// day 13/366

//www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// aturan :
// jika menang dapat 3 poin, seri dapat 1 poin, dan kalah dapat 0 poin

// cara barbar : looping manual
// function points(games) {
// 	let result = 0;

// 	// telusuri nilai pada array
// 	for (let i = 0; i < games.length; i++) {
// 		// pada array, kita bisa cek indeks pada elemen nya
// 		// sehingga, jika ada 1:0 maka, 1 adalah indeks 0, : adalah indeks 1, dan 0 adalah indeks 2

// 		// jika indeks 0 > dari indeks 2, maka dapat 3 poin
// 		if (games[i][0] > games[i][2]) {
// 			result += 3;
// 		} else if (games[i][0] === games[i][2]) {
// 			result += 1;
// 		}
// 	}

// 	return result;
// }

// ==============================================================================================

// cara 2 : reduce
function points(games) {
	// [x, _, y] adalah destructuring dari elemen yg berisi [1:0]
	const result = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);
	return result;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
