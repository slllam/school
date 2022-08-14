// Lesson 14

const tasks = [  // Описываем исходный массив с задачами
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript"
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока"
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока"
  }
];

tasks.forEach(element => {
  createNewTask(element.id, element.text );
}) 

function createNewTask(id, text) {   // Создаем в DOM разметку для новой задачи
  const tasksList = document.body.querySelector('.tasks-list');

  const TaskItem = document.createElement("div");
  TaskItem.className = 'task-item';
  TaskItem.dataset.taskId = id;
  tasksList.appendChild(TaskItem);

  const TaskItemMainContainer = document.createElement("div");
  TaskItemMainContainer.className = 'task-item__main-container';
  TaskItem.appendChild(TaskItemMainContainer);

  const TaskItemMainContent = document.createElement("div");
  TaskItemMainContent.className = 'task-item__main-content';
  TaskItemMainContainer.appendChild(TaskItemMainContent);

  const TaskItemForm = document.createElement("form");
  TaskItemForm.className = 'checkbox-form';
  TaskItemMainContent.appendChild(TaskItemForm);

  const TaskItemFormInput = document.createElement("input");
  TaskItemFormInput.className = 'checkbox-form__checkbox';
  TaskItemFormInput.type = 'checkbox';
  TaskItemFormInput.id = id;
  TaskItemForm.appendChild(TaskItemFormInput);

  const TaskItemLabel = document.createElement("label");
  TaskItemLabel.htmlFor = id;
  TaskItemForm.appendChild(TaskItemLabel);

  const TaskItemText = document.createElement("span");
  TaskItemText.className = 'task-item__text';
  TaskItemText.innerText = text;
  TaskItemForm.appendChild(TaskItemText);

  const TaskItemButtonDelete = document.createElement("button");
  TaskItemButtonDelete.className = 'task-item__delete-button default-button delete-button';
  TaskItemButtonDelete.dataset.deleteTaskId = id;
  TaskItemButtonDelete.innerText = 'Удалить';
  TaskItemMainContainer.appendChild(TaskItemButtonDelete);
};

function delErrSpan() {  //Удаляем из DOM строку с текстом ошибки
  const delErrSpan = document.body.querySelector('.error-message-block');
  if (delErrSpan){
    delErrSpan.remove();
  }
};

function createModalConfirmDel(taskId) {  // Создаем и добавляем в DOM блок модального окна для подтверждения удаления задачи
  const modalOverlayDiv = document.createElement('div');
  modalOverlayDiv.className = 'modal-overlay';  //"modal-overlay modal-overlay_hidden"
  document.body.appendChild(modalOverlayDiv);
  
  const deleteModalDiv = document.createElement('div');
  deleteModalDiv.className = 'delete-modal';
  modalOverlayDiv.appendChild(deleteModalDiv);

  const deleteModalQuestion = document.createElement('h3');
  deleteModalQuestion.className = 'delete-modal__question';
  deleteModalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';
  deleteModalDiv.appendChild(deleteModalQuestion);

  const deleteModalButtonsDiv = document.createElement('div');
  deleteModalButtonsDiv.className = 'delete-modal__buttons';
  deleteModalDiv.appendChild(deleteModalButtonsDiv);

  const deleteModalButtonCancel = document.createElement('button');
  deleteModalButtonCancel.className = 'delete-modal__button delete-modal__cancel-button';
  deleteModalButtonCancel.textContent = 'Отмена';
  deleteModalButtonsDiv.appendChild(deleteModalButtonCancel); 

  const deleteModalButtonConfirm = document.createElement('button');
  deleteModalButtonConfirm.className = 'delete-modal__button delete-modal__confirm-button';
  deleteModalButtonConfirm.textContent = 'Удалить';
  deleteModalButtonConfirm.dataset.taskId = taskId;
  deleteModalButtonsDiv.appendChild(deleteModalButtonConfirm); 
};

function editTaskToDelete(taskId) {   // Присваиваем новый номер задачи для кнопки подтверждения удаления  в модальном окне
  const getDeleteButton = document.body.querySelector('.delete-modal__confirm-button');
  getDeleteButton.dataset.taskId = taskId;
};

function createErrSpan (text){   // Создаем строку с текстом ошибки, при неправильном заполнении названия задачи
  delErrSpan(); //сначала проверяем, создано ли ранее сообщение об ошибке, если создано, то удаляем его.
  const taskForm = document.body.querySelector('.create-task-block');
  const errorSpan = document.createElement("span");  
  errorSpan.className = 'error-message-block';
  errorSpan.textContent = text;
  taskForm.appendChild(errorSpan);
}

const newTaskForm = document.querySelector('.create-task-block');
newTaskForm.addEventListener("submit", (event) => {
event.preventDefault();
const textToAdd = String(event.target.elements.taskName.value);
let err = false;
if (textToAdd.length == 0) {    //если текст пустой:
  err = true;
  createErrSpan ('Название задачи не должно быть пустым');
  }
else {                         // если такая задача уже есть
  tasks.forEach(element => {
    if (element.text === textToAdd) {
      err = true;
      createErrSpan ('Задача с таким названием уже существует.');
      return;
      } 
    }) 
};
if (err === false) {    // если задача действительно новая, то: 
  delErrSpan();
  tasks.push({
    id: Date.now(),
    completed: false,
    text: textToAdd   
  });
   createNewTask(Date.now(), textToAdd );  
}
});

const deleteButton = document.querySelector('.tasks-list');   // Описываем поведение кнопок "Удалить"
deleteButton.addEventListener('click', (event) => {
  if (event.target.className == 'task-item__delete-button default-button delete-button') {
    let getDeleteModal = document.querySelector('.modal-overlay');
    if (!getDeleteModal) {
      createModalConfirmDel(event.target.dataset.deleteTaskId);
    }
    else {
      getDeleteModal.className = 'modal-overlay';
      editTaskToDelete(event.target.dataset.deleteTaskId);
    };

    getDeleteModal = document.querySelector('.modal-overlay');    
    getDeleteModal.addEventListener('click', (event) => {
      if (event.target.className == 'delete-modal__button delete-modal__confirm-button') {

        // тогда удаляем задачу из DOM, из массива и скрываем модальное окно
        const taskToDelete = event.target.dataset.taskId;
        const divToDelete = document.querySelectorAll('[data-task-id]');
          divToDelete.forEach(element => {
            if (element.dataset.taskId == taskToDelete && element.tagName == "DIV"){
              element.remove();  // Удаляем задачу из DOM

              tasks.forEach(function callback(currentValue, index) {
                if (currentValue.id == element.dataset.taskId) {
                  console.log('Индекс элемента для удаления:',index);
                  tasks.splice(index);  // Удаляем задачу из массива tasks
                }
            });
            }         
          });
        getDeleteModal.className = 'modal-overlay modal-overlay_hidden';

      }
      else if (event.target.className == 'delete-modal__button delete-modal__cancel-button') {
        getDeleteModal.className = 'modal-overlay modal-overlay_hidden';          // тогда закрываем модальное без удаления задачи
      }
    });
  }
});

let darkTheme = false;
function switchTheme () {  //Переключатель темы "Светлая-Темная"
  if (darkTheme === false) {

    document.body.style.backgroundColor = "#24292E";

    const getTaskItem = document.body.querySelectorAll('.task-item');
    getTaskItem.forEach(element => element.style.color = "#ffffff");

    const getButtons = document.body.querySelectorAll('button');
    getButtons.forEach(element => element.style.border= "1px solid #ffffff");
  }
  else {
    document.body.style.backgroundColor = "initial"; 
    
    const getTaskItem = document.body.querySelectorAll('.task-item');
    getTaskItem.forEach(element => element.style.color = "initial"); 
    
    const getButtons = document.body.querySelectorAll('button');
    getButtons.forEach(element => element.style.border= "none");       
  }  
  darkTheme = !darkTheme; 
};

document.body.addEventListener('keydown', (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    switchTheme ()  
  };
});

