Project Type:
Real-time Chat Application

Tech Stack:

Frontend: React (with Vite), React Router DOM, Socket.IO Client, Axios, React Hot Toast, Tailwind CSS

Backend: Node.js, Express.js, Socket.IO Server, Mongoose (MongoDB), CORS, Dotenv

Database: MongoDB

Architecture:
The application follows a client-server architecture. The client-side (React) handles the user interface and interacts with the backend API. The server-side (Node.js/Express) manages user authentication, message handling, and real-time communication via Socket.IO. The database (MongoDB) stores user and message data. The application uses RESTful APIs for communication between client and server.

Key Features:
User Authentication (Login, Registration)
Real-time Messaging (one-to-one)
Online User Status Indication
Basic Profile Page

Implementation Steps:

1.  Backend Setup (Node.js/Express):
    *   Directive: Set up a basic Express server with user authentication (registration/login) and message handling endpoints.
    *   Implementation:
        *   Create `userController.js` and `userRoutes.js` for user authentication (using bcrypt for password hashing). Implement register and login routes.
        *   Create `messageController.js` and `messageRoutes.js` for sending and retrieving messages.
        *   Use Mongoose to define `User` and `Message` models.
        *   Implement Socket.IO for real-time message delivery.  Focus on sending and receiving text messages between two users.
        *   Implement `connectDB()` function to connect to MongoDB.
        *   Implement basic error handling and logging.

2.  Frontend Setup (React/Vite):
    *   Directive: Build a simple React interface for user authentication and message display.
    *   Implementation:
        *   Create `LoginPage.jsx` and `HomePage.jsx` components.
        *   Implement user authentication using `AuthContext.jsx` to manage user sessions.
        *   Use `react-router-dom` for navigation between login and chat pages.
        *   Use `axios` to make API calls to the backend for authentication and message retrieval/sending.
        *   Implement `ChatContext.jsx` to manage the current chat session and messages.
        *   Use `Socket.IO Client` to connect to the backend Socket.IO server.
        *   Create a basic `ChatContainer.jsx` component to display messages. Focus on displaying messages in a simple list.
        *   Create a simple input field and send button for sending messages.
        *   Implement basic error handling and display messages using `react-hot-toast`.

3.  Database Setup (MongoDB):
    *   Directive: Set up a MongoDB database to store user and message data.
    *   Implementation:
        *   Define `User` schema with username, password, and profile information (keep it minimal for MVP).
        *   Define `Message` schema with sender, receiver, and message content.

4.  Real-time Messaging:
    *   Directive: Implement real-time message delivery using Socket.IO.
    *   Implementation:
        *   On the backend, emit new messages to the recipient user's socket.
        *   On the frontend, listen for new messages from the server and update the chat display.

5.  Online User Status:
    *   Directive: Implement basic online user status indication.
    *   Implementation:
        *   Use `userSocketMap` on the server to track online users.
        *   Emit the list of online users to all connected clients.
        *   Display online users in a simple list on the frontend.

6.  Deployment:
    *   Directive: Deploy the application to a cloud platform (e.g., Vercel, Netlify, Heroku).
    *   Implementation:
        *   Configure environment variables for database connection and API endpoints.
        *   Deploy the frontend and backend separately.
