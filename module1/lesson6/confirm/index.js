// Lesson 6, Задание 3.

let question1 = confirm('JavaScript появился в 1995 году?');
if (question1 === true) {
    alert('Верно');
}
else {
    alert('JavaScript появился в 1995 году');
}

let question2 = confirm('Спецификация JavaScript называется ECMAScript?');
if (question2 === true) {
    alert('Верно');
}
else {
    alert('Спецификация JavaScript называется ECMAScript');
}

let question3 = confirm('JavaScript был создан за 1 месяц?');
if (question3 === false) {
    alert('Верно');
}
else {
    alert('JavaScript был создан за 10 дней');
}