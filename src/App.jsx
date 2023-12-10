import "./css/App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Signup from "./signup";
import Login from "./login";
import AuthProvider from "./AuthContext";
import Home from "./home";
import Shop from "./shop";
import About from "./about";
import Contact from "./contact";
import Error from "./error";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
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
    <>
      <AuthProvider {...{ auth, setAuth }}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
