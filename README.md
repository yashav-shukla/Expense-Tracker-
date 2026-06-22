<p align="center">
  <h1 align="center">Expense Tracker - Signup Screen Frontend</h1>
</p>

<p align="center">
  A simple frontend signup page for the Expense Tracker application built using HTML, CSS, and JavaScript.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Markup-orange?style=for-the-badge&logo=html5" />
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?style=for-the-badge&logo=css3" />
  <img src="https://img.shields.io/badge/JavaScript-Frontend-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" />
</p>

---

## 📌 Project Overview

This project is the **Signup Screen Frontend** for the Expense Tracker application.

The signup form allows users to enter:

* Name
* Email
* Password

When the user submits the form, JavaScript collects the entered data and sends it through a POST request using the Fetch API.

This module represents the **View Layer** of the MVC Architecture.

---

## ✨ Features

* Responsive Signup Form
* User Input Validation
* Form Submission Handling
* JavaScript Event Handling
* Fetch API Integration
* Network Request Monitoring
* Beginner-Friendly Project Structure

---

## 🛠 Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API

---

## 📁 Project Structure

```text
expense-tracker
│
├── signup.html
├── signup.css
├── signup.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/expense-tracker-signup.git
```

Navigate to the project folder:

```bash
cd expense-tracker-signup
```

Open the project in VS Code:

```bash
code .
```

---

## ▶️ Run the Project

Using VS Code Live Server:

1. Install Live Server Extension
2. Right Click on `signup.html`
3. Click **Open with Live Server**

or simply open:

```text
signup.html
```

in your browser.

---

## 🌐 Signup Form

The signup page contains the following fields:

| Field    | Type     |
| -------- | -------- |
| Name     | Text     |
| Email    | Email    |
| Password | Password |

---

## 📤 Form Submission Flow

```text
User
 ↓
Fill Signup Form
 ↓
Click Sign Up
 ↓
JavaScript Captures Input
 ↓
Creates User Object
 ↓
POST Request Using Fetch API
 ↓
Response Received
```

---

## 📦 Example Request Payload

```json
{
  "name": "Yash",
  "email": "yash@gmail.com",
  "password": "123456"
}
```

---

## 🏗 MVC Architecture

This assignment currently implements the **View Layer**.

### View

Responsible for displaying the Signup UI.

Files:

```text
signup.html
signup.css
signup.js
```

### Controller

Will be implemented in the next module.

Responsibilities:

```text
Receive Requests
Validate Data
Call Models
Send Responses
```

### Model

Will be implemented in the backend.

Responsibilities:

```text
Database Operations
User Data Management
```

---

## 📸 Expected Output

```text
Expense Tracker

Name
[____________]

Email
[____________]

Password
[____________]

[ Sign Up ]
```

After submission:

```javascript
{
  name: "Yash",
  email: "yash@gmail.com",
  password: "123456"
}
```

---

## 🚀 Future Improvements

* Signup Backend API
* Login Functionality
* Password Encryption using bcrypt
* JWT Authentication
* Expense Management Features
* Premium Membership Features
* AWS Deployment

---

## 👨‍💻 Author

**Yashav Shukla**

* GitHub: https://github.com/yashavshukla

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
