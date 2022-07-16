// Lesson 8

const getSumOfNumbers = (number, type = 'odd') => {
	let sum = 0;
	for (let i = 0; i <= number; i++) {
		if (type == 'odd' && (i % 2 == 0)) {    	// суммируем только четные числа
			sum += i;
		} 
		else if (type == 'even' && (i % 2 != 0)) {   // суммируем только нечетные числа
			sum += i;
		}
		else if (type == '') {						// суммируем все числа
			sum += i;		
		}
	}
	return(sum);
};

let inputNumber = Number(prompt(`Введите число от 1 до 10`));
let inputType = prompt(`Введите тип значений для расчета: odd или even или оставьте поле пустым для обработки всех значений`);
console.log(`Вы ввели значение ${inputNumber}, тип значений ${inputType}, результат равен ${getSumOfNumbers(inputNumber, inputType)}`);
