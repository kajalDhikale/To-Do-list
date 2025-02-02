function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('tasks-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
