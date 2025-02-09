# React Project Setup Guide

Welcome to the comprehensive guide for setting up and working with React projects. This guide ensures a seamless development experience while covering essential steps to get started with ReactJS.

## 🌟 Features

- **Step-by-Step Setup**: A structured approach to installing and setting up React.
- **Project-Based Learning**: Hands-on learning through real-world projects.
- **Essential Commands**: All necessary commands for setting up, running, and managing React projects.

## 🚀 Getting Started

### 1. Install Node.js
Download and install Node.js from the official website:
[https://nodejs.org/](https://nodejs.org/)

Verify installation:
```sh
node -v
npm -v
```

### 2. Install npm and npx (if not installed automatically)
```sh
npm install -g npm
npm install -g npx
```

Verify installation:
```sh
npm -v
npx -v
```

### 3. Install Git (If not installed)
Download and install Git from:
[https://git-scm.com/](https://git-scm.com/)

Verify installation:
```sh
git --version
```

### 4. Setup a Local Git Repository and Create Directories
```sh
mkdir React
cd React
git init
```

### 5. Create a React Project using Create React App
```sh
npx create-react-app 01basicreact
```

#### Navigate into the project folder
```sh
cd 01basicreact
```

#### Start the development server
```sh
npm start
```

### 6. Create a React Project using Vite
```sh
npm create vite@latest 01vitereact
```

#### Navigate into the project folder
```sh
cd 01vitereact
```

#### Install dependencies
```sh
npm install
```

#### Verify Vite installation
```sh
vite -v
```

#### Start the development server
```sh
npm run dev
```

## 📚 Modules & Projects

1. **React JS RoadMap**:
   - [Official React Docs](https://react.dev/)

2. **Create React Projects**:
   - Learn how to create React projects using both CRA and Vite.

3. **Understand React Flow and Structure**:
   - Gain a deep understanding of how React works internally.

4. **Create Your Own React Library and JSX**:
   - Learn how to build reusable React components and libraries.

## 7. Initialize Git and Push to GitHub
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 📖 Additional Resources

- [Official React Documentation](https://react.dev/)
- [Official Vite Documentation](https://vite.dev/)
- [Official Git Documentation](https://git-scm.com/doc)
- [React Community Support](https://react.dev/community/support)

**Happy Learning!** ✨

_Made by Vishal V_
