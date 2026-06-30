<p align="center">
<h1 align="center">Expense Tracker - Secure Authentication & Expense Management System</h1>
</p>

<p align="center">
A full-stack Expense Tracker application built using Node.js, Express.js, MySQL, Sequelize ORM, bcrypt, and MVC Architecture. Users can securely sign up, log in, and manage their daily expenses.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql" />
  <img src="https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=for-the-badge&logo=sequelize" />
   <img src="https://img.shields.io/badge/bcrypt-Password%20Security-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MVC-Architecture-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Authentication-System-success?style=for-the-badge" />
</p>

---

## 📌 Project Overview

This project implements the **Secure User Authentication System** for the Expense Tracker application.

Users can:

* Create a new account using Signup
* Login using registered credentials
* Prevent duplicate registrations
* Validate user credentials securely
* Secure passwords using bcrypt hashing
* Store user data in MySQL Database

The project follows the **MVC (Model-View-Controller)** Architecture and uses **Sequelize ORM** for database operations.

---
## ✨ Features

### Authentication Features

* User Registration (Signup)
* User Login Authentication
* Secure Password Hashing using bcrypt
* Password Verification using bcrypt.compare()
* Duplicate User Validation
* Secure User Authentication
* Error Handling with HTTP Status Codes

### Expense Management Features

* Add Daily Expenses
* Expense Amount Tracking
* Expense Description Tracking
* Category Selection using Dropdown
* Expense List Display
* Fetch Expenses on Page Refresh
* Delete Expense Feature
* Expense Data Stored in MySQL Database

### Technical Features

* REST API Implementation
* MVC Architecture
* Sequelize ORM
* Frontend & Backend Integration
* Axios API Requests
* Responsive User Interface
---

## 🔐 Password Security

### Before bcrypt

Database stored passwords like:

```text
123456
admin123
password
```

This is unsafe because anyone with database access can view user passwords.

### After bcrypt

Passwords are stored as hashes:

```text
$2b$10$RkK9j...  
$2b$10$gXfP7...
```

Actual passwords are never stored in plain text.

### Signup Flow

```text
User Password
      │
      ▼
bcrypt.hash()
      │
      ▼
MySQL Database
```

### Login Flow

```text
User Password
      │
      ▼
bcrypt.compare()
      │
      ▼
Authentication Result
```

---

## 🛠 Tech Stack

* Node.js
* Express.js
* bcrypt
* MySQL
* Sequelize ORM
* JavaScript
* HTML5
* CSS3
* Axios
* CORS

---

## 📁 Project Structure

```text
expense-tracker
│
├── controllers
│   ├── user.js
│   └── expense.js
│
├── models
│   ├── user.js
│   └── expense.js
│
├── routes
│   ├── user.js
│   └── expense.js
│
├── util
│   └── database.js
│
├── views
│   ├── signup.html
│   ├── signup.css
│   ├── signup.js
│   ├── login.html
│   ├── login.css
│   ├── login.js
│   ├── expense.html
│   ├── expense.css
│   └── expense.js
│
├── images
│
├── app.js
├── package.json
└── README.md
```

---

## 🔐 Authentication APIs

### Signup API

```http
POST /user/signup
```

### Request Body

```json
{
  "name": "Yash",
  "email": "yash@gmail.com",
  "password": "123456"
}
```


### Process

```text
Validate User
       ↓
Check Existing Email
       ↓
bcrypt.hash()
       ↓
Store Hashed Password
       ↓
Success Response

```

### Success Response

```json
{
  "message": "User created successfully"
}
```

Status Code:

```text
201 Created
```

### Duplicate User Response

```json
{
  "message": "User already exists"
}
```

Status Code:

```text
409 Conflict
```

---

### Login API

```http
POST /user/login
```

### Request Body

```json
{
  "email": "yash@gmail.com",
  "password": "123456"
}
```

### Process

```text
Find User
      ↓
bcrypt.compare()
      ↓
Password Match ?
      ↓
Login Success
```

### Successful Login

```json
{
  "message": "User login successful"
}
```

Status Code:

```text
200 OK
```

### Invalid Password

```json
{
  "message": "User not authorized"
}
```

Status Code:

```text
401 Unauthorized
```

### User Not Found

```json
{
  "message": "User not found"
}
```

Status Code:

```text
404 Not Found
```

### 💰 Expense APIs


### Add Expense

```http
POST /expense/add-expense
```
### Request Body

```
{
  "amount": 500,
  "description": "Petrol",
  "category": "Fuel"
}
```
### Success Response

```
{
  "success": true,
  "expense": {
    "id": 1,
    "amount": 500,
    "description": "Petrol",
    "category": "Fuel"
  }
}
```

### Status Code:

```
201 Created
```

### Get Expenses

```
GET /expense/get-expenses
```
### Status Code:

```
200 OK
```
### Delete Expense

```
DELETE /expense/delete-expense/:id
```

### Status Code:

```
200 OK
```


---

## 📤 Authentication Flow

```text
User
 ↓
Frontend Form
 ↓
Axios POST Request
 ↓
Route
 ↓
Controller
 ↓
Model
 ↓
MySQL Database
 ↓
Response
 ↓
Frontend Alert
```

---

## 🗃 User Table Schema

| Field    | Type    |
| -------- | ------- |
| id       | INTEGER |
| name     | STRING  |
| email    | STRING  |
| password | STRING  |

---

# Add Expense Flow

```md
## 💰 Expense Flow

```text
User Login
      ↓
Expense Page Opens
      ↓
Enter Expense Details
      ↓
Axios POST Request
      ↓
Expense Route
      ↓
Expense Controller
      ↓
Expense Model
      ↓
MySQL Database
      ↓
Expense Displayed on Screen

## 🏗 MVC Architecture

### View

```text
signup.html
signup.css
signup.js

login.html
login.css
login.js
```

### Controller

```text
controllers/user.js
```

Responsibilities:

```text
Receive Requests
Validate Data
Check Existing Users
Verify Login Credentials
Send Responses
```

### Model

```text
models/user.js
```

Responsibilities:

```text
Database Operations
Store User Data
Manage User Records
```
---

### Previous MVC Architecture Diagram
---
![MVC Architecture](./images/mvc-architecture.png)
---
### Updated MVC Architecture Diagram
---
```
expense-tracker
│
├── controllers                 ←  Controller Layer
│   ├── user.js
│   └── expense.js
│
├── models                      ←  Model Layer               
│   ├── user.js
│   └── expense.js
│
├── routes                      ←  Route Layer
│   ├── user.js
│   └── expense.js
│
├── util
│   └── database.js            ←  Database Configuration
│
├── views                      ←  View Layer
│   │
│   ├── signup.html
│   ├── signup.css
│   ├── signup.js
│   │
│   ├── login.html
│   ├── login.css
│   ├── login.js
│   │
│   ├── expense.html
│   ├── expense.css
│   └── expense.js
│
├── images
│   ├── signup-page.png
│   ├── login-page.png
│   ├── expense-page.png
│   ├── add-expense.png
│   ├── expense-table.png
│   ├── delete-expense.png
│   ├── mysql-data.png
│   └── mvc-architecture.png
│
├── app.js                   ←  Application Entry Point
├── package.json 
├── package-lock.json
└── README.md
```
---

## MVC Flow Diagram

```text
┌─────────────────────┐
│       VIEW          │
│ HTML • CSS • JS     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      ROUTES         │
│ routes/user.js      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    CONTROLLER       │
│ controllers/user.js │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       MODEL         │
│ models/user.js      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   MYSQL DATABASE    │
└─────────────────────┘
```

---

## 📸 Project Screenshots

### Signup Page

![Signup Page](./images/signup-page.png)

### Login Page

![Login Page](./images/login-page.png)

### Network Requests

![Network Request](./images/network-request.png)

![Network Request](./images/network-request2.png)

### Successful Responses

![Signup Success](./images/postman-success.png)

![Signup Success](./images/postman-success2.png)

![Login Success](./images/login-success.png)

### Error Handling

![Unauthorized User](./images/unauthorized-user.png)

![User Not Found](./images/user-not-found.png)

### Password Bcrypt

![](./images/hashed-password.png)


### Expense Dashboard

![Expense Dashboard](./images/expense-dashboard.png)

### Add Expense

![Add Expense](./images/add-expense.png)



### Delete Expense

![Delete Expense](./images/delete-expense.png)
### Database Records

![MySQL Data](./images/mysql-data.png)

### Expense List

![Expense List](./images/expense-list.png)
---

## 🚀 Future Improvements

* JWT Authentication
* User-Specific Expenses
* Premium Membership
* Leaderboard Feature
* Razorpay Integration
* Forgot Password Feature
* Monthly Expense Reports
* AWS Deployment

---

## 👨‍💻 Author

<p align="center">
  <a href="https://github.com/yashav-shukla">
    <img src="https://github.com/yashav-shukla.png" width="120px;" alt="Yashav Shukla"/>
  </a>
</p>

<h3 align="center">
  <a href="https://github.com/yashav-shukla">Yashav Shukla</a>
</h3>

<p align="center">
  Node.js • Express.js • MySQL • JavaScript
</p>

<p align="center">
  <a href="https://github.com/yashav-shukla">
    🌐 GitHub Profile
  </a>
</p>

---

<p align="center">
⭐ If you found this project helpful, consider giving it a star on GitHub!
</p>


<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Poppins&size=18&duration=3000&pause=1000&center=true&vCenter=true&width=600&lines=Happy+Coding!;Keep+Learning!;Keep+Building!;Secure+Code;Secure+Passwords" />
</p>
