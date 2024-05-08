import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdMyLocation } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
const Location = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center  md:rounded-lg flex-col ">
      <div className=" w-full p-8 pb-0">
        <div
          onClick={() => navigate("/login")}
          className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          Choose location
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col">
        <div className="w-full relative">
          <div
            className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
            onClick={() => navigate("/where-are-you")}
          >
            <div className="flex items-center justify-between font-poppins">
              <span className="font-poppins">Select State</span>{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
          <div className="w-full flex items-center font-poppins my-8">
            <p className="border-t w-full border-myborderColor"></p>
            <p className="mx-5 font-semibold">OR</p>
            <p className="border-t w-full border-myborderColor"></p>
          </div>
          <div
            onClick={() => navigate("/location-with-map")}
            className="bg-white flex items-center p-3 px-5 font-semibold gap-2 font-poppins rounded-3xl opacity-80 cursor-pointer"
          >
            <span className="text-2xl">
              <MdMyLocation />
            </span>
            <span>Use current location</span>
          </div>
          <div className=" font-poppins text-sm text-gray-500 mt-8">
            This is used to give you information more accurate to your area.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
