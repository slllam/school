// Lesson 6

let existingUserLogin = 'the_best_user';
let existingUserPassword  = '12345678';
let userLogin = prompt('ведите Login');
userLogin = userLogin.trim();
let userPassword = prompt('Введитее пароль');
userPassword = userPassword.trim();

if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
}
else 
alert(`Логин и (или) пароль введены неверно!`);
