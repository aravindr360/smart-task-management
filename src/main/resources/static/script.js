const API_URL = "http://localhost:8080/tasks";

window.onload = loadTasks;

function loadTasks(){

    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => {

            const tableBody =
                document.getElementById("taskTableBody");

            tableBody.innerHTML = "";

            tasks.forEach(task => {

                tableBody.innerHTML += `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td>${task.priority}</td>
                    <td>${task.status}</td>

                    <td>
                        <button onclick="editTask(${task.id},
                        '${task.title}',
                        '${task.description}',
                        '${task.priority}',
                        '${task.status}')">

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
function saveTask(){

    const id =
        document.getElementById("taskId").value;

    const task = {

        title:
        document.getElementById("title").value,

        description:
        document.getElementById("description").value,

        priority:
        document.getElementById("priority").value,

        status:
        document.getElementById("status").value
    };

    // 📍 PUSH STEP 3 HERE (Validation / The Bouncer)
    if (task.title.trim() === "") {
        alert("Title is required");
        return; // Stops the function immediately
    }

    if(id){

        fetch(`${API_URL}/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(task)
        })
            .then(() => {
                // 📍 PUSH STEP 2 (Update Message) HERE
                alert("Task updated successfully!");
                clearForm();
                loadTasks();
            });

    }else{

        fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(task)
        })
            .then(() => {
                // 📍 PUSH STEP 2 (Save Message) HERE
                alert("Task saved successfully!");
                clearForm();
                loadTasks();
            });
    }
}

function editTask(
    id,title,description,priority,status){

    document.getElementById("taskId").value=id;

    document.getElementById("title").value=title;

    document.getElementById("description").value=
        description;

    document.getElementById("priority").value=
        priority;

    document.getElementById("status").value=
        status;
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
            .then(() => loadTasks());
    }
}

function clearForm(){

    document.getElementById("taskId").value="";

    document.getElementById("title").value="";

    document.getElementById("description").value="";
}