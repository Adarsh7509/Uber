import React, { use, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setridePopUpPanel] = useState(true);
  const [ConfirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (ConfirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePopUpPanel]
  );

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="fixed p-6 top-0  flex items-center justify-between ">
        <img
          className="w-16  "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className=" h-15 w-5 bg-red-200 items-center justify-center rounded-full "
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-1/2">
        <img
          className=""
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-3 ">
        <CaptainDetails />
      </div>
      <div>
        <div
          ref={ridePopUpPanelRef}
          style={{ transform: "translateY(100%)" }}
          className="fixed w-full z-10 bottom-0  bg-white p-3 py-3 px-6"
        >
          <RidePopUp
            setridePopUpPanel={setridePopUpPanel}
            setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          />
        </div>
        <div
          ref={confirmRidePopUpPanelRef}
          style={{ transform: "translateY(100%)" }}
          className="fixed w-full z-10 bottom-0  bg-white p-3 py-3 px-6"
        >
          <ConfirmRidePopUp
            setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
            setridePopUpPanel={setridePopUpPanel}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
