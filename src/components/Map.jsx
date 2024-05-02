import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({currentLocation}) => {

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCl7NyEJ2UubVUOlTdUL3sGiChPHUYws10",
      version: "weekly",
    });

    loader.load().then(() => {
      const google = window.google;
      const mapInstance = new google.maps.Map(document.getElementById("map"), {
        center: { lat: currentLocation?.lat || 0, lng: currentLocation?.lng || 0 },
        zoom: 16,
      });

      // Add a marker for the current location
      const marker = new google.maps.Marker({
        position: { lat: currentLocation?.lat || 0, lng: currentLocation?.lng || 0 },
        map: mapInstance,
        title: "Your Location",
      });

    });
  }, [currentLocation]);



  return (
    <div className="flex-1 w-full" id="map">
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;
