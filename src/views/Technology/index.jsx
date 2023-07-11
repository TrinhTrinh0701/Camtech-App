import React from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import T1 from "../../asset/img/Technology/1.PNG";
import T2 from "../../asset/img/Technology/2.PNG";
import T3 from "../../asset/img/Technology/3.PNG";

function Technology(props) {
  return (
    <div>
      <img
        src={Whyweare}
        className="w-full max-h-[720px] object-cover"
        alt=""
        srcSet=""
      />
      <div className="">
        <div className="">
          <img
            src={Slider}
            className="w-full max-h-[ 416px] object-cover"
            alt=""
            srcSet=""
          />
        </div>
        <div className="grid lg:pb-14  grid-cols-1 gap-6 mx-[25%] md:flex md:gap-6 md:mx-0 md:justify-center md:items-center lg:gap-[124px] ">
          <div className="">
            <img
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
        <div className="grid lg:pb-14 md:bg-[#F7F7F9] lg:bg-[#F7F7F9] grid-cols-1 gap-6 mx-[25%] md:flex md:gap-6 md:mx-0 md:justify-center md:items-center lg:gap-[124px] ">
          <div className="">
            <img
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
        <div className="grid grid-cols-1 gap-6 mx-[25%] md:flex md:gap-6 md:mx-0 md:justify-center md:items-center lg:gap-[124px] ">
          <div className="">
            <img
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
