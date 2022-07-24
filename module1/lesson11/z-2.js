// Lesson 11 - возвращать количество дней до следующего дня рождения

const nextBirthdayDate = new Date('19 may, 2023');  // Указываем дату следующего ДР

function getDaysBeforeBirthday(nextBirthdayDate) {
	const currentDate = new Date();
	let difference = nextBirthdayDate.getTime() - currentDate.getTime();
	function convertMsToDays(difference){
		const convertedDifference = Math.round(difference / 1000 / 60 / 60 / 24);
		return convertedDifference;
	}
	const convertedDifference = convertMsToDays(difference);
	return convertedDifference;
}
const daysToNextBirthday = getDaysBeforeBirthday(nextBirthdayDate);
console.log(`До следующего ДР осталось ${daysToNextBirthday} дней`);
