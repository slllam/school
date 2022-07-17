// Lesson 9

const maxElement = 10; // максимальный элемент для итератора
let myArray = [];

function getSumOfSequence(maxElement) {
	for (let i = 1; i <= maxElement; i++) {
		myArray.push(i);
	}
	let result = (myArray[0] + myArray[(myArray.length - 1)]);
	return(result);
}

alert(getSumOfSequence (maxElement));
