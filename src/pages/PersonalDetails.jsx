import React, { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Divider, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useMyContext } from "../components/ContextApi";
import { toast } from "react-toastify";
import Sppiner from "../components/Sppiner";
const PersonalDetails = () => {
  const navigate = useNavigate();
  const [clickName, setClickName] = useState(false);
  const [disable, setDisable] = useState("age");
  const [fullname, setFullname] = useState("");
  const [dobClick, setDOB] = useState(false);
  const [ageClick, setAgeClick] = useState(false);
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const { data, setData } = useMyContext();
  const [selected, setSelected] = useState("Male");
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [dobError, setDOBError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleNameChange = (event) => {
    const length = 20;
    let input = event.target.value;
    // Remove non-alphabetic characters
    input = input.replace(/[^a-zA-Z\s]/g, "");
    if (input !== event.target.value) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    input = input.slice(0, length);
    setFullname(input);
  };

  const handleClickButton = () => {
    if (fullname && (age || dob) && selected) {
      setData({
        ...data,
        fullname: fullname,
        age: age,
        "date-of-birth": dob,
        gender: selected,
      });
      //post user information
      userData();
    }
  };

  const handleDOB = (event) => {
    const length = 10;
    let input = event.target.value;
    // Remove non-numeric and non-slash characters
    input = input.replace(/[^0-9/]/g, "");

    if (input !== event.target.value) {
      setDOBError(true);
    } else {
      setDOBError(false);
    }
    input = input.slice(0, length);
    setDob(input);
    checkDob(input);
  };

  const checkDob = (input) => {
    if (input.length > 2 && input.charAt(2) !== "/") {
      setDOBError(true);
    }
    if (input.length > 5 && input.charAt(5) !== "/") {
      setDOBError(true);
    }
  };

  const handleAge = (event) => {
    const length = 3;
    let input = event.target.value;
    // Remove non-digit characters
    input = input.replace(/\D/g, "");

    if (input !== event.target.value) {
      if (event.target.value.length <= 3) setAgeError(true);
    } else {
      setAgeError(false);
    }
    input = input.slice(0, length);
    setAge(input);
  };

  const userData = async () => {
    setLoading(true);
    const user = {
      fullname: fullname,
      gender: selected,
      language: data.language,
      age: age,
      dateOfBirth: dob,
      district: data.district,
      state: data.state,
      pincode: data.pincode,
      loginWithWay: data["login-with-way"],
      verificationType: data["verification-type"],
      phoneNumber: data.phoneNumber,
    };
    try {
      const res = await toast.promise(
        fetch(
          `https://haqdarshak-assignment-backend.onrender.com/user-database/user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        ),
        {
          pending: "Promise is pending",
          success: "Promise resolved 👌",
          error: "Promise rejected 🤯",
        }
      );
      if (res.ok) {
        toast.success("User created successfully", { autoClose: 7000 });
        navigate("/profile");
        setLoading(false);
      } else {
        console.error("Failed to create user", res);
        navigate("/personal-details");
        toast.error("Failed to create user");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      navigate("/personal-details");
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col ">
      <div className=" w-full p-8 pb-0">
        <div
          onClick={() => navigate("/otp-verification")}
          className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          Personal Details
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col">
        <div className="w-full overflow-auto h-[380px] scroll-behavior">
          <div className="w-full relative">
            <div>
              <div className="mb-3">Name</div>
              <div
                className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
                onClick={() => setClickName(true)}
              >
                <div className="flex items-center justify-between font-poppins">
                  <span className={clickName ? "text-sm" : ""}>
                    {clickName ? "Full Name" : "Enter your Full Name"}
                  </span>{" "}
                </div>
                {clickName && (
                  <input
                    value={fullname}
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Enter You Full Name"
                    className=" focus:outline-none bg-transparent font-poppins px-1 text-md"
                  />
                )}
                {nameError && (
                  <p className=" font-medium text-xs text-red-700 font-poppins">
                    *Enter only characters value.
                  </p>
                )}
              </div>
              <Divider sx={{ margin: "18px 0" }} />
            </div>
            <div>
              <div className="">Gender</div>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onClick={handleChange}
              >
                {["Male", "Female", "Other"].map((value, i) => (
                  <FormControlLabel
                    key={i}
                    value={value}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#4F285E",
                          },
                        }}
                      />
                    }
                    label={value}
                    sx={{ fontSize: 5, fontFamily: "'Poppins', 'sans-serif'" }}
                  />
                ))}
              </RadioGroup>
              <Divider sx={{ margin: "18px 0" }} />
            </div>
            <div>
              <div className="mb-3">DOB/Age</div>
              <div className="flex gap-2 items-center">
                <div
                  className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
                  onClick={() => {
                    setDOB(true);
                    setAgeClick(false);
                    setDisable("age");
                  }}
                >
                  <div
                    className={`flex items-center justify-between font-poppins ${
                      disable === "dob" ? "opacity-30" : ""
                    }`}
                  >
                    <span className={dobClick ? "text-sm" : ""}>
                      {dobClick ? "Date of Birth" : "Enter your Birthday"}
                    </span>{" "}
                  </div>
                  {dobClick && (
                    <input
                      value={dob}
                      onChange={handleDOB}
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className=" focus:outline-none bg-transparent font-poppins px-1 text-md w-[60%]"
                    />
                  )}
                  {dobError && (
                    <p className=" font-medium text-xs text-red-700 font-poppins">
                      *Enter only this format DD/MM/YYYY.
                    </p>
                  )}
                </div>
                <div>OR</div>
                <div
                  className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
                  onClick={() => {
                    setAgeClick(true);
                    setDOB(false);
                    setDisable("dob");
                  }}
                >
                  <div
                    className={`flex items-center justify-between font-poppins ${
                      disable === "age" ? "opacity-30" : ""
                    }`}
                  >
                    <span className={ageClick ? "text-sm" : ""}>
                      {ageClick ? "Age" : "Age"}
                    </span>{" "}
                  </div>
                  {ageClick && (
                    <input
                      value={age}
                      onChange={handleAge}
                      type="text"
                      placeholder="age..."
                      className=" w-[60%] focus:outline-none bg-transparent font-poppins px-1 text-md"
                    />
                  )}
                  {ageError && (
                    <p className=" font-medium text-xs text-red-700 font-poppins">
                      *Enter only numeric value.
                    </p>
                  )}
                </div>
              </div>
              <Divider sx={{ margin: "18px 0" }} />
            </div>
            <div className=" font-poppins text-sm text-gray-500 my-3">
              This information helps us suggest schemes that are right for you.
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="font-poppins w-full bg-purple text-lg text-white p-3 rounded-[28px]"
            onClick={handleClickButton}
          >
            {loading ? <Sppiner /> : "Submit"}
          </button>
          <div className=" font-poppins text-xs text-gray-500 mt-3">
            By creating an account, I agree to Haqdarshak’s Terms of Service &
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
