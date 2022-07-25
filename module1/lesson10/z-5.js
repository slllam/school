// Lesson 10

function sum(...numbers) {  // при помощи оператора rest все полученные значения преобразуем в массив
   return numbers.reduce((previous, current) => previous + current);
  }
  
  console.log(sum(2, 3)); // 5
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(10, 15, 249, 653, 846)); // 1773
