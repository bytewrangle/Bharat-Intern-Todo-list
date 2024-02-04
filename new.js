document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("taskInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var span = document.createElement("span");
    var deleteBtn = document.createElement("span");
    var doneBtn = document.createElement("span");

    span.textContent = taskInput.value;
    deleteBtn.innerHTML = "&times;";
    doneBtn.innerHTML = "&#10003;";
    deleteBtn.className = "delete-btn";
    doneBtn.className = "done-btn";

    deleteBtn.addEventListener("click", function() {
        var deletedText = span.textContent;
        li.remove();
        saveTasks();
        showDeletedText(deletedText);
    });

    doneBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    saveTasks();
}

function showDeletedText(text) {
    var deletedTextContainer = document.getElementById("deletedTextContainer");
    deletedTextContainer.textContent = "Recently Deleted: " + text;
}

function saveTasks() {
    var taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}
