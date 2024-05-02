import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const EnterOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(180);
  const handleChange = (e, index) => {
    const { value } = e.target;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index !== 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);

      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const resendMessage = (
    <div className="font-poppins text-sm text-gray-500 mt-8">
      <span>
        Did not receive OTP?{"   "}
        <span className="text-sm text-purple font-semibold cursor-pointer">
          Resend
        </span>
      </span>
    </div>
  );

  const sentMessage = (
    <div className="font-poppins text-sm text-gray-500 mt-8">
      <span>
        We have sent an OTP to your mobile number <br />
        <span className="text-sm text-purple font-semibold cursor-pointer">{`Resend code in ${formatTime(
          seconds
        )}`}</span>
      </span>
    </div>
  );

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col ">
      <div
        className=" w-full p-8 pb-0"
        onClick={() => navigate("/otp-verification")}
      >
        <div className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer">
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          OTP verification?
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col">
        <div className="w-full">
          <div className="flex items-center space-x-4 justify-center">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className=" bg-inputColor w-16 h-16 border border-myborderColor rounded-3xl text-center text-2xl focus:outline-purple text-purple"
              />
            ))}
          </div>
          {seconds <= 0 || otp.some((data, i) => data !== "")
            ? resendMessage
            : sentMessage}
        </div>
        {otp.some((data, i) => data !== "") ? (
          <>
            <button
              className="font-poppins w-full bg-purple text-lg text-white p-3 rounded-[28px]"
              onClick={() => navigate("/personal-details")}
            >
              Next
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EnterOtp;
