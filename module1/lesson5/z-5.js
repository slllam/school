// Lesson 5

let userString = prompt('Введи текст для обрезки');
userString = userString.trim();
let startSliceIndex = Number(prompt('Введи индекс, с которого нужно начать обрезку строки'));
let endSliceIndex = Number(prompt('Введи индекс, которым нужно закончить обрезку строки'));

if (endSliceIndex < startSliceIndex) {  //P.s. прошу прощения за дополнительную проверку не по заданию =)
    endSliceIndex = undefined;
}
userString = userString.slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${userString}`);

