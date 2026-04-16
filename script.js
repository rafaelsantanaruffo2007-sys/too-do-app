const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString("pt-BR");
}

// DEFINE STATUS
function getStatus(task) {
  const now = new Date();
  const deadline = new Date(task.deadline);

  if (task.completed) {
    return (new Date(task.completedAt) <= deadline)
      ? "completed"
      : "overdue";
  }

  return now > deadline ? "overdue" : "pending";
}

function createTaskElement(task, index) {
  const li = document.createElement("li");

  li.classList.add(task.priority);
  li.classList.add(getStatus(task));

  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    task.completedAt = new Date().toISOString();
    saveTasks();
    renderTasks();
  });

  const content = document.createElement("div");

  const title = document.createElement("span");
  title.textContent = task.text;

  const deadline = document.createElement("small");
  deadline.textContent = "Prazo: " + formatDate(task.deadline);

  content.appendChild(title);
  content.appendChild(deadline);

  label.appendChild(checkbox);
  label.appendChild(content);

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

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const el = createTaskElement(task, index);
    taskList.appendChild(el);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;
  const deadline = deadlineInput.value;

  if (!text || !deadline) return;

  tasks.push({
    text,
    priority,
    deadline,
    completed: false,
    completedAt: null
  });

  taskInput.value = "";
  deadlineInput.value = "";

  saveTasks();
  renderTasks();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();




