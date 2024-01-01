
import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
const Overlay = ({ imageSrc, onClose }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  
    useEffect(() => {
      setIsOverlayVisible(!!imageSrc);
    }, [imageSrc]);
  
    const overlayStyle = {
      transition: "transform 0.3s ease-in-out",
      transform: isOverlayVisible ? 'scale(1)' : 'scale(0)',
    };
  
    return (
      <Transition in={isOverlayVisible} timeout={300} onExited={() => onClose()}>
        {(state) => (
          <div>
            <div
              id="overlayBackground"
              className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-black"
            />
            <div
              id="overlay"
              className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center overlay-transition overlay-${state}`}
              style={overlayStyle}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                onClick={onClose}
              >
                &times;
              </button>
              <img
                id="overlayImage"
                src={imageSrc}
                alt="Overlay Image"
                className="max-w-[80%] max-h-[80%] object-contain cursor-pointer"
              />
            </div>
          </div>
        )}
      </Transition>
    );
  };

  export default Overlay;