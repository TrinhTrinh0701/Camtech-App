import { RightOutlined } from "@ant-design/icons";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import T1 from "../../asset/img/Technology/1.PNG";
import T2 from "../../asset/img/Technology/2.PNG";
import T3 from "../../asset/img/Technology/3.PNG";
import C3 from "../../asset/img/carousel3.png";
import Whyweare from "../../asset/img/why.png";

function Technology(props) {
  return (
    <div className="">
      <div className="relative">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover top-0 left-0 right-0"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-3 top-[130px] px-4 md:px-6 lg:px-[124px] w-full gap-[56px]">
          <div className="">
            <div className="flex items-center justify-center gap-2">
              <Link to="/">
                <span className="text-[#484848] text-xs hover:underline leading-[16px]">
                  Home
                </span>
              </Link>
              <RightOutlined className="flex pt-1 justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
              <p className="text-[#107AB7] pt-1 leading-[16px] text-xs underline">
                Technology
              </p>
            </div>
            <p className="text-[40px] absolute leading-[48px] text-[#107AB7] font-extrabold">
              TECHNOLOGY
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative w-full ">
          <img
            src={C3}
            className="w-full h-[650px] md:h-[300px] object-cover"
            alt=""
            srcSet=""
          />
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="absolute inset-0 grid items-center justify-center w-full h-full py-14 "
          >
            <div className="w-full t-[150px]">
              <Typography variant="lead" color="white" className="">
                <div className="flex flex-col w-full gap-5 px-4 md:px-6 lg:px-[124px]">
                  <p className="leading-[42px] text-[28px] font-normal">
                    Manufacturing Outsourced In Only 9 Months
                  </p>
                  <Link to="/product">
                    <span className="text-[#09D3C2] leading-[32px] text-xl font-bold">
                      For analyzing and comparing multiple primer sequences
                      simultaneously.
                    </span>
                  </Link>
                  <p className="leading-[26px] text-base font-normal">
                    Write or paste your primer sequences to the input field
                    (upper window). The analyzer accepts text and table format
                    (can be copied from an Excel file, for example). Note: This
                    analyzer requires at least 2 primer sequences in the input
                    field. For single primers (determination of primer Tm) you
                    can choose the Tm calculator for PCR.
                  </p>
                </div>
              </Typography>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" lg:pb-14 md:flex-row-reverse flex flex-col px-4 gap-6 lg:px-[124px]  md:flex md:gap-6 md:px-6 lg:gap-[124px] "
        >
          <div className="">
            <img
              src={T1}
              alt=""
              className="bg-[#CFE4F1] md:mt-5 w-full md:w-[348px] md:h-[234px] lg:w-[564px] h-full mt-14  lg:mt-14"
            />
          </div>
          <div className="w-full pb-14 md:pt-16 lg:flex lg:flex-col lg:gap-8">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              Clean energy for the digital kind of world
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              Equinix data centres are designed with high operational standards
              and energy efficiency in mind. We have invested more than US$129
              million in energy efficiency upgrades, retrofits and improvements,
              and are constantly seeking new ways to innovate within our data
              centres.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" lg:pb-14 lg:px-[124px] md:bg-[#F7F7F9] lg:bg-[#F7F7F9] md:flex-row px-4 flex flex-col   gap-6  md:flex md:gap-6 md:px-6 lg:gap-[124px] "
        >
          <div className="">
            <img
              src={T2}
              alt=""
              className="bg-[#CFE4F1] md:mt-5 w-full h-full mt-14 md:w-[348px] lg:w-[564px] md:h-[234px] lg:mt-14"
            />
          </div>
          <div className="w-full pb-14 md:pt-16 lg:flex lg:flex-col lg:gap-8">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              Clean energy for the digital kind of world
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              Equinix data centres are designed with high operational standards
              and energy efficiency in mind. We have invested more than US$129
              million in energy efficiency upgrades, retrofits and improvements,
              and are constantly seeking new ways to innovate within our data
              centres.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" flex flex-col lg:px-[124px] md:flex-row-reverse px-4 gap-6 md:flex  md:gap-6 md:px-6 lg:gap-[124px] "
        >
          <div className="">
            <img
              src={T3}
              alt=""
              className="bg-[#CFE4F1] md:mt-5 w-full h-full lg:w-[564px] mt-14 md:w-[348px] md:h-[234px] lg:mt-14"
            />
          </div>
          <div className="w-full pb-14 md:pt-16 lg:flex lg:flex-col lg:gap-8">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              Clean energy for the digital kind of world
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              Equinix data centres are designed with high operational standards
              and energy efficiency in mind. We have invested more than US$129
              million in energy efficiency upgrades, retrofits and improvements,
              and are constantly seeking new ways to innovate within our data
              centres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
