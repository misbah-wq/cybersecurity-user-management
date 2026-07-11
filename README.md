# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Cybersecurity User Management System

A secure User Management System developed using **React**, **Node.js**, and **Express.js**. This project demonstrates secure authentication, API protection, and web application security practices based on OWASP recommendations.

---

## Features

- User Registration
- User Login
- Email Validation
- Password Hashing using bcrypt
- JWT Authentication
- Security Headers using Helmet
- API Rate Limiting
- Cross-Origin Resource Sharing (CORS)
- CSRF Protection
- Security Logging using Winston

---

## Security Enhancements

 – Security Hardening

- Implemented Helmet middleware
- Configured Express Rate Limiter
- Configured CORS
- Added backend security improvements

 – Ethical Hacking & Security

- Conducted reconnaissance on the application
- Performed SQL Injection testing using SQLMap
- Created a SQL Injection testing lab
- Prevented SQL Injection using Prepared Statements
- Implemented CSRF Protection using csurf
- Tested API endpoints using Postman
- Added security logging using Winston

 – Security Audit

- Performed OWASP ZAP security assessment
- Reviewed application security configuration
- Documented implemented security controls

---

## Technologies Used

### Frontend

- React.js
- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- SQLite (SQL Injection Lab)

### Security

- bcrypt
- jsonwebtoken
- helmet
- express-rate-limit
- cors
- csurf
- cookie-parser
- winston

### Security Testing Tools

- SQLMap
- OWASP ZAP
- Postman
- Brupsuite
---

## Project Structure

```
cybersecurity-user-management-app
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── sqli-lab/
│   ├── server.js
│   ├── users.db
│
├── src/
├── public/
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/misbah-wq/cybersecurity-user-management.git
```

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm start
```

Start the React application:

```bash
cd ..
npm start
```

---

## Security Testing

The project includes practical security testing using:

- SQLMap
- OWASP ZAP
- Postman

Security improvements include:

- SQL Injection Prevention
- CSRF Protection
- Password Hashing
- JWT Authentication
- Security Headers
- API Rate Limiting



## Author

Misbah Mughal
