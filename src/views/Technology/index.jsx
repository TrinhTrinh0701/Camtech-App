import React from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import T1 from "../../asset/img/Technology/1.PNG";
import T2 from "../../asset/img/Technology/2.PNG";
import T3 from "../../asset/img/Technology/3.PNG";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import C3 from "../../asset/img/carousel3.png";

function Technology(props) {
  return (
    <div>
      <div className="">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover top-0 left-0 right-0"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-3 top-[130px] px-4 md:px-6 lg:px-[124px] w-full gap-[56px]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#484848] text-xs leading-[16px]">Home</p>
            <RightOutlined className="flex justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
            <p className="text-[#107AB7] leading-[16px] text-xs underline">
              Technology
            </p>
          </div>
          <p className="text-[40px] absolute  pt-8 leading-[48px] text-[#107AB7] font-extrabold">
            TECHNOLOGY
          </p>
        </div>
      </div>
      <div className="">
        <div className="relative ">
          <img
            src={C3}
            className="w-full h-[650px] object-cover"
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
                <div className="flex flex-col gap-5  w-[500px] md:w-[720px] lg:w-full lg:px-[5%]">
                  <p className="leading-[42px] text-[28px] font-normal">
                    A Leader in Diagnostics Technologies
                  </p>
                  <Link to="/product">
                    <span className="text-[#09D3C2] leading-[32px] text-xl font-bold">
                      Point-of-care testing through innovative technologies
                    </span>
                  </Link>
                  <p className="leading-[32px] text-xl font-normal">
                    We are using a range of technologies to transform healthcare
                    diagnostics through point of care testing with low cost
                    rapid and portable tests. Our innovation and technology
                    cover a few areas - Microfluidics - Lateral flow assay -
                    Optical biosensors
                  </p>
                  <p className="leading-[32px] text-xl font-normal">
                    Combined with scalable and cost effective manufacturing
                    precision techniques, these allow us to customize detection
                    for various end clinical targets in affordable, reliable
                    real world diagnostics.
                  </p>
                </div>
              </Typography>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" lg:pb-14  flex flex-col md:flex-row justify-center items-center gap-6  md:flex md:gap-6 md:mx-0 md:justify-center md:items-center lg:gap-[124px] "
        >
          <div className="">
            <img
              data-aos="zoom-out-up"
              data-aos-duration="500"
              src={T1}
              alt=""
              className="bg-[#CFE4F1] md:mt-5 w-[380px] h-[235px] mt-14 lg:w-[564px] lg:h-[378px] lg:mt-14"
            />
          </div>
          <div className="w-[343px] pb-14 md:pt-16 lg:w-[534px] lg:h-[204px] lg:flex lg:flex-col lg:gap-8">
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
          className=" lg:pb-14 md:bg-[#F7F7F9] lg:bg-[#F7F7F9] md:flex-row  flex flex-col justify-center items-center  gap-6  md:flex md:gap-6 md:mx-0 md:justify-center md:items-center lg:gap-[124px] "
        >
          <div className="">
            <img
              data-aos="zoom-out-up"
              data-aos-duration="500"
              src={T2}
              alt=""
              className="bg-[#CFE4F1] md:mt-5 w-[380px] h-[235px] mt-14 lg:w-[564px] lg:h-[378px] lg:mt-14"
            />
          </div>
          <div className="w-[343px] pb-14 md:pt-16 lg:w-[534px] lg:h-[204px] lg:flex lg:flex-col lg:gap-8">
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
          className=" flex flex-col justify-center items-center md:flex-row gap-6 md:flex  md:gap-6 md:mx-0 md:justify-center md:items-center lg:gap-[124px] "
        >
          <div className="">
            <img
              data-aos="zoom-out-up"
              data-aos-duration="500"
              src={T3}
              alt=""
              className="bg-[#CFE4F1] md:mt-5 w-[380px] h-[235px] mt-14 lg:w-[564px] lg:h-[378px] lg:mt-14"
            />
          </div>
          <div className="w-[343px] pb-14 md:pt-16 lg:w-[534px] lg:h-[204px] lg:flex lg:flex-col lg:gap-8">
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
