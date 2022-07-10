// Lesson 5

const myName = 'Юрий';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'интересен новый опыт';
const numberOfMonth = 1;

let myInfoText = `Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. 
Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript','JAVASCRIPT');
console.log (myInfoText);
console.log ('length:', myInfoText.length);
console.log ('First symbol:', myInfoText[0]);
let lastSymbol = myInfoText.length - 1;
console.log ('Last symbol:', myInfoText[lastSymbol]);

