import React, { useState } from "react";
import "./PopupColumnsComponent.css";
import { colors } from "../../../src/constants/colors";
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
import { tiles_img } from "../../../public/data/tiles_img";
import Stack from "@mui/material/Stack";
import ScrollableContainer from "../../../src/helpers/ScrollableContainer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { sortTiles } from "../../../src/helpers/sortTiles";
import { tiles } from "../../../public/data/tiles";
import Typography from "@mui/material/Typography";

const PopupColumnsComponent = () => {
  const [sort, setSort] = useState(true);

  const visibleTiles = sortTiles(tiles, sort);

  const handleSort = () => {
    setSort(!sort);
  };
  return (
    <div className="columns">
      <div className="column">
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2 }}>
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
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Button variant="outlined" endIcon={<FavoriteIcon />} color="black">
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
                <Grid item={true.toString()} xs={4} key={item[0]}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={tiles_img[item[0]]}
                      alt=""
                      style={{ width: "76px", height: "76px" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>{item[1]}</Typography>
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
              <ColorPicker colors={colors} />
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
                <FormControlLabel control={<Checkbox />} label="Subway (4)" />
                <FormControlLabel control={<Checkbox />} label="Street (16)" />
                <FormControlLabel control={<Checkbox />} label="House (21)" />
                <FormControlLabel control={<Checkbox />} label="Premium (14)" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Button variant="contained" sx={{ mt: "10px" }}>
            Apply
          </Button>
        </ScrollableContainer>
      </div>
    </div>
  );
};

export default PopupColumnsComponent;
