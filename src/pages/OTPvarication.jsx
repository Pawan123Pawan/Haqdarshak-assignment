import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../components/ContextApi";

const dataVerification = ["Yes", "No, I want to complete OTP verification"];
const OTPverification = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Yes");
  const { data, setData } = useMyContext();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleClickButton = () => {
    if (selected) {
      setData({ ...data, "verification-type": selected });
      navigate(selected === "Yes" ? "/personal-details" : "/enter-otp");
    }
  };

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col ">
      <div className=" w-full p-8 pb-0">
        <div
          onClick={() => navigate("/phone-number")}
          className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          Do you want to proceed without OTP verification?
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col">
        <div className="w-full">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {dataVerification.map((data, index) => (
              <FormControlLabel
                key={index}
                sx={{
                  width: "100%",
                  border: "1px solid #D1CFCD",
                  padding: "12px 20px",
                  bgcolor: "#E5E2DE",
                  borderRadius: "28px",
                  marginBottom: "15px",
                }}
                value={data}
                control={
                  <Radio
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: "#4F285E",
                      },
                    }}
                  />
                }
                label={data}
              />
            ))}
          </RadioGroup>
          <div className=" font-poppins text-sm text-gray-500">
            Proceed without OTP if you live in an area with low network
            connectivity.
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

export default OTPverification;
