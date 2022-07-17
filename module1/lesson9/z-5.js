// Lesson 9

let clientsEstimations = [];

function askClientToGiveEstimation() {
	let rating = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`));
	clientsEstimations.push(rating);
	return rating;
}

for (let i = 0; i < 5; i++) {
	askClientToGiveEstimation();
}

const filteredGoodEstimations = clientsEstimations.filter((item) => {
	return item > 5;
})

const filteredBadEstimations = clientsEstimations.filter((item) => {
	return item <= 5;
})

const goodEstimations = filteredGoodEstimations.length;
const notGoodEstimations = filteredBadEstimations.length;

alert (`Всего положительных оценок: ${goodEstimations}`);
alert (`Всего отрицательных оценок: ${notGoodEstimations}`);

