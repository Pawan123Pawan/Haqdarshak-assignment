import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

const Profile2 = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState({});

  const handleClick = (value) => {
    setClick((prevClick) => ({
      ...prevClick,
      [value]: !prevClick[value],
    }));
  };


  const data = [
    "Find the benefits that are right for you or your business",
    "Learn everything you need to apply",
    "Save schemes and track your bookings",
  ];

  return (
    <div className="w-full bg-purple h-screen md:w-1/2 lg:w-[30%] mx-auto flex items-center  md:rounded-lg flex-col font-poppins mybackGround">
      <img src={logo} alt="logo" className="w-[185px] h-[95px] my-24" />
      <div className="px-10">
        {data.map((value, i) => (
          <div
            key={i}
            className="flex gap-3 items-center mb-5"
            onClick={() => handleClick(`click${i + 1}`)}
          >
            {click[`click${i + 1}`] ? (
              <div className="w-[30px] h-[30px] p-[1px] bg-white text-purple rounded-full">
                <BsCheck className="text-3xl" />
              </div>
            ) : (
              <div className="w-[20px] h-[20px] rounded-full p-3 border-2 border-gray-100"></div>
            )}
            <p className="text-gray-200 text-[16px] font-poppins">{value}</p>
          </div>
        ))}
      </div>
      {Object.keys(click).length === 3 &&
        Object.values(click).every((value) => value === true) && (
          <div className="flex-1 w-full p-10 flex flex-col justify-between">
            <div></div>
            <button
              className="font-poppins w-full bg-white text-xl text-purple p-3 rounded-[28px] font-semibold"
              onClick={() => navigate("/")}
            >
              Get Started!
            </button>
          </div>
        )}
    </div>
  );
};

export default Profile2;
