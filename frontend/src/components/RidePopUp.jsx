import React from "react";

const RidePopUp = (props) => {
  return (
    <div className="mb-5">
      <h5
        className=" text-center w-[95 %] top-0"
        onClick={() => {
          props.setridePopUpPanel(false);
        }}
      >
        <i className="text-xl font-bold  ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-xl font-semibold mb-3 mt-3 ml-5">
        New Ride Available!
      </h3>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 w-full justify-between items-center  bg-yellow-400 p-3 rounded-lg">
          <img
            className="h-11 w-11 rounded-full object-cover "
            src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
            alt=""
          />
          <h2 className="text-xl font-medium mr-12">Adarsh sharma</h2>
          <h5 className="font-semibold">2.2km</h5>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center flex-col ">
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
            if (props.setConfirmRidePopUpPanel) {
              props.setConfirmRidePopUpPanel(true);
            } else {
              console.error("setConfirmRidePopUpPanel is not defined");
            }
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Accept Ride
        </button>
        <button
          onClick={() => {
            props.setridePopUpPanel(false);
          }}
          className="w-full mt-3 bg-gray-400 text-gray-700  font-semibold p-2 rounded-lg"
        >
          Reject Ride
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
