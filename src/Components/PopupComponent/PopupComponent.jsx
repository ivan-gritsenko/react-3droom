import React, { useState } from "react";
import "./PopupComponent.css";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../src/theme";
import { tiles } from "../../../public/data/tiles";
import Stack from "@mui/material/Stack";
import ScrollableContainer from "../../../src/helpers/ScrollableContainer";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MenuIcon from "@mui/icons-material/Menu";
import { plates } from "../../../public/data/plates";
import Grid from "@mui/material/Unstable_Grid2";
import ColorPicker from "../../../src/helpers/ColorPicker/ColorPicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { sizes } from "../../../public/data/sizes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function handleClick(event) {
  event.preventDefault();
}

const handleColorSelect = (color) => {
  console.log("Selected color:", color);
};

function sortTiles(tiles, sort) {
  if (sort) {
    return Object.entries(tiles).sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
  return Object.entries(tiles);
}

const PopupComponent = () => {
  const [sort, setSort] = useState(true);

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
  const colors = [
    "#DD7907",
    "#A02128",
    "#FFA421",
    "#354733",
    "#5E2028",
    "#474A50",
    "#474A50",
    "#EAF044",
    "#D15B8F",
    "#07737A",
    "#154889",
    "#2874B2",
    "#4A203B",
    "#8A5A83",
    "#327662",
    "#B7D9B1",
    "#81C0BB",
    "#81C0BB",
  ];

  const visibleTiles = sortTiles(tiles, sort);

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="popup">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="columns">
          <div className="column">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Button variant="contained" size="small">
                Tiles
              </Button>
              <Button variant="outlined" size="small">
                Paint
              </Button>
              <Button variant="outlined" size="small">
                Wallpaper
              </Button>
            </Stack>
            <div className="inputs_area">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  variant="outlined"
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>

              <Button
                variant="outlined"
                endIcon={<FavoriteIcon />}
                color="black"
              >
                Saved
              </Button>
            </div>
            <div className="shops_sort">
              <h3>81 shops</h3>
              <div
                onClick={handleSort}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <p style={{ userSelect: "none" }}>sort by alphabet</p>
                {sort ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
            </div>
            <div className="shop_list">
              {visibleTiles.map((item) => (
                <div className="shop" key={item[0]}>
                  <h4>{item[0]}</h4>
                  <p style={{ color: "gray" }}>({item[1]})</p>
                </div>
              ))}
            </div>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Use your own texture
            </Button>
          </div>
          <div className="column">
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ color: "gray" }}>124.124 items</h3>
              <div style={{ display: "flex", gap: "8px", alignItems: "end" }}>
                <h3>Filter</h3>
                <MenuIcon />
              </div>
            </div>

            <ScrollableContainer>
              <div style={{ paddingTop: "20px" }}>
                <Grid container>
                  {Object.entries(plates).map((item) => (
                    <Grid item xs={4} key={item[0]}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img
                          src={`../../src/assets/images/${item[0]}.png`}
                          alt=""
                          style={{ width: "76px", height: "76px" }}
                        />
                        <Typography sx={{ fontSize: "12px" }}>
                          {item[1]}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Colors 20
                </AccordionSummary>
                <AccordionDetails>
                  <ColorPicker
                    colors={colors}
                    onColorSelect={handleColorSelect}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Size 20
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {Object.entries(sizes).map((item) => (
                      <FormControlLabel
                        control={<Checkbox />}
                        label={`${item[0]} (${item[1]})`}
                        value={item[1]}
                        key={item[0]}
                      />
                    ))}
                  </FormGroup>
                  <Button
                    variant="contained"
                    color="yellow"
                    sx={{ borderRadius: "20px" }}
                  >
                    Show more +
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Look 4
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Subway (4)"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Street (16)"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="House (21)"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Premium (14)"
                    />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Button variant="contained" sx={{ mt: "10px" }}>
                Apply
              </Button>
            </ScrollableContainer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PopupComponent;
