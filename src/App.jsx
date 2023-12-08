import { StrictMode } from "react";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Shop from "./components/shop";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import "./css/App.css";

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
    // <StrictMode>
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
    // </StrictMode>
  );
}

export default App;
