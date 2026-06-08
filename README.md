# 📋 Smart Task Management System

A full-stack web application to create, manage, track, and complete daily tasks — built as part of the **4-Day Build Challenge** for **Tanjer Info Systems** (June 2026).

---

## 🛠️ Technologies Used

| Layer | Technology |
|---|---|
| Backend | Java 21, Spring Boot, Spring Data JPA, Hibernate |
| Database | MySQL |
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6) |
| Version Control | Git & GitHub |

---

## 🚀 Features Implemented

- **Create Tasks** — Add a new task with title, description, priority, and status
- **View All Tasks** — All tasks are loaded dynamically from the MySQL database
- **Edit Tasks** — Update any task details using the Edit button
- **Delete Tasks** — Remove tasks with a confirmation prompt
- **Task Priority Badges** — Color-coded badges: 🔴 High, 🟠 Medium, 🟢 Low
- **Quick Status Toggle** — Click ⏳ Pending to instantly switch to ✅ Completed (and back) without opening the edit form
- **Form Validation** — Prevents saving a task without a title
- **REST API Backend** — Full CRUD operations via Spring Boot REST endpoints
- **MySQL Persistence** — All data is permanently stored in a relational database

---

## 📁 Project Structure

```
smart-task-management/
│
├── src/
│   └── main/
│       ├── java/com/example/taskmanagement/
│       │   ├── model/          → Task entity (maps to MySQL table)
│       │   ├── repository/     → JPA repository (database queries)
│       │   ├── service/        → Business logic layer
│       │   └── controller/     → REST API endpoints
│       │
│       └── resources/
│           ├── application.properties  → DB config
│           └── static/
│               ├── index.html
│               ├── style.css
│               └── script.js
│
└── pom.xml
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/{id}` | Get task by ID |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/{id}` | Update existing task |
| DELETE | `/tasks/{id}` | Delete task |

---

## ▶️ How to Run the Project

### Prerequisites
- Java JDK 21 installed
- MySQL installed and running
- IntelliJ IDEA or VS Code with Java Extension Pack

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/smart-task-management.git
   cd smart-task-management
   ```

2. **Create the MySQL database**
   ```sql
   CREATE DATABASE smart_task_db;
   ```

3. **Configure database credentials**

   Open `src/main/resources/application.properties` and update:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/smart_task_db
   spring.datasource.username=root
   spring.datasource.password=YOUR_PASSWORD
   spring.jpa.hibernate.ddl-auto=update
   ```

4. **Run the application**

   Open the project in IntelliJ IDEA → Click the **Run** button on `SmartTaskManagementApplication.java`

5. **Open in browser**
   ```
   http://localhost:8080/index.html
   ```

---

## 🧠 Challenges Faced & What I Learned

**Challenge 1 — Setting up Spring Boot for the first time**
- Spring Boot has a lot of configuration files and annotations like `@RestController`, `@Entity`, and `@Autowired` that were new to me. Understanding what each one does and why it's needed took time and practice.

**Challenge 2 — Connecting Spring Boot to MySQL**
- Configuring `application.properties` correctly — getting the database URL, username, password, and JPA settings right — was confusing at first. I had to debug connection errors carefully to fix it.

**Challenge 3 — Frontend to Backend Communication**
- Making JavaScript `fetch()` calls communicate with the Spring Boot REST API was a new concept. I learned how async/await works, what JSON is, and how HTTP methods (GET, POST, PUT, DELETE) map to CRUD operations.

**Challenge 4 — Status Toggle Feature**
- Instead of making the user open the full Edit form just to mark a task complete, I built a one-click toggle button. This taught me how to send a PUT request directly from a button click with only the changed field.

**What I Learned Overall**
- How a full-stack application works end-to-end: MySQL → Spring Boot → REST API → JavaScript → Browser
- The MVC (Model-View-Controller) architecture pattern
- How JPA and Hibernate automatically create and manage database tables from Java classes
- Git workflow: committing regularly with meaningful messages

---

## 📸 Screenshots

<img width="1468" height="298" alt="image" src="https://github.com/user-attachments/assets/7a146716-71b0-4957-9d5f-509dffdff570" />



---

## 👨‍💻 Author 

**Aravind R**
Built for Tanjer Info Systems — 4-Day Build Challenge, June 2026
