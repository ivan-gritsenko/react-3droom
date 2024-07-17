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
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DrawIcon from "@mui/icons-material/Draw";
import WbIridescentIcon from "@mui/icons-material/WbIridescent";
import ShareIcon from "@mui/icons-material/Share";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import useCameraPosition from "./helpers/hooks/useCameraPosition";

const cameraPositions = [
  [0, 20, 22],
  [15, 20, 15],
  [22, 20, 0],
];

function App() {
  const initialPosition = cameraPositions[0];

  const { cameraPosition, handleTurnLeft, handleTurnRight } = useCameraPosition(
    initialPosition,
    cameraPositions
  );

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
              <ErrorOutlineIcon />
            </div>
          </div>
          <div className="part2">
            <div className="icon">
              <DrawIcon />
            </div>
            <div className="icon">
              <WbIridescentIcon
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
              <div className="icon">
                <ShareIcon />
              </div>

              <FontAwesomeIcon className="icon" icon={faCameraRetro} />
              <div className="icon">
                <HelpOutlineIcon />
              </div>
            </div>
            <div className="icon">
              <CloseIcon
                style={{ alignSelf: "center", height: "20px", width: "20px" }}
              />
            </div>
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
