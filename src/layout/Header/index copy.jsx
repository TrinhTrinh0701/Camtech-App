// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   RightOutlined,
//   CaretDownOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import { AnimatePresence, motion } from "framer-motion";
// import FB from "../../asset/img/facebook.png";
// import IG from "../../asset/img/instagram.png";
// import LK from "../../asset/img/linkedin.png";
// import YT from "../../asset/img/youtube.png";
// import Logo from "../../asset/img/Logo/Logo.png";
// import "./styles.css";
// import menuManage from "../../utils/Common/menuManage";
// const styles = {
//   link: "cursor-pointer",
//   color: "text-black",
// };

// function Header() {
//   const [subMenuVisiable, setSubMenuVisiable] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const navigateToHome = () => {
//     navigate("/");
//   };
//   const handleShow = () => {
//     setShowMenu(!showMenu);
//   };
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };
//   window.addEventListener("scroll", changeColor);
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div>
//         <div
//           className={
//             color
//               ? "header fixed top-0 max-w-[1536px] left-0 right-0 w-full text-black "
//               : "fixed top-0 left-0 right-0 w-full max-w-[1536px] text-white"
//           }
//         >
//           <div className=" flex gap-[360px] lg:px-[124px] h-full py-[24px]">
//             <div className="md:px-6">
//               <img
//                 src={Logo}
//                 className="h-[56px] w-[168px] cursor-pointer object-cover"
//                 alt=""
//                 srcSet=""
//                 onClick={navigateToHome}
//               />
//             </div>
//             <div className="relative flex  gap-[32px] items-center">
//               <div className="relative text-black lg:flex gap-[32px] justify-center items-center md:hidden">
//                 <div className="leading-[26px] text-base font-semibold">
//                   <Link
//                     to="/"
//                     className={`${styles.link} ${
//                       pathname === "/" ? " font-extrabold" : ""
//                     }`}
//                   >
//                     Home
//                   </Link>
//                 </div>
//                 <div className="leading-[26px] text-base font-semibold">
//                   <Link
//                     to="/whoweare"
//                     className={`${styles.link} ${
//                       pathname === "/whoweare" ? " font-extrabold " : ""
//                     }`}
//                   >
//                     Who We Are
//                   </Link>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <p className="leading-[26px] text-base font-semibold">
//                     <Link
//                       to="/product"
//                       className={`${styles.link} ${
//                         pathname === "/product" ? " font-extrabold " : ""
//                       }`}
//                     >
//                       Products
//                     </Link>
//                   </p>
//                   <CaretDownOutlined
//                     onClick={() => setSubMenuVisiable((prev) => !prev)}
//                     className="w-5 h-5 cursor-pointer"
//                   ></CaretDownOutlined>
//                   {subMenuVisiable && (
//                     <div className="absolute right-0 flex flex-col p-4 z-[5] bg-white rounded-md shadow-md min-w-200 top-full">
//                       {menuManage.map((item) => {
//                         return (
//                           <Link
//                             className="flex items-center gap-2 py-2 text-blue-600 border-b hover:text-orangce border-gray600"
//                             key={item.id}
//                             to={item?.path}
//                           >
//                             {item.text}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>

//                 <div className="leading-[26px] text-base font-semibold">
//                   <Link
//                     to="/technology"
//                     className={`${styles.link} ${
//                       pathname === "/technology" ? " font-extrabold " : ""
//                     }`}
//                   >
//                     Technology
//                   </Link>
//                 </div>
//               </div>
//               <div className="md:px-[24px] ">
//                 <div
//                   className={
//                     color
//                       ? "lg:text-white md:text-black flex  gap-1 md:bg-none lg:border-none md:border-black md:border py-[12px] px-[24px] lg:bg-[#107AB7] rounded-md"
//                       : "flex  gap-1 md:bg-none lg:hover:bg-blue-800 lg:text-white md:border-white md:border py-[12px] px-[24px] text-black rounded-md lg:border-1 lg:border-white"
//                   }
//                 >
//                   <Link to="/contact">
//                     <button className="text-base font-bold">CONTACT US</button>
//                   </Link>
//                   <div className="flex items-center justify-center text-xl">
//                     <RightOutlined></RightOutlined>
//                   </div>
//                 </div>
//               </div>
//               <div onClick={handleShow} className="md:block lg:hidden">
//                 <MenuOutlined
//                   onClick={() => setShowMenu(false)}
//                   className="flex items-center justify-center w-10 h-10 "
//                 ></MenuOutlined>
//               </div>
//               <div
//                 className={
//                   !showMenu
//                     ? "bg-[#107AB7] lg:hidden w-[375px] ease-in-out duration-500 flex flex-col gap-[80px] fixed right-0 top-0"
//                     : "fixed right-[-100%]"
//                 }
//               >
//                 <div className="flex flex-col lg:hidden  gap-4 px-[24px] ">
//                   <div onClick={() => setShowMenu(true)} className="">
//                     <CloseOutlined className="flex justify-end p-4 mb-2 cursor-pointer"></CloseOutlined>
//                   </div>

//                   <div className="leading-[48px] text-[40px] font-normal">
//                     <Link
//                       to="/"
//                       className={`${styles.link} ${
//                         pathname === "/" ? " font-extrabold " : ""
//                       }`}
//                     >
//                       Home
//                     </Link>
//                   </div>
//                   <div className="leading-[48px] text-[40px] font-normal">
//                     <Link
//                       to="/whoweare"
//                       className={`${styles.link} ${
//                         pathname === "/whoweare" ? " font-extrabold " : ""
//                       }`}
//                     >
//                       Who We Are
//                     </Link>
//                   </div>
//                   <div className="leading-[48px] flex-col flex gap-4 text-[40px] font-normal">
//                     <div className="">
//                       <Link
//                         to="/product"
//                         className={`${styles.link} ${
//                           pathname === "/product" ? " font-extrabold " : ""
//                         }`}
//                       >
//                         Products
//                       </Link>
//                     </div>
//                     <div className="leading-[26px] cursor-pointer px-[24px] flex flex-col gap-4 font-bold text-base">
//                       <div className="flex items-center">
//                         <RightOutlined className="flex items-center justify-center w-5 h-5"></RightOutlined>
//                         <p>Clinical Diagnostics</p>
//                       </div>
//                       <div className="flex items-center">
//                         <RightOutlined className="flex items-center justify-center w-5 h-5"></RightOutlined>
//                         <p>Food Safety</p>
//                       </div>
//                       <div className="flex items-center">
//                         <RightOutlined className="flex items-center justify-center w-5 h-5"></RightOutlined>
//                         <p>Biodefense</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="leading-[48px] text-[40px] font-normal">
//                     <Link
//                       to="/technology"
//                       className={`${styles.link} ${
//                         pathname === "/technology" ? " font-extrabold " : ""
//                       }`}
//                     >
//                       Technology
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="flex gap-6 px-6 pb-10 lg:hidden">
//                   <div className="flex items-center ">
//                     <a
//                       className="flex"
//                       target="_blank"
//                       href="#"
//                       rel="noreferrer"
//                     >
//                       <img
//                         className=" h-[24px] w-[24px]"
//                         src={FB}
//                         alt=""
//                         srcSet=""
//                       />
//                     </a>
//                   </div>
//                   <div className="flex items-center ">
//                     <a
//                       className="flex"
//                       target="_blank"
//                       href="#"
//                       rel="noreferrer"
//                     >
//                       <img
//                         className=" h-[24px] w-[24px]"
//                         src={IG}
//                         alt=""
//                         srcSet=""
//                       />
//                     </a>
//                   </div>
//                   <div className="flex items-center ">
//                     <a
//                       className="flex"
//                       target="_blank"
//                       href="#"
//                       rel="noreferrer"
//                     >
//                       <img
//                         className=" h-[24px] w-[24px]"
//                         src={LK}
//                         alt=""
//                         srcSet=""
//                       />
//                     </a>
//                   </div>
//                   <div className="flex items-center ">
//                     <a
//                       className="flex"
//                       target="_blank"
//                       href="#"
//                       rel="noreferrer"
//                     >
//                       <img
//                         className=" h-[24px] w-[24px]"
//                         src={YT}
//                         alt=""
//                         srcSet=""
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Header;
