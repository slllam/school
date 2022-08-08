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
    const tasksList = document.body.querySelector('.tasks-list');
    
    const TaskItem = document.createElement("div");
    TaskItem.className = 'task-item';
    TaskItem.dataset.taskId = element.id;
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
    TaskItemFormInput.id = element.id;
    TaskItemForm.appendChild(TaskItemFormInput);  

    const TaskItemLabel = document.createElement("label");
    TaskItemLabel.htmlFor = element.id;
    TaskItemForm.appendChild(TaskItemLabel);  

    const TaskItemText = document.createElement("span");
    TaskItemText.className = 'task-item__text';
    TaskItemText.innerText = element.text;
    TaskItemForm.appendChild(TaskItemText);    

    const TaskItemButtonDelete = document.createElement("button");
    TaskItemButtonDelete.className = 'task-item__delete-button default-button delete-button';
    TaskItemButtonDelete.dataset.deleteTaskId = element.id;
    TaskItemButtonDelete.innerText = 'Удалить';
    TaskItemMainContainer.appendChild(TaskItemButtonDelete); 
})

