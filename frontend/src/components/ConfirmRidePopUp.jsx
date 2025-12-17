import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

  };

  return (
    <div className="">
      <h5
        className="p-1 text-center w-[93%] absolute top-0 z-50 cursor-pointer"
        onClick={() => props.setConfirmRidePopUpPanel(false)}
      >
        <i className="text-xl font-bold ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-xl font-semibold mb-3 mt-6 ml-5">
        Confirm This ride to start!
      </h3>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 w-full justify-between items-center bg-yellow-400 p-3 rounded-lg">
          <img
            className="h-11 w-11 rounded-full object-cover"
            src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
            alt=""
          />
          <h2 className="text-xl font-medium mr-12">Adarsh sharma</h2>
          <h5 className="font-semibold">2.2km</h5>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-6 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">2781-A</h3>
              <p className="text-sm text-gray-600">
                kekru talab , surendranagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">2781-A</h3>
              <p className="text-sm text-gray-600">
                kekru talab , surendranagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b-2 border-gray-200">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Rs.193</h3>
              <p className="text-sm text-gray-600">cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form onSubmit={submitHandler}>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              required
            />

            <button
              type="submit"
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setridePopUpPanel(false);
                navigate("/captain-riding");
              }}
              
              className="w-full bg-green-600 text-white text-center font-semibold p-2 rounded-lg"
            >
              Confirm Ride
            </button>

            <button
              type="button"
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setridePopUpPanel(false);
              }}
              className="w-full mt-3 bg-red-600 text-white font-semibold p-2 rounded-lg mb-8"
            >
              Cancel Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
