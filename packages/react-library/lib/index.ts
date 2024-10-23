'use strict';

// Re-export everything from stencil-generated
export * from './components/stencil-generated/index.js'; // Explicitly include the .js extension

// Export the defineCustomElements function from the loader
export { defineCustomElements } from 'stencil-library/loader'; // Include the .js extension

// Export the reactLibrary function
export function reactLibrary() {
  return 'Hello from reactLibrary';
}
