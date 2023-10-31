import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
 

  return (
    <div
      className="p-6 relative transform hover:scale-105 transition-transform duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="shadow-md bg-green-200 front flex flex-col justify-center items-center w-[350px] h-[300px]">
          <div className="text-xl font-semibold text-green-600">
            {details.frontTitle}
          </div>
        </div>

        <div className=" w-[350px] h-[300px] shadow-md bg-pink-200 back flex flex-col justify-center items-center">
          <div className="text-xl font-semibold text-blue-600 p-2 gap-3">
            {details.backDetails.map((item, index) => (
              <span className='p-2 m-2 flex-col flex items-center justify-center' key={index}>{item}</span>
            ))}
          </div>
        </div>
        
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
