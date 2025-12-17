import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line "></i>
      </h5>
      <div className='flex items-center justify-between'>
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-base font-medium'>Adarsh</h2>
          <h4  className='text-lg font-bold -mt-1 -mb-0.5'>Mp 05 cx 3424</h4>
          <p className='text-gray-600 text-sm'>maruti polo</p>
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
      </div>
    </div>
  );
}

export default WaitingForDriver