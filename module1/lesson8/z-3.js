// Lesson 8

// 1. Сначала простой вариант:
/*
let inputNumber = Number(prompt(`Введите целое неотрицательное число`));
if (inputNumber >= 0 && Number.isInteger(inputNumber)) {
	console.log('целое неотрицательное!');
	getDivisorsCount(inputNumber);
}
else {
	console.log('не целое или неотрицательное!');	
	alert(`Вы ввели ${inputNumber}.Число должно быть целым и больше нуля!`);	
}

function getDivisorsCount(number) {
	let result = 0;
	for (let i = 1; i <= number; i++) {
		if (number % i == 0) {	
			result += 1;	
		}	
	}		
return(result);
}
console.log(getDivisorsCount(inputNumber));
*/

// 2. А теперь замудреный вариант с callback-функцией:
let inputNumber = Number(prompt(`Введите целое неотрицательное число`));
if (inputNumber >= 0 && Number.isInteger(inputNumber)) {
	getDivisorsCount(inputNumber, displayCount);
}
else {
	alert(`Вы ввели ${inputNumber}.Число должно быть целым и больше нуля!`);	
}

function getDivisorsCount(number, callback) {
	let result = 0;
	for (let i = 1; i <= number; i++) {
		if (number % i == 0) {	
			result += 1;	
		}	
	}		
	callback(result);
}

function displayCount(count) {
	console.log(`Количество делителей = ${count}`);	
}

