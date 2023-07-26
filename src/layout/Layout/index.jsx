import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import React from "react";

function Layout() {
  return (
    <div className="w-full h-full">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
