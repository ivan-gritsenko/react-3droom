import React, { useState } from "react";
import "./SettingsComponent.css";
import PopupComponent from "../PopupComponent/PopupComponent";

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
          <img src="../src/assets/icons/textures.svg" alt="" />
          <p style={{ color: "white" }}>textures</p>
        </div>

        <div className="icon ">
          <img src="../src/assets/icons/light.svg" alt="" />
          <p>lighting</p>
        </div>

        <div className="icon">
          <img src="../src/assets/icons/furniture.svg" alt="" />
          <p>furniture</p>
        </div>

        <div className="icon">
          <img src="../src/assets/icons/building.svg" alt="" />
          <p>building</p>
        </div>
      </div>
      {popup && <PopupComponent />}
    </>
  );
};

export default SettingsComponent;
