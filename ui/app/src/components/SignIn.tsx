import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { useNavigate  } from 'react-router-dom';
import { login } from "../actions/auth";

const SignIn = () => {
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

  const handleLogin = (e: any) => {
    e.preventDefault();
    if(email && password){
        const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(email)) {
          alert("Email is not valid")
          setEmail("");
          setPassword("");
        } else {
          dispatch<any>(login(email, password))
          .then(() => {
            alert("Logged in successfully!")
            navigate("/dashboard");
            window.location.reload();
          })
          .catch((err: any) => {
            console.log(err);
            alert("Something went wrong");
          });
        }
    } else {
        alert("Please fill both fields");
        setEmail("");
        setPassword("");
    }
  }

  return (
  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
       <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
         Sign in
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
                  value={email}
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
                  value={password}
                  onChange={onChangePassword}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mt-6">
              <button   onClick={(e) => handleLogin(e)} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Login
              </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
                href="/sign-up"
                className="font-medium text-purple-600 hover:underline"
            >
                Sign up
            </a>
        </p>
      </div>
    </div>
)};

export default SignIn;