import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5C00", // Your primary color
    },
    secondary: {
      main: "#FF8642", // Your secondary color
    },
    third: {
      main: "#787878",
    },
    black: {
      main: "#000000",
    },
    yellow: {
      main: "#FECC00",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
    },
    // Add other typography settings here
  },
  // You can add more customizations here
});

export default theme;
