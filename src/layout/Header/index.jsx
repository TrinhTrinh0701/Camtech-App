import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  RightOutlined,
  CaretDownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import FB from "../../asset/img/facebook.png";
import IG from "../../asset/img/instagram.png";
import LK from "../../asset/img/linkedin.png";
import YT from "../../asset/img/youtube.png";
import Logo from "../../asset/img/Logo/Logo.png";
import LogoWhite from "../../asset/img/Logo/Logo white.png";
import "./styles.css";
import menuManage from "../../utils/Common/menuManage";
const styles = {
  link: "cursor-pointer",
  color: "text-black",
};
const menuItems = [
  {
    title: "Clinical Diagnostics",
  },
  {
    title: "Food Safety",
  },
  {
    title: "Biodefense",
  },
];
function Header() {
  const [subMenuVisiable, setSubMenuVisiable] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigateToHome = () => {
    navigate("/");
  };
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const [openMenu, setOpenMenu] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };
  const [text, setText] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <div
          className={
            color
              ? "header fixed z-[997] top-0 max-w-[1536px] left-0 right-0 w-full text-[#107AB7] bg-cyan-500 shadow-lg shadow-cyan-500/50 "
              : "fixed z-[997] top-0 left-0 right-0 w-full max-w-[1536px] text-white "
          }
        >
          <div className="relative flex gap-[135px] lg:gap-8 justify-center items-center h-full py-[24px] z-10">
            <div className="lg:pr-[300px]">
              {color ? (
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
            <div className="hidden text lg:flex md:hidden lg:gap-12">
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
              <div className="leading-[26px] text-base font-semibold">
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
                    className={
                      color
                        ? "leading-[26px] py-0 text-base font-semibold capitalize bg-white text-[#107AB7]"
                        : "leading-[26px] py-0 text-base font-semibold capitalize text-white "
                    }
                  >
                    <Link to="/product"> Products</Link>
                    <CaretDownOutlined
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${
                        openMenu ? "rotate-180" : ""
                      }`}
                    />
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
            <div className="gap-6 md:flex">
              <div className="hidden cursor-pointer md:block ">
                <div
                  className={
                    color
                      ? " flex  gap-1  py-[12px] px-[24px] rounded-md border border-[#107AB7]   "
                      : "flex  gap-1 py-[12px] px-[24px] rounded-md border border-white "
                  }
                >
                  <Link to="/contact">
                    <button className="text-base font-bold">CONTACT US</button>
                  </Link>
                  <div className="flex items-center justify-center text-xl">
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
                  !showMenu
                    ? "bg-[#107AB7] lg:hidden w-[375px] ease-in-out duration-500 flex flex-col gap-[80px] fixed right-0 top-0"
                    : "fixed right-[-100%]"
                }
              >
                <div className="flex flex-col lg:hidden  gap-4 px-[24px] ">
                  <div onClick={() => setShowMenu(true)} className="">
                    <CloseOutlined className="flex justify-end p-4 mb-2 cursor-pointer"></CloseOutlined>
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
                </div>
                <div className="flex gap-6 px-6 pb-10 lg:hidden">
                  <div className="flex items-center ">
                    <a
                      className="flex"
                      target="_blank"
                      href="#"
                      rel="noreferrer"
                    >
                      <img
                        className=" h-[24px] w-[24px]"
                        src={FB}
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                  <div className="flex items-center ">
                    <a
                      className="flex"
                      target="_blank"
                      href="#"
                      rel="noreferrer"
                    >
                      <img
                        className=" h-[24px] w-[24px]"
                        src={IG}
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                  <div className="flex items-center ">
                    <a
                      className="flex"
                      target="_blank"
                      href="#"
                      rel="noreferrer"
                    >
                      <img
                        className=" h-[24px] w-[24px]"
                        src={LK}
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                  <div className="flex items-center ">
                    <a
                      className="flex"
                      target="_blank"
                      href="#"
                      rel="noreferrer"
                    >
                      <img
                        className=" h-[24px] w-[24px]"
                        src={YT}
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Header;
