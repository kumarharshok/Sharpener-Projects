interface Task {
  id: number;
  name: string;
  dueDate: string;
  completed: boolean;
}

let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

const form = document.getElementById("task-form") as HTMLFormElement;
const taskInput = document.getElementById("task-name") as HTMLInputElement;
const dateInput = document.getElementById("due-date") as HTMLInputElement;
const list = document.getElementById("task-list") as HTMLUListElement;

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(task.id);

    const span = document.createElement("span");
    span.textContent = `${task.name} (Due: ${task.dueDate})`;
    if (task.completed) span.style.textDecoration = "line-through";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(task.id);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

function addTask(name: string, dueDate: string) {
  const newTask: Task = {
    id: Date.now(),
    name,
    dueDate,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

function toggleTask(id: number) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id: number) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value, dateInput.value);
  form.reset();
});

renderTasks();
