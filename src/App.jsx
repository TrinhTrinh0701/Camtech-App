import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import BioDefense from "./views/BioDefense";
import ClinicalDiagnostics from "./views/Clinical Diagnostics";
import ContactUs from "./views/ContactUs";
import FoodSafety from "./views/Food Safety";
import Home from "./views/Home";
import Product from "./views/Product";
import Technology from "./views/Technology";
import WhoWeAre from "./views/Who We Are";

function App() {
  const location = useLocation();
  return (
    <div className="CamtechApp">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
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
