import "./css/App.css";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthContext";
import Cart from "./Cart";
import { CartContextProvider } from "./CartContext";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import Home from "./components/home";
import Login from "./components/login";
import Shop from "./components/shop";
import Signup from "./components/signup";
import Layout from "./layout";
import Admin from "./pages/Admin";
import AddProducts from "./pages/Admin/AddProducts";

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
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/adminadd",
      element: <AddProducts />,
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
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <CartContextProvider>
      <AuthProvider {...{ auth, setAuth }}>
        <RouterProvider router={router} />
      </AuthProvider>
    </CartContextProvider>
  );
}

export default App;
