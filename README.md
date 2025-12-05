🚀 # Application Overview: Movie Search & Trending
Your application, Movie App, is a client-side web application built primarily with React and Vite. Its main function is to allow users to search for movies and display a trending list based on real-time user searches.

🛠️ # Key Technologies and Functionality
1. Frontend & UI
Framework: React.js is used for building the user interface components.

Build Tool: Vite is used as the fast development server and build tool.

Styling: Tailwind CSS handles the styling, utilizing custom components and utilities for a modern look.

User Interaction: The application uses the useDebounce hook from the react-use library to optimize search queries, preventing excessive API calls while the user is typing.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

