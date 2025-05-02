import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className=" ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className=" ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className=" ">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between gap-9 px-1 font-bold">
          <li>
            <NavLink to="/" className=" ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className=" ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className=" ">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <button
          onClick={() => navigate("/sign-in")}
          className={`text-1xl border cursor-pointer px-4 py-1 rounded-full ${pathname == "/sign-in" ? "text-red-500" : ""} `}
        >
          Sign In{" "}
        </button>
        <button
          onClick={() => navigate("/sign-up")}
          className={`text-1xl border cursor-pointer px-4 py-1 rounded-full ${pathname == "/sign-up" ? "text-red-500" : ""} `}
        >
          Sign up{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
