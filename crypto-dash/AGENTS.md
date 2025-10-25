# Agent Instructions for crypto-dash

## Commands
- **Dev**: `npm run dev` - Start Vite dev server
- **Build**: `npm run build` - Production build
- **Lint**: `npm run lint` - Run ESLint
- **Preview**: `npm run preview` - Preview production build
- No test framework configured

## Architecture
- React 19 + Vite single-page app
- Components in `src/components/`
- API calls use `import.meta.env.VITE_API_URL` from `.env`
- No routing library, databases, or state management library

## Code Style
- **Imports**: React imports first, then local components
- **Components**: Functional components with arrow functions, default exports
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Props**: Destructure in function parameters
- **Formatting**: Double quotes for strings, no trailing semicolons shown in existing code
- **Error Handling**: Try/catch with error state for async operations
- **ESLint**: Unused vars allowed if uppercase (e.g., constants)
