// Lesson 9

const numbers = [10, 4, 100, -5, 54, 2];

//1. for
let sum1 = 0;
for (let i = 0; i <= (numbers.length - 1); i++) {
	sum1 += numbers[i] ** 3;
}
console.log(`for: `, sum1);

//2. for...of
let sum2 = 0;
for (const item of numbers) {
	sum2 += item ** 3;
};
console.log(`for...of: `, sum2);

//3. forEach()
let sum3 = 0;
numbers.forEach((item) => {
	sum3 += item ** 3;
});
console.log(`forEach(): `, sum3);

//4. reduce
const sum4 = numbers.reduce((acc,item) => {
	return acc += item ** 3;
},0);
console.log(`reduce: `, sum4);