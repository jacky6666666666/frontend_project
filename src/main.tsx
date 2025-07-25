import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts";

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
// before render the app, need to initiate firebase auth service
FirebaseAuthService.serviceInit();


// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}