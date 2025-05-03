import React, { createContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const valueContext = createContext();

const RootLayout = () => {
  const handleLogin = (email, password) => {

    console.log("yooooo", email, password);
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Success😀");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error🥲");
      });
  };

  return (
    <div>
      <Navbar />

      <valueContext.Provider value={handleLogin}>
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet />
        </div>
      </valueContext.Provider>

      <Footer />
    </div>
  );
};

export default RootLayout;
