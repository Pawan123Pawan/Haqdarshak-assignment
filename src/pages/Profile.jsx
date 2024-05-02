import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
       const time= setTimeout(()=>{
            navigate("/profile-two")
        },5000)
        return ()=> clearTimeout(time)
  }, []);
  return (
    <div className="w-full bg-purple h-screen md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-center md:rounded-lg flex-col font-poppins mybackGround">
      <p className="text-white text-lg mb-3">Welcome to</p>
      <img src={logo} alt="logo" className="w-[185px] h-[95px]" />
      <p className=" text-md mt-5 text-gray-300 w-[250px] text-center">Your profile has been created successfully!</p>
    </div>
  );
};

export default Profile;
