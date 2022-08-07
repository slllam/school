// Lesson 14

//Вариант №1
document.body.innerHTML = '<form class="create-user-form"></form>';
const contentInForm = document.body.querySelector('.create-user-form');
const addContent1 = '<label>Имя<input type="text" name="userName" placeholder="Введите ваше имя" /></label>';
const addContent2 = '<label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль" /></label>';
const addContent3 = '<button type="submit">Подтвердить</button>';
contentInForm.innerHTML = addContent1 + addContent2 + addContent3;

//Вариант №2
const newForm = document.createElement("form");
newForm.className = 'create-user-form';
document.body.appendChild(newForm);

const label1 = document.createElement("label");
label1.innerText = 'Имя';
newForm.appendChild(label1);

const label1Input = document.createElement("input");
label1Input.type = 'text';
label1Input.name = 'userName';
label1Input.placeholder = 'Введите ваше имя';
label1.appendChild(label1Input);

const label2 = document.createElement("label");
label2.innerText = 'Пароль';
newForm.appendChild(label2);

const label2Input = document.createElement("input");
label2Input.type = 'password';
label2Input.name = 'password';
label2Input.placeholder = 'Придумайте Пароль';
label2.appendChild(label2Input);

const newButton = document.createElement("button");
newButton.type = 'submit';
newButton.innerText = 'Подтвердить';
newForm.appendChild(newButton);