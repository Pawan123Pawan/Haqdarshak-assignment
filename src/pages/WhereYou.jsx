import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { fetchCities, statesOfIndia } from "../utils/state";
import { IoIosArrowDown } from "react-icons/io";
import { useMyContext } from "../components/ContextApi";
const WhereYou = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [click, setClick] = useState(false);
  const [clickDistrict, setClickDistrict] = useState(false);
  const [dataClick, setDataClick] = useState(false);
  const [dataClickDistrict, setDataClickDistrict] = useState(false);
  const [inputValueState, setInputValueState] = useState("");
  const [inputValueDistrict, setInputValueDistrict] = useState("");
  const [cities, setCities] = useState([]);
  const [pincodeClick, setPincodeClick] = useState(false);
  const [pincode, setPincode] = useState("");
  const { data, setData } = useMyContext();

  const handleChangeState = (event) => {
    setInputValueState(event.target.value);
    const filter = statesOfIndia.filter((state) =>
      state.toLowerCase().includes(event.target.value.trim().toLowerCase())
    );
    setStates(filter);
  };

  async function handleChangeDistrict(state) {
    setDataClick(false);
    setInputValueState(state);
    setInputValueDistrict("");
    const cities = await fetchCities(state);
    setCities(cities);
  }
  useEffect(() => {
    setStates(statesOfIndia);
  }, []);

  const handleClickButton = () => {
    if (inputValueDistrict && inputValueState && pincode) {
      const userAddress = {
        state: inputValueState,
        district: inputValueDistrict,
        pincode: pincode,
      };
      setData({ ...data, ...userAddress});
      navigate("/phone-number");
    }
  };

  return (
    <div className="w-full h-screen  bg-purple md:w-1/2 lg:w-[30%] mx-auto flex items-center justify-between md:rounded-lg flex-col ">
      <div className=" w-full p-8 pb-0" onClick={() => navigate("/location")}>
        <div className=" bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer">
          <FaArrowLeft />
        </div>
        <div className="text-[32px] text-white w-[80%] my-8">
          Where are you from?
        </div>
      </div>
      <div className="flex-1 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex gap-6 flex-col justify-between">
        <div className="flex gap-6 flex-col">
          <div className="w-full relative">
            <div
              className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
              onClick={() => {
                setClick(true);
                setDataClick(true);
                setDataClickDistrict(false);
                setClickDistrict(false);
              }}
            >
              <div className="flex items-center justify-between font-poppins">
                <span className={click ? "text-sm" : ""}>
                  {click ? "State" : "Select State"}
                </span>{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              {click && (
                <input
                  value={inputValueState}
                  onChange={handleChangeState}
                  type="text"
                  placeholder="state search here..."
                  className=" focus:outline-none bg-transparent font-poppins px-1 text-md"
                />
              )}
            </div>

            {dataClick && (
              <div className=" bg-white border px-3 py-5 rounded-3xl overflow-y-scroll absolute w-full top-[85px] shadow-sm h-[250px] scroll-behavior z-30">
                {states?.map((state, i) => (
                  <div
                    key={i}
                    className="mb-4 cursor-pointer"
                    onClick={() => handleChangeDistrict(state)}
                  >
                    <p className=" font-poppins mb-4 text-md text-gray-600">
                      {state}
                    </p>
                    <Divider />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-full relative">
            <div
              className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
              onClick={() => {
                setClickDistrict(true);
                setDataClickDistrict(true);
              }}
            >
              <div className="flex items-center justify-between font-poppins">
                <span className={clickDistrict ? "text-sm" : ""}>
                  {clickDistrict ? "District" : "Select District"}
                </span>{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              {clickDistrict && (
                <input
                  value={inputValueDistrict}
                  onChange={handleChangeState}
                  type="text"
                  placeholder="district search here..."
                  className=" focus:outline-none bg-transparent font-poppins px-1 text-md"
                />
              )}
            </div>

            {dataClickDistrict && (
              <div className=" bg-white border px-3 py-5 rounded-3xl overflow-y-scroll absolute w-full top-[85px] shadow-sm h-[250px] scroll-behavior z-30">
                {cities &&
                  cities?.map((city, i) => (
                    <div
                      key={i}
                      className="mb-4 cursor-pointer"
                      onClick={() => {
                        setInputValueDistrict(city);
                        setDataClickDistrict(false);
                      }}
                    >
                      <p className=" font-poppins mb-4 text-md text-gray-600">
                        {city}
                      </p>
                      <Divider />
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="w-full relative">
            <div
              className=" bg-inputColor px-4 py-4 rounded-3xl border border-myborderColor cursor-pointer"
              onClick={() => {
                setPincodeClick(true);
              }}
            >
              <div className="flex items-center justify-between font-poppins">
                <span className={pincodeClick ? "text-sm" : ""}>
                  {pincodeClick ? "Pincode" : "Enter your Pincode"}
                </span>{" "}
              </div>
              {pincodeClick && (
                <input
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  type="text"
                  placeholder="Pincode here..."
                  className=" focus:outline-none bg-transparent font-poppins px-1 text-md"
                />
              )}
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

export default WhereYou;