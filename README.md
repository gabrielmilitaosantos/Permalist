# Permalist

Permalist is a simple web application that allows users to create, edit, and delete tasks for their daily to-do lists. 
It is built using Node.js with Express.js for the server, PostgreSQL for the database, and EJS for rendering the front-end.

Features

   - Create Tasks: Users can add new tasks to their to-do list.
   - Edit Tasks: Users can edit existing tasks on their to-do list.
   - Delete Tasks: Users can delete tasks from their to-do list.
   - View Tasks: Users can view their entire to-do list.

Installation

1 - Clone the repository (git clone on terminal or manually by github)

2 - Install dependencies:
   * In file folder of the project, type on terminal: 'npm i'

3 - Set up the Postgres database:
    * Create new database named 'permalist' (Or anything else you want, but don't forget to change the database settings on the server).
    * Copy everything inside 'queries.sql' and paste in your query tool on Postgres.
    
4 - Set the 'db' with your information (index.js   line 8).

5 - Start the server:
    * Use 'npm start'
    * Open your browser and navigate to 'http://localhost:3000' to view the application.

Usage

   - Create a Task: To add a new task, enter the task description in the input field and click the "+" button.
   - Edit a Task: To edit an existing task, click the "Pencil" button next to the task you want to edit. Update the task description and click the "Save" button.
   - Delete a Task: To delete a task, click the "checkbox" button next to the task you want to delete.
   - View Tasks: To view all tasks on your to-do list, simply open the application.
