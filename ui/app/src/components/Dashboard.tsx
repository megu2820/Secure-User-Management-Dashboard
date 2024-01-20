import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { RootState } from "../store";
import { logout } from '../actions/auth';


const Dashboard = () => {
  const {isLoggedIn} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch<any>(logout())
        .then(() => {
          alert("Successfully Logged out!")
        })
        .catch((err: any) => {
          alert(err);
        });
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <h1 className="text-3xl font-semibold text-center text-white underline">Welcome to your protected Dashboard!</h1>
      <div className="mt-6">
        <button   onClick={(e) => handleLogout(e)} className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          Log out
        </button>
      </div>
    </div>
  )
}

export default Dashboard