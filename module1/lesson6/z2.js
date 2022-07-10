// Lesson 6

const question1 = 'Сколько будет 2 + 2?';
const answer1 = 4;
const question2 = 'Сколько будет 2 * 2?';
const answer2 = 4;
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const answer3 = 1;
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const answer4 = 12;
const question5 = 'Сколько будет 2 + 2 * 2?';
const answer5 = 6;
let correctAnswers = 0;
let incorrectAnswers = 0;

let userAnswer1 = Number(prompt(question1));
if (userAnswer1 === answer1) {
    correctAnswers +=1;
    alert(`Ответ Верный`);
}
else {
    incorrectAnswers +=1;
    alert(`Ответ Неверный`);
}

let userAnswer2 = Number(prompt(question2));
if (userAnswer2 === answer2) {
    correctAnswers +=1;
    alert(`Ответ Верный`);
}
else {
    incorrectAnswers +=1;
    alert(`Ответ Неверный`);
}

let userAnswer3 = Number(prompt(question3));
if (userAnswer3 === answer3) {
    correctAnswers +=1;
    alert(`Ответ Верный`);
}
else {
    incorrectAnswers +=1;
    alert(`Ответ Неверный`);
}

let userAnswer4 = Number(prompt(question4));
if (userAnswer4 === answer4) {
    correctAnswers +=1;
    alert(`Ответ Верный`);
}
else {
    incorrectAnswers +=1;
    alert(`Ответ Неверный`);
}

let userAnswer5 = Number(prompt(question5));
if (userAnswer5 === answer5) {
    correctAnswers +=1;
    alert(`Ответ Верный`);
}
else {
    incorrectAnswers +=1;
    alert(`Ответ Неверный`);
}

alert(`Конец теста! Правильные ответы: ${correctAnswers}; Неправильные ответы: ${incorrectAnswers}.`);