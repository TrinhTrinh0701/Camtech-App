import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../asset/img/Logo/Logo white.png";
import FB from "../../asset/img/facebook.png";
import IG from "../../asset/img/instagram.png";
import LK from "../../asset/img/linkedin.png";
import YT from "../../asset/img/youtube.png";

function Footer() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="mt-[56px]">
      <div className="flex flex-col px-4 md:px-6 lg:px-[124px] gap-4 lg:flex lg:items-center lg:justify-center lg:gap-[2  00px] md:flex md:flex-row  md:gap-[100px]  bg-[#C6EAFE] py-[56px]">
        <div className=" font-light text-center text-[40px] leading-[48px] h-full">
          Ready to connect with us?
        </div>
        <div
          className="hover:bg-blue-900 md:w-[165px] items-center justify-center border-white border-2
        flex h-full gap-1 py-[12px] text-white rounded-md bg-[#107AB7]"
        >
          <Link to="/contact">
            <button className="text-[15px] leading-[24px] font-bold">
              CONTACT US
            </button>
          </Link>
          <div className="flex items-center justify-center text-xl">
            <RightOutlined></RightOutlined>
          </div>
        </div>
      </div>
      <div className=" px-4 md:px-6 lg:px-[124px]  bg-[#123C54]">
        <div className=" gap-[48px] lg:gap-0 flex flex-col lg:flex lg:flex-row ">
          <div className="flex flex-col w-full mt-12 ">
            <img
              src={Logo}
              className=" h-[64px] w-[200px] cursor-pointer object-contain"
              alt=""
              srcSet=""
              onClick={navigateToHome}
            />
            <p className="text-xs font-normal text-white">
              Point of need. Always. Everywhere.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:pt-[82px] lg:gap-[30px] md:flex gap-[34px] w-full cursor-pointer">
            <div className="text-white flex w-[162px] flex-col gap-[10px]">
              <div className="font-bold text-[#09D3C2] text-xs leading-[20px]">
                ABOUT US
              </div>
              <p className="font-normal text-sm leading-[24px]">Who We Are</p>
              <p className="font-normal text-sm leading-[24px]">Technology</p>
              <p className="font-normal text-sm leading-[24px]">Contact Us</p>
            </div>
            <div className=" text-white flex w-[162px] flex-col gap-[10px]">
              <div className="font-bold text-[#09D3C2] text-xs leading-[20px]">
                PRODUCTS
              </div>
              <p className="font-normal text-sm leading-[24px]">COVID-19</p>
              <p className="font-normal text-sm leading-[24px]">Food Safety</p>
              <p className="font-normal text-sm leading-[24px]">Biodefense</p>
            </div>
            <div className=" text-white flex w-[162px] flex-col gap-[20px]">
              <div className="font-bold text-[#09D3C2] text-xs leading-[20px]">
                CONNECT WITH US
              </div>
              <div className="flex gap-[20px] flex-col">
                <div className="flex gap-[24px]">
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
                <div className="flex">info@camtech.org</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#123C54] lg:px-[124px] md:px-6 px-4 pt-[48px]">
        <p className="pb-[16px] items-start text-white text-xs leading-5 font-bold">
          Copyright © 2013–2021 Camtech Diagnostics. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
