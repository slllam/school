// Lesson 11 - создать функцию, которая будет добавлять переданное количество дней к переданной дате

const date = new Date('24 July, 2022');
const days = 30;

function addDays(date, days) {
	const newDate = date.getTime();
	const newDays = days * 24 * 60 * 60 * 1000;
	return new Date(newDate + newDays);
}
result = addDays(date,days);
console.log(result);	
