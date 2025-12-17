import React from "react";
import Home from "../pages/Home";
import VehiclePanel from "./VehiclePanel";
import LookingForDriver from "./LookingForDriver";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-xl font-semibold mb-3 ml-5">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between items-center flex-col ">
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
          alt=""
        />

        <div className="w-full mt-5">
          <div className="flex items-center gap-6 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">2781-A</h3>
              <p className="text-sm text-gray-600  ">
                kekru talab , surendranagar
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6 p-3 border-b-2 border-gray-200">
              <i className="text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">2781-A</h3>
                <p className="text-sm text-gray-600  ">
                  kekru talab , surendranagar
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6 p-3 border-b-2 border-gray-200">
              <i className="ri-money-rupee-circle-fill "></i>
              <div>
                <h3 className="text-lg font-medium">Rs.193</h3>
                <p className="text-sm text-gray-600  ">cash</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="w-full mt-3 bg-green-600 text-white mb-8 font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
