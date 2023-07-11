import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import Technology from "./views/Technology";
import WhoWeAre from "./views/Who We Are";
import Product from "./views/Product";
import ClinicalDiagnostics from "./views/Clinical Diagnostics";
import FoodSafety from "./views/Food Safety";
import BioDefense from "./views/BioDefense";

function App() {
  const location = useLocation();
  return (
    <div className="raveApp">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/product" element={<Product />} />
            <Route
              path="clinicalDiagnostics"
              element={<ClinicalDiagnostics />}
            />
            <Route path="foodSafety" element={<FoodSafety />} />
            <Route path="bioDefense" element={<BioDefense />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
