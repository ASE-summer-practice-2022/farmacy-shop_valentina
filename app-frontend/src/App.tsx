import "./App.scss";

import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./components";
import { Header } from "./layouts";
import { Cart, Home, PageNotFound, Product } from "./pages";

function App() {
  return (
    <Box className="app">
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
