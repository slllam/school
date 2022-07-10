// Lesson 6
  
// Вариант с while
let i = 0;
while (i < 3) {
    let newStudent = prompt("Введите имя нового студента!");
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
      }
    i += 1;   
}

//вариант с do...while
let j = 0;
do {
    let newStudent2 = prompt("Введите имя нового студента!");
    if (newStudent2) {
        newStudent2 = newStudent2.trim();
        alert(`Добро пожаловать, ${newStudent2}!`);
      }
    j += 1;
} while (j < 3);