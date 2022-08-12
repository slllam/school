// Lesson 14

const tasks = [
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

function createNewTask(id, text) {

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

function delErrSpan() {
  const delErrSpan = document.body.querySelector('.error-message-block');
  if (delErrSpan){
    delErrSpan.remove();
  }
};

function createErrSpan (text){
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
