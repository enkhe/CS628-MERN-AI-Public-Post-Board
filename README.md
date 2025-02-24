# CS628 MERN AI Public Post Board Application
Winter 2025 - CS628 Team Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Project Architecture](#project-architecture)
- [React Technologies Used](#react-technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The CS628 MERN AI Public Post Board Application is a web application developed as a team project for the CS628 course. The application allows users to create, view, and manage posts. It also includes a chat feature powered by an AI model.

## Features

- Create, view, and manage posts
- AI-powered chat feature
- Pagination for posts
- Responsive design

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: In-memory JavaScript object (for simplicity)
- **AI Model**: Gemma 2:2b (for chat feature)

## React Technologies Used

The frontend of this application utilizes various React technologies and hooks to manage state, side effects, and routing. Below are the key technologies and hooks used:

### React Hooks

- **useState**: Used for managing local state within functional components.
- **useEffect**: Used for performing side effects in functional components, such as fetching data from an API.
- **useContext**: Used for accessing the global state provided by the `PostContext`.

### React Router

- **BrowserRouter**: Used for enabling client-side routing.
- **Routes**: Used for defining a set of routes in the application.
- **Route**: Used for defining individual routes and their corresponding components.
- **useParams**: Used for accessing URL parameters in a route.

### Material-UI

- **Box**: A utility component for creating flexible layouts.
- **Button**: A component for creating buttons.
- **Card**: A component for displaying content in a card format.
- **CardHeader**: A component for displaying a header in a card.
- **CardMedia**: A component for displaying media (e.g., images) in a card.
- **CardContent**: A component for displaying content in a card.
- **Typography**: A component for displaying text with different styles.
- **Grid**: A component for creating responsive grid layouts.
- **Pagination**: A component for adding pagination controls.

### Context API

- **PostContext**: A context for managing the global state of posts in the application.
- **PostProvider**: A provider component that wraps the application and provides the `PostContext` to its children.

These technologies and hooks are used throughout the application to create a responsive, interactive, and maintainable user interface.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CS628-MERN-AI-Public-Post-Board.git
   cd CS628-MERN-AI-Public-Post-Board
   ```
2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a .env file in the backend directory and add the following environment variables:
```bash
PORT=3001
GEMMA_API_URL_LOCAL=http://localhost:11434/api/generate
```

4. Set the ports visibility for the backend:
   ```bash
   gh codespace ports visibility 3001:public -c $CODESPACE_NAME
```

5. Start the backend server:
```bash
cd backend
npm start
```

6. Start the frontend development server:
```bash
cd ../frontend
npm start
```

7. Install and run Ollama with Gemma2:2b:

   **Terminal 1**:
   ```bash
   # Pull Ollama
   curl -fsSL https://ollama.com/install.sh | sh

   # Run Ollama
   ollama serve
   ```

   **Terminal 2**:
   ```bash
   # Pull Gemma2:2b
    ollama pull gemma2:2b

    # Run Gemma2:2b
    ollama run gemma2:2b
   ```

## Usage

Once the servers are running, you can access the application at `http://localhost:3000`.

- To create a new post, navigate to `/createpost`.
- To view post details, navigate to `/postdetail/:id`.
- To use the chat feature, navigate to `/chat`.

## API Endpoints

### Posts

- `GET /api/posts`: Retrieve all posts
- `GET /api/posts/:id`: Retrieve a single post by ID
- `POST /api/posts`: Create a new post

### Chat

- `POST /api/chat`: Send a message to the AI model and receive a response

## Project Structure
```bash
CS628-MERN-AI-Public-Post-Board/
├── backend/
│   ├── controllers/
│   │   ├── chatController.js
│   │   └── postController.js
│   ├── data/
│   │   └── postData.js
│   ├── routes/
│   │   ├── chatRoutes.js
│   │   └── postRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Homepage.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostDetail.jsx
│   │   │   └── SearchField.jsx
│   │   ├── context/
│   │   │   └── PostContext.js
│   │   ├── services/
│   │   │   └── postService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── .env
└── README.md
```



## Project Architecture

### Frontend

The frontend is built using React and Material-UI. The main components and their responsibilities are:

- **App.js**: The root component that sets up routing and context providers.
- **components/**: Contains all the React components used in the application.
  - **Header.jsx**: The header component.
  - **Homepage.jsx**: The homepage component that displays a list of posts.
  - **CreatePost.jsx**: The component for creating a new post.
  - **PostDetail.jsx**: The component for displaying the details of a single post.
  - **PostCard.jsx**: The component for displaying a summary of a post.
  - **SearchField.jsx**: The component for searching posts.
- **context/**: Contains the context and reducer for managing global state.
  - **PostContext.js**: The context and reducer for managing posts.
- **services/**: Contains the service functions for making API calls.
  - **postService.js**: The service functions for making API calls related to posts.

### Backend

The backend is built using Node.js and Express. The main components and their responsibilities are:

- **server.js**: The main entry point of the application that sets up middleware, routes, and starts the server.
- **controllers/**: Contains the controller functions that handle the business logic.
  - **chatController.js**: The controller for handling chat-related requests.
  - **postController.js**: The controller for handling post-related requests.
- **data/**: Contains the data access layer.
  - **postData.js**: The in-memory data store for posts.
- **routes/**: Contains the route definitions.
  - **chatRoutes.js**: The routes for chat-related endpoints.
  - **postRoutes.js**: The routes for post-related endpoints.


