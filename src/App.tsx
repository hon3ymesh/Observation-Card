import React from "react";
import { Box } from "@mui/material";
import ObservationCard from "./components/card/observationCard";
import { observationData } from "./data/mockData";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        p: 3,
        gap: 2,
        flexWrap: "wrap",
        bgcolor: "#F9FAFB",
      }}
    >
      {observationData.map((item, index) => (
        <ObservationCard key={index} {...item} />
      ))}
    </Box>
  );
}
