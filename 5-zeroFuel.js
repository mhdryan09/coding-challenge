// WPU Coding Challenge 2024
// day 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// cara 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // jika jarak ke pom bensin / bensin <= sisa bensin
//   return  distanceToPump / mpg <= fuelLeft
// };
// console.log(zeroFuel(100, 50, 1));

// cara 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// 	// sisa bensin * sisa bensin >= jarak ke pom bensin
// 	return fuelLeft * mpg >= distanceToPump;
// };
// console.log(zeroFuel(100, 50, 1));

// cara 3 : one liner
const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;
console.log(zeroFuel(100, 50, 1));
