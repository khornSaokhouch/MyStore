import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layouts/Rootlayout.jsx'; // Ensure correct case in import
import Login from './pages/auth/Login.jsx';
import Product from './pages/product/Product.jsx';


// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Corrected the component name to match your export
    children: [
      {
        path: "", // Use an empty string for the root path
        element: <App />
      },
      {
        path: "/product",
        element: <Product />
      }

    ]
  },
  {
    path: "/login", // URL paths should be lowercase for consistency
    element: <Login />
  }
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);