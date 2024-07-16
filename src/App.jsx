import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faArrowRotateRight,
  faArrowRotateLeft,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Room from "../public/Room";
import { useState } from "react";
import SettingsComponent from "./Components/SettingsComponent/SettingsComponent";

const cameraPositions = [
  [0, 20, 22],
  [15, 20, 15],
  [22, 20, 0],
];

function App() {
  const [cameraPosition, setCameraPosition] = useState(cameraPositions[1]);

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
  return (
    <>
      <div className="App">
        <div className="header">
          <div className="part1">
            <div className="logo">
              <h3>Logo Icon</h3>
            </div>
            <div className="about_project icon">
              <h5>About Project</h5>
              <img
                src="../src/assets/icons/info.svg"
                style={{ alignSelf: "center", height: "20px", width: "20px" }}
              />
            </div>
          </div>
          <div className="part2">
            <img src="../src/assets/icons/paint.svg" className="icon" />
            <div className="icon">
              <img
                src="../src/assets/icons/wb_iridescent.svg"
                style={{ alignSelf: "center", height: "20px", width: "20px" }}
              />
              <p>Lighting</p>
            </div>

            <div className="extra_controllers">
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRotateLeft}
                onClick={handleTurnLeft}
              />
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRotateRight}
                onClick={handleTurnRight}
              />
              <img className="icon" src="../src/assets/icons/share.svg" />
              <FontAwesomeIcon className="icon" icon={faCameraRetro} />
              <img className="icon" src="../src/assets/icons/help.svg" />
            </div>
            <img
              className="icon"
              src="../src/assets/icons/close-icon.svg"
              style={{ alignSelf: "center", height: "20px", width: "20px" }}
            />
          </div>
        </div>
        <div className="container">
          <SettingsComponent />
          <div
            className="threeD_container"
            style={{ backgroundColor: "white" }}
          >
            <Canvas style={{ width: "100%", height: "100%" }}>
              <ambientLight intensity={-2} />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <Room></Room>
              </Suspense>
              <Environment preset="city" />
              <ContactShadows resolution={1024} frames={1} />
              <PerspectiveCamera
                makeDefault
                position={cameraPosition}
                zoom={1}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
