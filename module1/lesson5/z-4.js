// Lesson 5

// Вариант 1 с const (компактный, но плохо читаемый)
const userName = prompt('Как вас зовут?');
const userAge = prompt('Сколько вам лет?');
alert(`Вас зовут ${userName.toUpperCase().trim()} и вам ${Number(userAge.trim())} лет`);

// Вариант 2 с let (нормально читаемый)
let userName2 = prompt('Как вас зовут?');
userName2 = userName2.toUpperCase();
userName2 = userName2.trim();

let userAge2 = prompt('Сколько вам лет?');
userAge2 = Number(userAge2.trim());

alert(`Вас зовут ${userName2} и вам ${userAge2} лет`);