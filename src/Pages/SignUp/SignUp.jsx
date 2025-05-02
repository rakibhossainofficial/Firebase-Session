import React from "react";
import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";



const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    console.log(fullname, email, password, confirmpassword);

    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        alert("Sign Up Succesfully😀");
      }
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error❗")
    });
  };

  return (
    <div className="flex items-center justify-center my-5 px-4 md:p-0222222">
      <div className="flex  flex-col w-3xl  p-6 rounded-md sm:p-10 dark:bg-gray-100 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">
            Sign Up to Create your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-3 py-2  rounded-md border-2 border-gray-300 bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md  bg-white "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md  bg-white "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md  bg-white "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-sky-400 cursor-pointer text-gray-900 "
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              You have an account ?
              <Link
                className="hover:underline text-sky-400 cursor-pointer"
                to="/sign-in"
              >
                Sign In
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
