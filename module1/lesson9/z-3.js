// Lesson 9

const coffees = ["Latte", "Cappuccino", "Americano"];
const convertedCoffees = coffees.map((item) => {
  return item.toUpperCase();
});

const coffeeName = prompt(`Поиск кофе по названию:`);
coffeeNameConv = coffeeName.toUpperCase();

const foundIndex = convertedCoffees.findIndex((item, index) => {
	return item === coffeeNameConv; 
})

if (foundIndex == -1) {
	alert(`К сожалению, такого вида кофе нет в наличии`);
}
else {
	//делаем index + 1, так как люди обычно ведут счет не с 0, а с 1.
	alert(`Держите ваш любимый кофе ${coffees[foundIndex]}. Он ${foundIndex+1} по популярности в нашей кофейне.`);
}

