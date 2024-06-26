import React, { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useMyContext } from "../components/ContextApi";
const PhoneNumber = () => {
  const navigate = useNavigate();
  const [clickPhone, setClickPhone] = useState(false);
  const [number, setNumber] = useState("");
  const { data, setData } = useMyContext();
  const [numberError, setNumberError] = useState(false);

  const handleClickButton = () => {
    if (number && number.length >= 10) {
      setData({ ...data, phoneNumber: number });
      navigate("/otp-verification");
    }
  };

  const handlePhoneNumberChange = (event) => {
    const length = 10;
    let input = event.target.value;
    // Remove non-digit characters
    input = input.replace(/\D/g, "");

    if (input !== event.target.value) {
      if (event.target.value.length <= 10) setNumberError(true);
    } else {
      setNumberError(false);
    }
    input = input.slice(0, length);
    setNumber(input);
  };

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col ">
      <div className=" w-full p-8 pb-0">
        <div
          onClick={() => navigate("/where-are-you")}
          className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          What is your mobile number?
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col">
        <div className="w-full">
          <div className="w-full relative">
            <div
              className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
              onClick={() => setClickPhone(true)}
            >
              <div className="flex items-center justify-between font-poppins">
                <span className={clickPhone ? "text-sm" : ""}>
                  {clickPhone ? "Mobile Number" : "Enter Mobile Number"}
                </span>{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              {clickPhone && (
                <input
                  value={number}
                  onChange={handlePhoneNumberChange}
                  type="text"
                  placeholder="Enter the number"
                  className=" focus:outline-none bg-transparent font-poppins px-1 text-md"
                />
              )}
              {numberError && (
                <p className=" font-medium text-xs text-red-700 font-poppins">
                  *Enter only numeric value and length must be 10.
                </p>
              )}
            </div>
            <div className=" font-poppins text-sm text-gray-500 mt-3">
              This is used to create an account in your name on the Haqdarshak
              app.
            </div>
          </div>
        </div>
        <button
          className="font-poppins w-full bg-purple text-lg text-white p-3 rounded-[28px]"
          onClick={handleClickButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PhoneNumber;
