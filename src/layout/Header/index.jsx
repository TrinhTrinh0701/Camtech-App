import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoWhite from "../../asset/img/Logo/Logo white.png";
import Logo from "../../asset/img/Logo/Logo.png";
import FB from "../../asset/img/facebook.png";
import IG from "../../asset/img/instagram.png";
import LK from "../../asset/img/linkedin.png";
import YT from "../../asset/img/youtube.png";

const styles = {
  link: "cursor-pointer",
  color: "text-black",
};

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const location = useLocation();
  const navigateToHome = () => {
    navigate("/");
  };
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const [openMenu, setOpenMenu] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);
  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const getHeaderStyle = () => {
    if (isHome && color) {
      return { backgroundColor: "white", color: "#107AB7" };
    } else if (isHome && !color) {
      return { backgroundColor: "transparent", color: "white" };
    } else if (!isHome && color) {
      return { backgroundColor: "white", color: "#107AB7" };
    } else {
      return { backgroundColor: "transparent", color: "#107AB7" };
    }
  };

  return (
    <div
      style={getHeaderStyle()}
      className={
        color
          ? " fixed z-[997] top-0 left-0 right-0 w-full flex justify-between px-4 md:px-6 lg:px-[124px] bg-cyan-500 shadow-lg shadow-cyan-500/50 "
          : "fixed z-[997] top-0 left-0 right-0 w-full flex justify-between px-4 md:px-6 lg:px-[124px] "
      }
    >
      <div className="py-6 ">
        {color || !isHome ? (
          <img
            src={Logo}
            className="h-[56px] w-[190px] cursor-pointer object-cover"
            alt=""
            srcSet=""
            onClick={navigateToHome}
          />
        ) : (
          <img
            src={LogoWhite}
            className="h-[56px] w-[190px] cursor-pointer object-cover"
            alt=""
            srcSet=""
            onClick={navigateToHome}
          />
        )}
      </div>
      <div className=" flex gap-[32px] justify-center items-center ">
        <div className="hidden lg:block">
          <div className="flex gap-[32px] ">
            <div className=" leading-[26px] text-base font-semibold">
              <Link
                to="/"
                className={`${styles.link} ${
                  pathname === "/" ? " font-extrabold" : ""
                }`}
              >
                Home
              </Link>
            </div>
            <div className=" leading-[26px] text-base font-semibold">
              <Link
                to="/whoweare"
                className={`${styles.link} ${
                  pathname === "/whoweare" ? " font-extrabold " : ""
                }`}
              >
                Who We Are
              </Link>
            </div>
            <Menu open={openMenu} handler={setOpenMenu}>
              <MenuHandler>
                <Button
                  {...triggers}
                  variant="text"
                  style={getHeaderStyle()}
                  className={
                    color
                      ? "leading-[26px] py-0 px-0 flex gap-1 text-base font-semibold capitalize bg-white text-[#107AB7]"
                      : "leading-[26px] py-0 px-0 flex gap-1  text-base font-semibold capitalize text-white "
                  }
                >
                  <Link to="/product"> Products</Link>
                  <div className="mt-[-3px]">
                    <DownOutlined
                      className={`text-xs transition-transform ${
                        openMenu ? "rotate-50" : ""
                      }`}
                    />
                  </div>
                </Button>
              </MenuHandler>
              <MenuList
                {...triggers}
                className="hidden w-[200px] overflow-visible lg:grid "
              >
                <ul className="flex flex-col items-center justify-center w-full col-span-4 gap-1 hover:border-none ">
                  <div className="leading-[26px] hover:border-none cursor-pointer flex flex-col gap-4 font-bold text-base">
                    <div className="flex items-center hover:text-black">
                      <Link to="clinicalDiagnostics">
                        <p>Clinical Diagnostics</p>
                      </Link>
                    </div>
                    <div className="flex items-center hover:text-black">
                      <Link to="foodSafety">
                        {" "}
                        <p>Food Safety</p>
                      </Link>
                    </div>
                    <div className="flex items-center hover:text-black">
                      <Link to="bioDefense">
                        <p>Biodefense</p>
                      </Link>
                    </div>
                  </div>
                </ul>
              </MenuList>
            </Menu>
            <div className="leading-[26px] text-base font-semibold">
              <Link
                to="/technology"
                className={`${styles.link} ${
                  pathname === "/technology" ? " font-extrabold " : ""
                }`}
              >
                Technology
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="gap-6 md:flex">
            <div className="hidden cursor-pointer md:block ">
              <div
                className={
                  color || !isHome
                    ? " flex  gap-1  py-[12px] px-[24px] rounded-md border border-[#107AB7]   "
                    : "flex  gap-1 py-[12px] px-[24px] rounded-md border border-white "
                }
              >
                <Link to="/contact">
                  <button className="text-base font-bold">CONTACT US</button>
                </Link>
                <div className="flex items-center justify-center text-xl ">
                  <RightOutlined></RightOutlined>
                </div>
              </div>
            </div>
            <div onClick={handleShow} className="lg:hidden">
              <MenuOutlined
                onClick={() => setShowMenu(false)}
                className="flex items-center justify-center w-10 h-10 text-[30px] "
              ></MenuOutlined>
            </div>
            <div
              className={
                showMenu
                  ? "bg-[#107AB7] lg:hidden  w-full ease-in-out duration-500 flex flex-col gap-[80px] fixed right-0 top-0"
                  : "fixed right-[-100%]"
              }
            >
              <div className="flex text-white flex-col lg:hidden  gap-4 px-[24px] ">
                <div onClick={() => setShowMenu(false)} className="">
                  <CloseOutlined className="flex justify-end px-4 py-6 mb-2 cursor-pointer"></CloseOutlined>
                </div>

                <div className="leading-[48px] text-[40px] font-normal">
                  <Link
                    to="/"
                    className={`${styles.link} ${
                      pathname === "/" ? " font-extrabold " : ""
                    }`}
                  >
                    Home
                  </Link>
                </div>
                <div className="leading-[48px] text-[40px] font-normal">
                  <Link
                    to="/whoweare"
                    className={`${styles.link} ${
                      pathname === "/whoweare" ? " font-extrabold " : ""
                    }`}
                  >
                    Who We Are
                  </Link>
                </div>
                <div className="leading-[48px] flex-col flex gap-4 text-[40px] font-normal">
                  <div className="">
                    <Link
                      to="/product"
                      className={`${styles.link} ${
                        pathname === "/product" ? " font-extrabold " : ""
                      }`}
                    >
                      Products
                    </Link>
                  </div>
                  <div className="leading-[26px] cursor-pointer px-[24px] flex flex-col gap-4 font-bold text-base">
                    <div className="flex items-center">
                      <RightOutlined className="flex items-center justify-center w-5 h-5"></RightOutlined>
                      <Link to="clinicalDiagnostics">
                        <p>Clinical Diagnostics</p>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <RightOutlined className="flex items-center justify-center w-5 h-5"></RightOutlined>
                      <Link to="foodSafety">
                        {" "}
                        <p>Food Safety</p>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <RightOutlined className="flex items-center justify-center w-5 h-5"></RightOutlined>
                      <Link to="bioDefense">
                        <p>Biodefense</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="leading-[48px] text-[40px] font-normal">
                  <Link
                    to="/technology"
                    className={`${styles.link} ${
                      pathname === "/technology" ? " font-extrabold " : ""
                    }`}
                  >
                    Technology
                  </Link>
                </div>
                <div className="leading-[48px] text-[40px] font-normal">
                  <Link
                    to="/contact"
                    className={`${styles.link} ${
                      pathname === "/contact" ? " font-extrabold " : ""
                    }`}
                  >
                    ContactUs
                  </Link>
                </div>
              </div>
              <div className="flex gap-6 px-6 pb-10 lg:hidden">
                <div className="flex items-center ">
                  <img
                    className=" h-[24px] w-[24px]"
                    src={FB}
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="flex items-center ">
                  <img
                    className=" h-[24px] w-[24px]"
                    src={IG}
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="flex items-center ">
                  <img
                    className=" h-[24px] w-[24px]"
                    src={LK}
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="flex items-center ">
                  <img
                    className=" h-[24px] w-[24px]"
                    src={YT}
                    alt=""
                    srcSet=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Header;
