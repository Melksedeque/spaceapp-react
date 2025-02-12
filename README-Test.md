# Space Gallery React Application

This project is a React-based web application that showcases a gallery of space-related images with filtering and search capabilities.

The Space Gallery React Application is designed to provide users with an interactive and visually appealing way to explore a collection of space-themed images. It features a responsive layout with a sidebar navigation, a search functionality, and a main gallery area that displays both popular and filtered images.

Key features of the application include:

- A responsive layout with a sidebar for easy navigation
- A search field for finding specific images
- A main gallery showcasing space-related images
- A popular gallery section highlighting featured images
- Tag-based filtering to categorize and sort images
- Global styling for consistent look and feel across the application

## Repository Structure

```
.
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Gallery/
│   │   │   ├── FilterByTags/
│   │   │   ├── MainGallery/
│   │   │   └── PopularGallery/
│   │   ├── GlobalStyles/
│   │   ├── Header/
│   │   ├── SearchField/
│   │   ├── Sidebar/
│   │   │   └── NavItem/
│   │   └── Title/
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Key Files:

- `src/main.jsx`: The entry point of the application
- `src/App.jsx`: The main component that structures the application layout
- `vite.config.js`: Configuration file for Vite build tool
- `eslint.config.js`: ESLint configuration for code linting
- `package.json`: Project metadata and dependencies

## Usage Instructions

### Installation

Prerequisites:

- Node.js (version 14 or higher)
- npm (usually comes with Node.js)

To install the project dependencies, run the following command in the project root directory:

```bash
npm install
```

### Getting Started

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:5173` in your web browser.

### Building for Production

To create a production build, use:

```bash
npm run build
```

This will generate optimized static files in the `dist` directory.

### Linting

To run the ESLint linter on the project, use:

```bash
npm run lint
```

### Configuration

The project uses Vite as its build tool. You can modify the Vite configuration in `vite.config.js` if needed. For example, to change the development server port:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

### Troubleshooting

Common Issue: Styled-components not working

- Error: "Cannot find module 'styled-components'"
- Solution: Ensure you've installed the dependencies with `npm install`. If the issue persists, try removing the `node_modules` folder and `package-lock.json`, then run `npm install` again.

Debugging:

- For React component issues, use the React Developer Tools browser extension.
- To enable more verbose logging, you can add `console.log` statements in your components or use the browser's developer tools to set breakpoints.

## Data Flow

The Space Gallery React Application follows a unidirectional data flow:

1. User Interaction: The user interacts with the UI components (e.g., clicking a filter tag, entering a search query).
2. Component State: The relevant component updates its local state based on the user interaction.
3. Props Passing: If necessary, the updated state is passed down to child components as props.
4. Rendering: React re-renders the affected components with the updated state/props.
5. Data Fetching: When needed, data is fetched from the local JSON files (e.g., `fotos.json`, `tags.json`).
6. UI Update: The fetched data is used to update the component state, triggering a re-render of the relevant parts of the UI.

```
User Interaction
      │
      ▼
Component State
      │
      ▼
Props Passing
      │
      ▼
  Rendering
      │
      ▼
Data Fetching
      │
      ▼
  UI Update
```

Note: The application currently uses local JSON files for data. In a production environment, this would likely be replaced with API calls to a backend server.
