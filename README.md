# 🚀  Application Overview: Movie Search & Trending
Your application, Movie App, is a client-side web application built primarily with React and Vite. Its main function is to allow users to search for movies and display a trending list based on real-time user searches.

# 🛠️  Key Technologies and Functionality
1. Frontend & UI
Framework: React.js is used for building the user interface components.

Build Tool: Vite is used as the fast development server and build tool.

Styling: Tailwind CSS handles the styling, utilizing custom components and utilities for a modern look.

User Interaction: The application uses the useDebounce hook from the react-use library to optimize search queries, preventing excessive API calls while the user is typing.

2. Data Sources and Backend LogicThe application relies on two external services for its data and logic:

  # The Movie Database (TMDB) API
   Movie Data SourceUsed to fetch movie details based on search terms or popular lists. The application makes API calls using a Bearer Token for authorization.
 
  # Appwrite:
   Backend-as-a-Service (BaaS)Used for custom backend logic and tracking user behavior. Specifically, it manages the trending feature by tracking search counts.

# 🏃 How to Execute the Application

This mode is used for development and viewing the application locally without deployment issues.

Dependencies: Ensure you have Node.js and npm installed.

Install: Run npm install in the project directory to install all required packages.

Environment Variables: Create a .env file and set your VITE_TMDM_API_KEY, VITE_APPWRITE_PROJECT_ID, etc., which are crucial for the Appwrite and TMDB connections.

Run: Execute the development command: npm run dev

The application will run on your local server, typically at http://localhost:5173/.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

