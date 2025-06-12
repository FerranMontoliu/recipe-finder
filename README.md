
# 🚀 Project setup & Documentation
## 📦 How to set up and run Recipe finder

1. Clone the repository
    ```bash  
    git clone https://github.com/FerranMontoliu/recipe-finder.git  
    cd recipe-finder  
    ```
2. Install `pnpm`
    ```bash  
    npm install -g pnpm 
    ```
3. Install the dependencies
    ```bash  
    pnpm i 
    ```
4. Run the application locally
    ```bash  
   # Development build:
   pnpm dev
  
   # Production build:
   pnpm build && pnpm preview
   ```

4. Run tests
    ```bash  
   # Integration tests (Vitest):
   pnpm test:integration
   
   # E2E tests (Playwright):
   pnpm test:e2e
   ```

## 🛠️ Tools and Libraries Used

### 📦 Dependencies

| Package | Description |
|--------|-------------|
| `@mantine/core` `^8.1.0` | UI component library with accessible, customizable components. |
| `@mantine/hooks` `^8.1.0` | Utility hooks (e.g., `useDebouncedState`) for enhanced UI behavior. |
| `@tabler/icons-react` `^3.34.0` | Icon library designed to work well with Mantine. |
| `@tanstack/react-query` `^5.80.6` | Data fetching, caching, and server-state management. |
| `react` `^19.1.0` | Core library for building UI components. |
| `react-dom` `^19.1.0` | React's DOM renderer; required for browser-based apps. |
| `react-router-dom` `^7.6.2` | Declarative client-side routing for React apps. |
| `schemawax` `^1.0.12` | Type-safe schema decoding and validation for external data (e.g., URL params). |

### 🧪 Dev Dependencies

| Package | Description |
|--------|-------------|
| `@eslint/js` `^9.25.0` | ESLint base rule definitions. |
| `@playwright/test` `^1.53.0` | End-to-end testing framework for simulating user flows. |
| `@types/node` `^24.0.0` | Type definitions for Node.js runtime. |
| `@types/react` `^19.1.2` | Type definitions for React APIs. |
| `@types/react-dom` `^19.1.2` | Type definitions for `react-dom`. |
| `@vitejs/plugin-react` `^4.4.1` | Vite plugin for React (with fast refresh and JSX support). |
| `eslint` `^9.25.0` | Linter to detect and fix common code issues. |
| `eslint-config-prettier` `^10.1.5` | Disables ESLint rules that conflict with Prettier formatting. |
| `eslint-plugin-react-dom` `^1.52.1` | ESLint rules targeting `react-dom` patterns. |
| `eslint-plugin-react-hooks` `^5.2.0` | Ensures proper usage of React hooks. |
| `eslint-plugin-react-x` `^1.52.1` | Additional React linting rules (experimental/community-driven). |
| `globals` `^16.0.0` | Defines global variables for different environments (used by ESLint). |
| `husky` `^9.1.7` | Git hook manager used for running checks before commits. |
| `jsdom` `^26.1.0` | Simulates the DOM for testing environments (used by Vitest to test DOM APIs like `localStorage`). |
| `playwright` `^1.53.0` | Full browser automation framework for E2E testing. |
| `prettier` `^3.5.3` | Opinionated code formatter for consistent style. |
| `typescript` `~5.8.3` | Adds static type checking to JavaScript. |
| `typescript-eslint` `^8.30.1` | Integrates TypeScript with ESLint for `.ts` and `.tsx` files. |
| `vite` `^6.3.5` | Modern dev server and bundler for fast builds. |
| `vitest` `^3.2.3` | Fast unit testing framework built for Vite. |


## 💡 Assumptions and design decisions
-   **Type safety**: `TypeScript` is used throughout the project to catch errors at compile time and reduce the likelihood of runtime failures. To further strengthen data integrity, all external data is decoded using `schemawax`, ensuring it follows the expected schema before it is used in the application.

-   **UI**: The UI is built with the `Mantine` component library, selected for its modern, customizable design system.

-   **Performance optimization**: A client-side caching layer has been implemented using `React Query`, minimizing redundant API calls and improving perceived application speed and responsiveness, while ensuring that the rate limits are not exceeded.

-   **Testing strategy**: The application includes both integration and end-to-end (E2E) tests. Integration tests (via `Vitest`) cover functionality like interactions with `localStorage`, while E2E tests (via `Playwright`) validate full user flows across both desktop and mobile viewports.

-   **Code quality & consistency**: Code standards are enforced using `ESLint`, `Prettier`, and `Husky`. These tools ensure clean, consistent code and help prevent common errors by running automated checks during development and before each commit.