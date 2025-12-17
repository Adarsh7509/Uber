import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      {" "}
      <div className="h-1/2 w-screen p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 justify-start">
            <img
              className="h-12 mt-10 rounded-full objetc-cover"
              src="https://images.icon-icons.com/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png"
              alt=""
            />
            <h4 className="text-lg font-bold mt-10">Adarsh sharma</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold mt-12 mr-8">Rs.278</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex w-65 bg-green-500 rounded-xl gap-5 justify-center mt-8 p-3 mr-6">
          <div className="text-center">
            <i className="text-3xl font-thin ri-time-line"></i>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-medium">10.2</h4>
              <p className="text-sm whitespace-nowrap">Hours Online</p>
            </div>
          </div>
          <div className="text-center">
            <i className="text-3xl font-thin ri-speed-up-fill"></i>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-medium">100km</h4>
              <p className="text-sm whitespace-nowrap">Total Distance</p>
            </div>
          </div>
          <div className="text-center">
            <i className="text-3xl font-thin ri-book-open-line"></i>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-medium">100km</h4>
              <p className="text-sm whitespace-nowrap">Total Distance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
