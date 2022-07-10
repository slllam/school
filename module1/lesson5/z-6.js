// Lesson 5

let userText = prompt('Введите текст');
let wordFromText = prompt('Введи слово из текста');
userText = userText.trim();
wordFromText = wordFromText.trim();
let indexOfWord = userText.indexOf(wordFromText);
userText = userText.slice(0,indexOfWord);
alert(`Результат: ${userText}`);

