import React from "react";
import { FaDownload, FaGooglePlay, FaStar } from "react-icons/fa";

const StatesSection = () => {
  return (
    <div className="bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] text-white text-center py-10">
      <div className="max-w-9/10 mx-auto space-y-5">
        <div>
          <h2 className="text-3xl font-bold">
            Trusted by Millions, Built for You
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col justify-center items-center  rounded-lg space-y-2 py-3 hover:scale-110 duration-700">
            <p>Total Downloads</p>
            <div className="flex items-center gap-5">
              <h3 className="text-4xl font-black">29.6M</h3>
              <FaDownload className="text-4xl font-black" />
            </div>
            <p>21% More Than Last Month</p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg space-y-2 py-3 hover:scale-110 duration-700">
            <p>Total Reviews</p>
            <div className="flex items-center gap-5">
              <h3 className="text-4xl font-black">907K</h3>
              <FaStar className="text-4xl font-black" />
            </div>
            <p>46% More Than Last Month</p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg space-y-2 py-3 hover:scale-110 duration-700 ">
            <p>Active Apps</p>
            <div className="flex items-center gap-5">
              <h3 className="text-4xl font-black">132+</h3>
              <FaGooglePlay className="text-4xl font-black" />
            </div>
            <p>31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
