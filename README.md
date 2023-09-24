All the frontend file is inside the "src" directory and the remaining file and folders are of backend and database.
Here is the file structore for this project:
```bash
my-crud-app/
├── backend/
│   ├── index.js
│   ├── models/
│   │   └── Users.js
│   ├── node_modules/ (created when you install npm packages)
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── App.jsx
│   │   ├── CreateUser.jsx
│   │   ├── UpdateUser.jsx
│   │   ├── Users.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── node_modules/ (created when you install npm packages)
│   ├── package.json
│   ├── package-lock.json
│   └── ...
├── node_modules/ (created when you install npm packages)
├── package.json
├── package-lock.json
├── README.md
└── ...
```



### Installation
Before running your project, you'll need to install the necessary dependencies. You can use the following commands to install these dependencies:

```bash
# In the root directory (where package.json is located), run:
npm install express mongoose cors axios react react-dom react-router-dom bootstrap
```

Now, let's break down how the project works:

### Project Overview

#### Backend (Express.js and MongoDB)

1. **Express.js (index.js)**:
   - This is the backend server code that listens on port 3001.
   - It uses Express.js to handle HTTP requests and responses.
   - Mongoose is used to connect to a MongoDB database named "crud."

2. **Routes**:
   - `GET /`:
     - Retrieves a list of users from the MongoDB database and sends them as JSON.
   - `GET /getUser/:id`:
     - Retrieves a single user by ID from the MongoDB database and sends it as JSON.
   - `PUT /updateUser/:id`:
     - Updates a user's information by ID with data provided in the request body.
   - `DELETE /deleteUser/:id`:
     - Deletes a user by ID from the MongoDB database.
   - `POST /createUser`:
     - Creates a new user in the MongoDB database using data from the request body.

3. **User Model (Users.js)**:
   - Defines the Mongoose schema for user documents with fields: `name`, `email`, and `age`.
   - Creates a Mongoose model named "ak" based on the schema.
   - Exports the "ak" model for use in the Express.js code.

#### Frontend (React)

1. **App (App.jsx)**:
   - Sets up React Router to handle different routes within the application.
   - Provides routes for displaying the user list, creating a new user, and updating an existing user.

2. **Users (Users.jsx)**:
   - Fetches a list of users from the Express.js backend using Axios and displays them.
   - Provides options to view, update, and delete users.
   - Handles errors gracefully and displays error messages.

3. **CreateUser (CreateUser.jsx)**:
   - Provides a form to create a new user.
   - Sends a POST request to the backend to create a new user when the form is submitted.

4. **UpdateUser (UpdateUser.jsx)**:
   - Retrieves the data of a user to be updated by ID from the backend.
   - Provides a form to update the user's information.
   - Sends a PUT request to the backend to update the user when the form is submitted.
   - Handles errors and displays error messages.

#### Entry Point (main.jsx)

- Renders the `App` component inside the root HTML element with the id "root."

### How to Run the Project

1. Ensure MongoDB is running and accessible at `mongodb://127.0.0.1:27017/crud`.

2. Start the Express.js backend server:
   ```bash
   node index.js
   ```

3. Start the React frontend:
   ```bash
   npm start
   ```

4. Access the application in your web browser at `http://localhost:3000`.

That's it! You now have a basic user management application where you can create, read, update, and delete user records. Feel free to expand on this project by adding more features or improving the user interface.
