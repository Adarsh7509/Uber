import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className=" fixed right-2 top-2 h-10 w-5 bg-white items-center justify-center rounded-full ">
        <i className=" text-lg font-medium ri-home-4-line"></i>
      </Link>
      <div className="h-1/2">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className="h-1/2 p-4 mt-6">
        <div className="flex items-center justify-between">
          <img
            className="h-12 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-base font-medium">Adarsh</h2>
            <h4 className="text-lg font-bold -mt-1 -mb-0.5">Mp 05 cx 3424</h4>
            <p className="text-gray-600 text-sm">maruti polo</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center flex-col ">
          <div className="w-full mt-5">
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
        </div>
        <button className="w-full mt-3 bg-green-600 text-white mb-8 font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
