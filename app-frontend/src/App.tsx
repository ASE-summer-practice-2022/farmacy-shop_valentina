import "./App.scss";

import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Router from "./Router";

function App() {
  return (
    <Box className="app">
      <CssBaseline />
      <Router />
    </Box>
  );
}

export default App;
