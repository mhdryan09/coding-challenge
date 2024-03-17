// WPU Coding Challenge 2024
// day 11/366

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// cara barbar
// const rps = (p1, p2) => {
// 	if (p1 === p2) return "Draw!";
// 	if (p1 === "rock" && p2 === "scissors") {
// 		return "Player 1 won!";
// 	} else if (p1 === "scissors" && p2 === "paper") {
// 		return "Player 1 won!";
// 	} else if (p1 === "paper" && p2 === "rock") {
// 		return "Player 1 won!";
// 	} else {
// 		return "Player 2 won!";
// 	}
// };

//  cara 2 : pakai ||
// const rps = (p1, p2) => {
// 	if (p1 === p2) return "Draw!";
// 	if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock")) {
// 		return "Player 1 won!";
// 	} else {
// 		return "Player 2 won!";
// 	}
// };

// cara 3 pakai Object
const rps = (pemain1, pemain2) => {
	// fungsi ini mengambil 2 parameter, yaitu pemain 1 dan pemain 2

	// rules adalah sebuah object yang berisi aturan permainan rock paper scissors
	const rules = {
		// jika pemain 1 memilih batu, maka pemain 2 tidak dapat memilih jenis batu, tetapi dapat memilih kertas
		rock: "scissors",
		// jika pemain 1 memilih kertas, maka pemain 2 tidak dapat memilih kertas, tetapi dapat memilih batu
		scissors: "paper",
		// jika pemain 1 memilih kertas, maka pemain 2 tidak dapat memilih batu, tetapi dapat memilih kertas
		paper: "rock",
	};

	if (pemain1 === pemain2) return "Draw!";
	// rules[pemain1] => ambil key dari object rules, yang artinya akan mengembalikan valuenya
	// lalu cek value tersebut dengan nilai dari pemain 2 yg dikirim dari function
	else if (rules[pemain1] === pemain2) return "Player 1 won!";
	else return "Player 2 won!"; // return nilai "Player 2 won!"
};

console.log(rps("rock", "paper"));
