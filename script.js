let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function completeTask(button) {
    let listItem = button.parentNode;
    listItem.classList.toggle("completed");
}

function removeTask(button) {
    let listItem = button.parentNode;
    taskList.removeChild(listItem);
}
