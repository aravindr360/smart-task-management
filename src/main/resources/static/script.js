const API_URL = "http://localhost:8080/tasks";

window.onload = loadTasks;

function loadTasks() {

    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => {

            const tableBody = document.getElementById("taskTableBody");
            tableBody.innerHTML = "";

            tasks.forEach(task => {

                tableBody.innerHTML += `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td><span class="badge badge-${task.priority.toLowerCase()}">${task.priority}</span></td>

                    <td>
                        <button class="status-toggle-btn" onclick="toggleTaskStatus(${task.id}, '${task.status}', '${task.title}', '${task.description}', '${task.priority}')">
                            ${task.status === 'Completed' ? '✅ Completed' : '⏳ Pending'}
                        </button>
                    </td>

                    <td>
                        <button onclick="editTask(${task.id}, '${task.title}', '${task.description}', '${task.priority}', '${task.status}')">
                            Edit
                        </button>
                        <button onclick="deleteTask(${task.id})">
                            Delete
                        </button>
                    </td>
                </tr>
                `;
            });
        });
}

function saveTask() {

    const id = document.getElementById("taskId").value;

    const task = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value,
        status: document.getElementById("status").value
    };

    if (task.title.trim() === "") {
        alert("Title is required");
        return;
    }

    if (id) {

        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(() => {
                alert("Task updated successfully!");
                clearForm();
                loadTasks();
            });

    } else {

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(() => {
                alert("Task saved successfully!");
                clearForm();
                loadTasks();
            });
    }
}

function editTask(id, title, description, priority, status) {
    document.getElementById("taskId").value = id;
    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
    document.getElementById("priority").value = priority;
    document.getElementById("status").value = status;
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
            .then(() => loadTasks());
    }
}

// ✅ NEW: Toggle status between Pending and Completed in one click
function toggleTaskStatus(id, currentStatus, title, description, priority) {

    const newStatus = (currentStatus === "Pending") ? "Completed" : "Pending";

    const updatedTask = {
        title: title,
        description: description,
        priority: priority,
        status: newStatus
    };

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTask)
    })
        .then(() => {
            loadTasks(); // Reload table with updated status
        });
}

function clearForm() {
    document.getElementById("taskId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}