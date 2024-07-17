import React, { useState } from "react";
import "./PopupComponent.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../src/theme";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PopupColumnsComponent from "../PopupColumnsComponent/PopupColumnsComponent";

function handleClick(event) {
  event.preventDefault();
}

const PopupComponent = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Surface name
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Texture
    </Link>,
    <Typography key="3" color="text.primary">
      Tile
    </Typography>,
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="popup">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <PopupColumnsComponent></PopupColumnsComponent>
      </div>
    </ThemeProvider>
  );
};

export default PopupComponent;
