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
            {/* <Route path="rooms" element={<Room />} />
            <Route path="menu" element={<Menu />} />
            <Route path="packages" element={<Packages />} /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
