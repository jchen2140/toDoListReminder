var tasks = []; // Array to store tasks

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var statusDropdown = document.getElementById("statusDropdown");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a task object with the name and selected status
    var task = {
        name: taskInput.value,
        status: statusDropdown.value
    };

    tasks.push(task); // Add task to the array

    renderTasks(); // Render tasks on the page
    taskInput.value = ""; // Clear input field
}

function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing task list

    tasks.forEach(function(task, index) {
        var li = document.createElement("li");
        li.innerText = task.name + " - " + task.status;
        li.addEventListener("click", function() {
            // Update task status
            if (task.status === "haven't started") {
                task.status = "in progress";
            } else if (task.status === "in progress") {
                task.status = "finished";
            } else {
                task.status = "haven't started";
            }
            renderTasks(); // Re-render tasks after status update
        });

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();
            tasks.splice(index, 1); // Remove task from array
            renderTasks(); // Re-render tasks after deletion
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
