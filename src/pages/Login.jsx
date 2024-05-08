import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../components/ContextApi";
const dataLogin = [
  "Register me as a new user",
  "Use my Phone Number",
  "Use my Yojana Card",
];
const Login = () => {
  const [selected, setSelected] = useState("Register me as a new user");
  const { data, setData } = useMyContext();
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const navigate = useNavigate();

  const handleClickButton = () => {
    setData({ ...data, "login-with-way": selected });
    navigate(
      selected === "Register me as a new user"
        ? "/location"
        : selected === "Use my Phone Number"
        ? "/phone-number"
        : "/yojana-card"
    );
  };

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col ">
      <div className=" w-full p-8 pb-0">
        <div
          onClick={() => navigate("/select-language")}
          className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          How do you want to login?
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col">
        <div className="w-full">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Register me as a new user"
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {dataLogin.map((data, index) => (
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

export default Login;
