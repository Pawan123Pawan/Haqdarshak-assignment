import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate  = useNavigate();
  useEffect(()=>{
   const time= setTimeout(()=>{
        navigate("/home2")
    },4000)
    return ()=> clearTimeout(time)
  },[])
  return (
    <div className="w-full bg-purple h-screen md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-center md:rounded-lg">
      <img src={logo} alt="logo" className="w-[185px] h-[95px]" />
    </div>
  );
};

export default Home;
