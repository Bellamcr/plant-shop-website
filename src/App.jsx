import "./css/App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./layout";
import Signup from "./signup";
import Login from "./login";
import AuthProvider from "./AuthContext";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Shop from "./components/shop";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />, 
      errorElement: <Error />
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      element: <Layout />,
      children: [
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
      ],
    },
  ]);

  return (
    <StrictMode>
    <>
      <Navbar />
      <AuthProvider {...{ auth, setAuth }}>
      <RouterProvider router={router} />
      </AuthProvider>
    </>
   </StrictMode>
  );
}

export default App;
