import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdMyLocation } from "react-icons/md";
import Map from "../components/Map";

const LocationMap = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    // Fetch the user's current location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });

          // Fetch address details using reverse geocoding
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
            .then((response) => response.json())
            .then((data) => {
              setAddress({
                city: data.city,
                state: data.principalSubdivision,
                country: data.countryName,
              });
            })
            .catch((error) => {
              console.error("Error fetching address details:", error);
            });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className=" relative w-full h-screen md:w-1/2 lg:w-[30%] mx-auto flex items-center  md:rounded-lg flex-col ">
      <div
        onClick={() => navigate("/location")}
        className=" absolute top-7 left-7 z-30 bg-white w-[56px] h-[40px] rounded-3xl text-purple text-2xl flex items-center justify-center cursor-pointer"
      >
        <FaArrowLeft />
      </div>
      <Map currentLocation={currentLocation} />
      <div className=" absolute bottom-0 bg-mybg h-auto w-full p-8  rounded-t-[10%] flex justify-between flex-col gap-12">
        <div>
          <p className="font-poppins text-lg text-gray-600 mb-3 font-medium">
            You are here right now
          </p>
          <div className=" flex items-center font-semibold gap-2 font-poppins rounded-3xl opacity-80">
            <span className="text-2xl">
              <MdMyLocation />
            </span>
            <span className="text-lg">{`${address?.city}, ${address?.state}, ${address?.country}.`}</span>
          </div>
        </div>
        <button
          className="font-poppins w-full bg-purple text-lg text-white p-4 rounded-[28px]"
          onClick={() => navigate("/where-are-you")}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default LocationMap;
