
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const pendingTaskList = document.getElementById('pending-task-list');
const completedTaskList = document.getElementById('completed-task-list');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task = { text: taskText, done: false };
    tasks.push(task);
    const taskElement = document.createElement('li');
    taskElement.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter(t => t.text !== taskText);
      renderTaskLists();
    });
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completed';
    completeButton.addEventListener('click', () => {
      task.done = true;
      renderTaskLists();
    });
    taskElement.appendChild(deleteButton);
    taskElement.appendChild(completeButton);
    pendingTaskList.appendChild(taskElement);
    taskInput.value = '';
  }
}

function renderTaskLists() {
  pendingTaskList.innerHTML = '';
  completedTaskList.innerHTML = '';
  tasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.text;
    if (task.done) {
      completedTaskList.appendChild(taskElement);
    } else {
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        tasks = tasks.filter(t => t.text !== task.text);
        renderTaskLists();
      });
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Completed';
      completeButton.addEventListener('click', () => {
        task.done = true;
        renderTaskLists();
      });
      taskElement.appendChild(deleteButton);
      taskElement.appendChild(completeButton);
      pendingTaskList.appendChild(taskElement);
    }
  });
}