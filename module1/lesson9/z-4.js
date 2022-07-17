// Lesson 9

const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const convertedPrices = prices.map((item) => {
	return (item + 0.5);
});

coffees.forEach((item, index) => {
console.log(`Кофе ${item} сейчас стоит ${convertedPrices[index]} евро`);
});

