import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "2781, sudama nagar sector-D indore",
    "2785, sudama nagar sector-D indore",
    "2789, sudama nagar sector-D indore",
    "2791, sudama nagar sector-D indore",
  ];

  return (
    <div>
      {locations.map((elem) => (
        <div
          key={elem}
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          className="flex gap-1/2 border-2 p-3 border-gray-100 active:border-black rouder-2xl items-center justify-start "
        >
          <h2 className="bg-[#eee] p-4">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
