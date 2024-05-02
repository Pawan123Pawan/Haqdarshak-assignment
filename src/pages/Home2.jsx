import React, { useEffect } from "react";
import lady from '../assets/lady.png'
import { useNavigate } from "react-router-dom";
const Home2 = () => {
  const navigate  = useNavigate();
  useEffect(()=>{
   const time= setTimeout(()=>{
        navigate("/select-language")
    },2000)
    return ()=> clearTimeout(time)
  },[])
  return (
    <div className="w-full bg-[#f8e7ff] h-screen md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col">
      <h1 className="text-[40px] font-poppins text-purple leading-10 w-full px-8 mt-20">Getting <br /> benefits is <br /> now easy!</h1>
      <div className=" bg-divider h-[10px] w-[120px] mt-8 "></div>
      <div className="w-full"><img src={lady} alt="lady" className="w-full h-[420px] object-cover" /></div>
    </div>
  );
};

export default Home2;
