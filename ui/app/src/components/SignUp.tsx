import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { useNavigate  } from 'react-router-dom';
import { register } from "../actions/auth";

const SignUp = () => {
  const  navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onChangeEmail = (e: any) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e: any) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignUp = (e: any) => {
    e.preventDefault()
    if (email && password) {
      dispatch<any>(register(email, password))
      .then(() => {
          alert("You have successfully registered! Please Sign In ")
          navigate("/dashboard");
          window.location.reload();
        })
      .catch(() => {
          alert("Something went wrong");
        });
    } else {
      alert("Please fill both fields")
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign Up
        </h1>
        <form className="mt-6">
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    onChange={onChangeEmail}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    onChange={onChangePassword}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mt-6">
                <button   onClick={(e) => handleSignUp(e)} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Register
                </button>
            </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
              href="/"
              className="font-medium text-purple-600 hover:underline"
          >
              Sign in
          </a>
        </p>
     </div>
   </div>
)};

export default SignUp;