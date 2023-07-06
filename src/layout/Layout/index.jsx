import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import React from "react";

function Layout() {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
