import { StrictMode } from "react";
import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Shop from "./shop";
import About from "./about";
import Contact from "./contact";
import Error from "./error";
import "./App.css";

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
