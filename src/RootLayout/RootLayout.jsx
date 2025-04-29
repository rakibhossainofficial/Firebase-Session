import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <Outlet />
      <h3>Footer</h3>

    </div>
  );
};

export default RootLayout;
