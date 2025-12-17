import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0  flex items-center justify-between w-screen">
        <img
          className="w-16  "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-7 w-4.3 bg-red-200 items-center justify-center rounded-full "
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div
        className="h-1/5 p-8 flex items-center justify-between bg-yellow-400 
       "onClick={() => {
          setFinishRidePanel(true)
        }}
      >
        <h5
          className="p-1 text-center w-[90%] absolute mb-24  "
          onClick={() => {
            
          }}
        >
          <i className="text-xl font-bold  ri-arrow-down-wide-line "></i>
        </h5>
        <h4 className="text-xl whitespace-nowrap ml-5 font-semibold">
          4 Km away
        </h4>
        <button
          className="mt-3 w-25 p-3 mr-5  bg-green-600 text-white  font-semibold p-2 rounded-lg"
          onClick={() => {
            setFinishRidePanel(true);
          }}
        >
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0  bg-white p-3 translateY-full py-3 px-6"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
