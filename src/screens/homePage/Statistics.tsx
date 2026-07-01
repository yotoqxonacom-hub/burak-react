//import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";

export default function Statistics() {
  return (
    <div className={"static-frame"} style={{ background: "#343434" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          className="info"
          sx={{ width: "100%", height: "100%" }}
        >
          {/* 1-Blok: Restaurants */}
          <Stack
            className="static-box"
            alignItems="center"
            justifyContent="center"
          >
            <Box className="static-num">12</Box>
            <Box className="static-text">Restaurants</Box>
          </Stack>

          { }
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: 64,
              width: "2px",
              bgcolor: "#E3C08D",
              border: "none",
              alignSelf: "center",
            }}
          />

          {/* 2-Blok: Experience */}
          <Stack
            className="static-box"
            alignItems="center"
            justifyContent="center"
          >
            <Box className="static-num">8</Box>
            <Box className="static-text">Experience</Box>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: 64,
              width: "2px",
              bgcolor: "#E3C08D",
              border: "none",
              alignSelf: "center",
            }}
          />

          {/* 3-Blok: Menu */}
          <Stack
            className="static-box"
            alignItems="center"
            justifyContent="center"
          >
            <Box className="static-num">50+</Box>
            <Box className="static-text">Menu</Box>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: 64,
              width: "2px",
              bgcolor: "#E3C08D",
              border: "none",
              alignSelf: "center",
            }}
          />

          {/* 4-Blok: Clients */}
          <Stack
            className="static-box"
            alignItems="center"
            justifyContent="center"
          >
            <Box className="static-num">200+</Box>
            <Box className="static-text">Clients</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}