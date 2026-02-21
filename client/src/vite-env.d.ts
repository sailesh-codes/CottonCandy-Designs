/// <reference types="vite/client" />

// Type definitions for Vite environment variables
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Add any other module declarations as needed
