// Lesson 4
// 1
console.log(Number(" 1 2 3 4 5")); // Будет 12345 или 15 (не угадал)
// 2
console.log(Number("1234 5")); // Будет 1239 (не угадал)
// 3
console.log(Number("12345"));  // Будет 12345 (+)
// 4
console.log(String(false));   // будет false (+)
// 5
console.log(Boolean(0000000)); // будет false (+)
// 6
console.log(Boolean(0.0000001));  // будет true (+)
// 7
console.log(String(undefined));  // будет undefined (+)
// 8
console.log(Number("100f"));  // будет NaN (+)
// 9
console.log(Number("100"));  // будет 100 (+)
// 10
console.log(Number("000001")); // Будет 1 (+)
