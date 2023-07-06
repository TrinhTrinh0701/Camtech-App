import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
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
    <div className="mt-[56px] h-full w-full ">
      <div className=" flex  gap-[126px] md:px-[24px] justify-center items-center bg-[#C6EAFE] lg:px-[340px] py-[56px]">
        <div className=" font-light text-[40px] leading-[48px] h-full">
          Ready to connect with us?
        </div>
        <div className="flex h-full gap-1 py-[12px] px-[24px] text-white rounded-md bg-[#107AB7]">
          <button className="text-base font-bold">CONTACT US</button>
          <div className="flex items-center justify-center text-xl">
            <RightOutlined></RightOutlined>
          </div>
        </div>
      </div>
      <div className=" flex flex-col h-full  md:px-6 lg:items-center w-full bg-[#123C54]">
        <div className="lg:flex lg:gap-[124px] ">
          <div className="flex flex-col mt-12 min-w-[368px] md:pb-12 ">
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
          <div className="flex gap-[34px] w-full lg:mt-[80px] lg:mb-[52px] cursor-pointer">
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
                <div className="flex">info@camtech.org</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#123C54] md:px-6 flex lg:px-[240px] md:pt-12 w-full">
        <p className="pb-[16px] items-start text-white">
          Copyright © 2013–2021 Camtech Diagnostics. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
