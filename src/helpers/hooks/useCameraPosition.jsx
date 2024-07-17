import { useState } from "react";

const useCameraPosition = (initialPosition, cameraPositions) => {
  const [cameraPosition, setCameraPosition] = useState(initialPosition);

  const handleTurnLeft = () => {
    if (cameraPosition === cameraPositions[0]) {
      setCameraPosition(cameraPositions[2]);
    } else if (cameraPosition === cameraPositions[1]) {
      setCameraPosition(cameraPositions[0]);
    } else {
      setCameraPosition(cameraPositions[1]);
    }
  };

  const handleTurnRight = () => {
    if (cameraPosition === cameraPositions[0]) {
      setCameraPosition(cameraPositions[1]);
    } else if (cameraPosition === cameraPositions[1]) {
      setCameraPosition(cameraPositions[2]);
    } else {
      setCameraPosition(cameraPositions[0]);
    }
  };

  return {
    cameraPosition,
    handleTurnLeft,
    handleTurnRight,
  };
};

export default useCameraPosition;
