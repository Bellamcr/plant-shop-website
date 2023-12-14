import "./css/App.css";
import { firebaseAuth } from "./firebase";
import { useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ auth, setAuth, children }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("User: ", user);
        setAuth(firebaseAuth);
      } else {
        console.log("User is logged out");
        setAuth(null);
      }
    });
    return unsubscribe;
  }, [setAuth]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// React Context API provides a beautiful and simple way to create context to pass data to other components in your app.
