import "./App.css";
import { StrictMode } from "react";
// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Shop from "./shop";
import About from "./about";
import Contact from "./contact";
import Error from "./error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
