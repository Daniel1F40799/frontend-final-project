# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# StudyConnect – Study Management Application

## 📝 Project Overview

StudyConnect is a responsive front-end application for managing tasks, study groups, and user profiles. This project was developed as part of a front-end development course using React and includes Firebase for authentication and data storage.

## 🧰 Technologies Used

* HTML, CSS, JavaScript
* React
* React Router
* Vite.js
* CSS Modules
* Firebase (Authentication + Firestore)

## ✨ Key Features

* Navigation between pages using React Router (SPA)
* User login and registration forms
* Personalized user profile page
* Task management section
* Study group organization
* Admin dashboard
* Help and settings page
* KPI page for admin insights
* Fully responsive design for desktop and mobile
* Firebase integration for authentication and database access

## 🚀 Installation & Running Instructions

To run this project on your own computer, you can choose one of the following two options:

### Option 1: Download the ZIP from GitHub

1. Go to the project repository on GitHub: `https://github.com/your-username/frontend-final-project`
2. Click the green **Code** button and choose **Download ZIP**
3. Extract the ZIP file on your computer
4. Open the extracted folder in Visual Studio Code (or any code editor)
5. Open the terminal and continue with the steps below:

```bash
npm install
npm run dev
```

### Option 2: Clone the Repository Using Git

Open a terminal (or Git Bash) and run this command:

```bash
git clone https://github.com/your-username/frontend-final-project.git
```

This will download the project folder to your computer.

Then continue with the next steps:

Open a terminal (or Git Bash) and run this command:

```bash
git clone https://github.com/your-username/frontend-final-project.git
```

This will download the project folder to your computer.

### 3. Open the Project

Use Visual Studio Code (or any code editor). In VS Code:

* Click **File > Open Folder**
* Choose the folder `frontend-final-project`

### 4. Install Project Dependencies

Inside the terminal in VS Code, run:

```bash
npm install
```

This will automatically install all the tools the project needs to work.

### 5. Run the Project

To start the project and see it in your browser:

```bash
npm run dev
```

After a few seconds, it will show a link like `http://localhost:5173/`
Click on it, or copy and paste it in your browser.

---

> ✅ That's it! You are now running the app locally.

If you run into any issues, make sure Node.js is installed correctly and that you ran `npm install` before `npm run dev`.

## 📁 Project Structure

```
src/
├── components/
│   └── Navigation/
├── pages/
│   ├── Home/
│   ├── Profile/
│   ├── Login/
│   ├── Tasks/
│   ├── StudyGroups/
│   ├── HelpSettings/
│   ├── Admin/
│   ├── KPIs/
│   └── Register/
├── styles/
├── assets/
├── App.jsx
├── firebase.js
└── main.jsx
```

## 👨‍💻 Developer

 Daniel Feldman – Development, Design, and Planning

