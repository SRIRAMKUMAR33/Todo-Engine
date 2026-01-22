const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalEl = document.getElementById("total");
const doneEl = document.getElementById("done");
const leftEl = document.getElementById("left");

let tasks = [];

function addTask() {
  if (!taskInput.value.trim()) return;

  tasks.push({ text: taskInput.value, completed: false });
  taskInput.value = "";
  render();
}

function toggleTask(i) {
  tasks[i].completed = !tasks[i].completed;
  render();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  render();
}

function render() {
  taskList.innerHTML = "";
  let done = 0;

  tasks.forEach((task, i) => {
    if (task.completed) done++;

    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button class="done" onclick="toggleTask(${i})">✓</button>
        <button class="delete" onclick="deleteTask(${i})">✕</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  totalEl.textContent = tasks.length;
  doneEl.textContent = done;
  leftEl.textContent = tasks.length - done;
}
// Add task when Enter key is pressed
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
