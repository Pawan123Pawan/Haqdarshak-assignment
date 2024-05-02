import { FaArrowLeft } from "react-icons/fa6";
import { BiSolidTorch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import qrCode from "../assets/qrCode.png";
import Gallery from "../components/Gallery";

const YojanaCard = () => {
  const navigate = useNavigate();

  return (
    <div className=" relative w-full h-screen md:w-1/2 lg:w-[30%] mx-auto flex items-center  md:rounded-lg flex-col ">
      <div
        onClick={() => navigate("/login")}
        className=" absolute top-5 left-4 z-30  w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer "
      >
        <FaArrowLeft />
      </div>
      <div
        onClick={() => navigate("")}
        className=" absolute top-5 right-4 z-30  w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
      >
        <BiSolidTorch />
      </div>
      <div className=" relative flex-1 bg-[#FFDDEE] w-full flex justify-center items-center rounded-2xl px-8 flex-col gap-5">
        <p className="text-lg text-purple text-center font-bold font-poppins w-[200px]">
          Scan QR from Yojana Card to login
        </p>
        <div className="w-[200px] h-[200px] bg-white border-4 border-purple rounded-xl">
        <img src={qrCode} alt="qrCode" className="w-full h-full object-contain" />
        </div>
        
        <Gallery/>
      </div>

      <div className=" absolute bottom-0 bg-mybg h-auto w-full p-8  rounded-t-[20%] flex justify-between flex-col">
        <div className="w-full flex items-center font-poppins mb-5">
          <p className="border-t w-full border-myborderColor"></p>
          <p className="mx-5 font-semibold">OR</p>
          <p className="border-t w-full border-myborderColor"></p>
        </div>
        <button
          className="font-poppins w-full bg-purple text-lg text-white p-3 rounded-[28px]"
          onClick={() => navigate("/phone-number")}
        >
          Use Phone Number
        </button>
      </div>
    </div>
  );
};

export default YojanaCard;
