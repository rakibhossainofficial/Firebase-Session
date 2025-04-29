import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: "Opps Get a Error❗",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);


export default (router)