import React, { useState } from "react";
import "./SettingsComponent.css";
import PopupComponent from "../PopupComponent/PopupComponent";
import TonalityIcon from "@mui/icons-material/Tonality";
import LightIcon from "@mui/icons-material/Light";
import ChairIcon from "@mui/icons-material/Chair";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const SettingsComponent = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className="settings">
        <div
          className="icon"
          style={{
            backgroundColor: "#49494C",
            border: "4px solid #49494C",
            borderRadius: "10px",
          }}
          onClick={() => setPopup(!popup)}
        >
          <TonalityIcon sx={{ color: "white" }} />
          <p style={{ color: "white" }}>textures</p>
        </div>

        <div className="icon ">
          <LightIcon />
          <p>lighting</p>
        </div>

        <div className="icon">
          <ChairIcon />
          <p>furniture</p>
        </div>

        <div className="icon">
          <MeetingRoomIcon />
          <p>building</p>
        </div>
      </div>
      {popup && <PopupComponent />}
    </>
  );
};

export default SettingsComponent;
