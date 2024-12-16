import "../index.css";
import React, { useState } from "react";
import frontImage from "../assets/reindeers.jpeg";
import backImage from "../assets/bgstar.png";

const ChristmasCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev); // Snur kortet
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="absolute top-32 text-center w-full">
        <p className="text-white mt-2">Klikk på kortet for å snu det</p>
      </div>
      <div
        className="relative w-4/6 h-2/4 lg:w-3/6 lg:h-1/2 xl:w-5/12 xl:h-1/2 perspective cursor-pointer "
        onClick={handleFlip}
      >
        <div
          className={`absolute inset-0 transform-style-3d transition-transform duration-1000 ${
            isFlipped ? "rotateY-180" : ""
          }`}
        >
          {/* Forsiden av kortet */}
          <div className="absolute inset-0 rounded-lg   flex-col justify-center items-center backface-hidden overflow-hidden shadow-md shadow-blue-950">
            <img
              src={frontImage}
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              draggable="false"
            />
            <div className="relative z-10 w-full h-full p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white font-greatvibes ">
                God Jul
              </h1>
            </div>
          </div>

          {/* Baksiden av kortet */}
          <div className="absolute inset-0  rounded-lg shadow-md shadow-blue-950  flex  transform rotateY-180  backface-hidden">
            <div className="absolute inset-0 flex justify-center items-center text-start p-4 bg-gray-100 rounded-lg">
              <img
                src={backImage}
                className="absolute inset-0 object-contain opacity-50 w-full h-1/2 rounded-lg"
                draggable="false"
              />
              <h1 className="text-3xl md:text-4xl text-green-900 text-center font-greatvibes z-10 pt-10 ">
                Med ønske om en riktig god jul <br></br> og et godt nyttår!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasCard;
