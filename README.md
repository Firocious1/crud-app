CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and Express.js with a MySQL backend.

Features
Create: Allows users to add new entries (e.g., users, products, etc.).
Read: Retrieve and display all entries stored in the database.
Update: Modify existing entries.
Delete: Remove entries from the database.
Technologies Used
Backend: Node.js, Express.js
Database: MySQL
Package Manager: npm
ORM: Sequelize (for interaction with MySQL database)
Frontend: (Optional) You can integrate with a frontend like React, but this is a backend-focused CRUD application.
Setup Instructions
1. Clone the repository
First, clone the repository to your local machine:

```bash

git clone https://github.com/your-username/crud-app.git
cd crud-app
```
2. Install dependencies
Install the required npm dependencies:

```bash

npm install
```
3. Set up the database
You need to create a MySQL database for the application. You can do this by running the following SQL:

```sql

CREATE DATABASE crud_app;
```
4. Configure database connection
Open the config/db.config.js file and update the database configuration (host, user, password) as per your MySQL setup.

```js

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "crud_app"
};
```
5. Run the application
To start the application, run the following command:

```bash

npm start
```
The server will start, and you can access the API endpoints.

API Endpoints
1. Create a new entry  
URL: /api/items  
Method: POST  
Body:  
```json

{
  "name": "Item Name",
  "description": "Item Description"
}
```
Success Response:  
Code: 201  
Content: { "id": 1, "name": "Item Name", "description": "Item Description" }  
2. Get all entries   
URL: /api/items  
Method: GET  
Success Response:  
Code: 200  
Content:  
```json

[
  { "id": 1, "name": "Item 1", "description": "Description 1" },
  { "id": 2, "name": "Item 2", "description": "Description 2" }
]
```
3. Get a specific entry  
URL: /api/items/:id  
Method: GET  
Success Response:  
Code: 200  
Content:  
```json

{ "id": 1, "name": "Item 1", "description": "Description 1" }
```
4. Update an entry  
URL: /api/items/:id  
Method: PUT  
Body:  
```json

{
  "name": "Updated Item Name",
  "description": "Updated Description"
}
```
Success Response:  
Code: 200  
Content: { "id": 1, "name": "Updated Item Name", "description": "Updated Description" }  

5. Delete an entry  
URL: /api/items/:id  
Method: DELETE  
Success Response:  
Code: 204  
Content: No content.  
License  
This project is licensed under the MIT License - see the LICENSE file for details.  

Acknowledgments  
Inspired by various CRUD tutorials.  
Thanks to the open-source community for providing Node.js and Express.js.  
