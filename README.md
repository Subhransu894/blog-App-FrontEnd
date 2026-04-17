# BLOG APP

A full-stack blog making app where you can browse , add , edit , delete the blogs.
Built with React frontend , Express/Node backend, MongoDB Database, JWT-based authentication.

---
# Demo Link
[Live Demo](https://blog-app-front-end-iota.vercel.app/)

---
## Quick Start

```
git clone https://github.com/Subhransu894/blog-App-FrontEnd.git
cd <your-repo>
npm install
npm run dev # or `npm start` / `npm yarn`
```
---

## Technologies

- React JS
- React Router
- Node JS
- Express 
- MongoDB
- JWT

---

## Demo Video

Watch a walkthrough (2-4 minutes) of all the major features of this app:
[Loom Video]( https://drive.google.com/file/d/1SDFH8tuvGtTXigOKPR2hzYdS_lBeH-Ve/view?usp=sharing)

---

## Features

**Home**
- Display all the blog lists.
- Add, Edit the particular blog.

**Create Blog**
- A form will appear here to fill out the new blog details.

**Authentication**
- User Signup and Login with JWT.
- Protected routes for creating/editing/deleting blogs.

---

## API References

### **GET /api/blogs**<br>

List all blogs<br>
Sample Response:<br>
```
[{_id,title,content,author}]
```

### **Get /api/blogs/:id**<br>

Edit the details of the particular one blog<br>
Sample Respnose:<br>
```
{_id,title,content,author}
```

### **POST /api/auth/blogs**<br>

Create a new blog<br>
Sample Response:<br>

```
{_id,title,content,author}
```

### **POST api/auth/register**<br>

Register a new user<br>
Sample Response:<br>
```
{userId,token}
```
---

## Contact
For bugs or feature request, please reach out to subhransusekhar790@gmail.com