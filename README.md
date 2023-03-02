# NotaryCafe-Assignment

Registration Form Web Application
This is a simple web application that allows users to register and stores their information in a database. The application is built using Node.js, Express.js, and MongoDB. The application uses bcrypt.js to hash passwords before storing them in the database.

Prerequisites
Node.js
MongoDB
Installation
Clone the repository
Install dependencies: npm install
Create a .env file in the root directory and add the following variables:
makefile
Copy code

PORT=<port_number>
Start the server: nodemon app.js
Usage
To use the application, navigate to http://localhost:5000/register in your web browser. Fill out the registration form and click "Submit". If the passwords match, the user's information will be stored in the database and a success message will be displayed. If the passwords do not match, an error message will be displayed.

Files
app.js: Main application file
db/conn.js: Connects to the MongoDB database
models/registers.js: Defines the schema for the user registration data
public: Contains static files such as CSS and images
templates: Contains the Handlebars templates for rendering views




