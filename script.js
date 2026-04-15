
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const addButton = document.querySelector("button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Salvar no localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Criar elemento de tarefa
function createTaskElement(task, index) {
  const li = document.createElement("li");
  li.classList.add(task.priority);

  if (task.completed) {
    li.classList.add("completed");
  }

  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  checkbox.addEventListener("change", () => {
    tasks[index].completed = checkbox.checked;
    saveTasks();
    renderTasks();
  });

  const span = document.createElement("span");
  span.textContent = task.text;

  label.appendChild(checkbox);
  label.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  });

  li.appendChild(label);
  li.appendChild(deleteBtn);

  return li;
}

// Renderizar lista
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = createTaskElement(task, index);
    taskList.appendChild(taskElement);
  });
}

// Adicionar tarefa
function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (!text) return;

  tasks.push({
    text,
    priority,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
  renderTasks();
}

// Evento do botão
addButton.addEventListener("click", addTask);

// Enter também adiciona tarefa
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Inicialização
rende


