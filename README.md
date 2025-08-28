# Full-Stack To-Do Application

This is a full-stack to-do application built with a modern technology stack, including a Java/Spring backend, a React/TypeScript frontend, and a comprehensive automated testing suite.

## Tech Stack

*   **Backend:** Java, Spring Boot, Spring Data JPA, Maven
*   **Frontend:** React, TypeScript, Axios
*   **Database:** MySQL
*   **Testing:** JUnit (Backend Integration), Cypress (Frontend E2E)
*   **CI/CD:** GitHub Actions

## Features

*   Create, view, and delete to-do items.
*   Secure backend API with REST endpoints.
*   User-friendly interface built with React.
*   Automated backend integration tests to ensure API reliability.
*   End-to-end tests that simulate real user interactions.
*   CI/CD pipeline that automates the build and test process on every push to `main`.

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/grrttg/sdet-portfolio-project.git
    cd sdet-portfolio-project
    ```
2.  **Set up the database:**
    *   Ensure you have a local MySQL instance running.
    *   The backend will create the `todo_db` database automatically.
    *   You will need to set the `DB_USERNAME` and `DB_PASSWORD` environment variables for the backend to connect to the database.
3.  **Run the backend:**
    ```bash
    cd backend
    mvn spring-boot:run
    ```
4.  **Run the frontend:**
    ```bash
    cd frontend/todo-ui
    npm install
    npm start
    ```
The application will be available at `http://localhost:3000`.
