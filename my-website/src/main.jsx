import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Import layouts and pages
import RootLayout from './components/layouts/Rootlayout.jsx';  // Correct import case
import Login from './pages/auth/Login.jsx';
import Product from './pages/product/Product.jsx';
import ProductDetail from './pages/productDetail/ProductDetail.jsx';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,  // Wrap the layout
    children: [
      {
        path: "/",  // Render App at root "/"
        element: <App />
      },
      {
        path: "/product",  // Render Product at "/product"
        element: <Product />
      },
      {
        path: "/product/:id",  // Render ProductDetail for individual product
        element: <ProductDetail />
      }
    ]
  },
  {
    path: "/login",  // Login page route
    element: <Login />
  }
]);

// Render the application to the root div in the index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
