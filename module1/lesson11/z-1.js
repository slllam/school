// Lesson 11 - Вывести дату в формате: 05.05.2001

 const date = new Date();
//const date = new Date('31 December, 2022');
const separator = '-';

function getDateFormat(date, separator) {
	const yyyy = date.getFullYear();
	let mm = date.getMonth() + 1;
	mm = ((mm < 10) ? `0${mm}` : mm); //дописываем ведущий 0
	let dd = date.getDate();	
	dd= ((dd < 10) ? `0${dd}` : dd); //дописываем ведущий 0
return result = String(dd + separator + mm + separator + yyyy); 
};

getDateFormat(date, separator)
console.log(result);





