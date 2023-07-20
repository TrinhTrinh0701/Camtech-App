import React from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import CD from "../../asset/img/Clinical Diagnostics/1.png";
import FS from "../../asset/img/Food Safety/1.png";
import BF from "../../asset/img/Biodefense/1.png";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

function Product() {
  return (
    <div>
      <div className="">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover top-0 left-0 right-0"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-3 top-[130px] px-[20%] lg:px-[9%]  md:px-[10%] w-full gap-[56px]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#484848] text-xs leading-[16px]">Home</p>
            <RightOutlined className="flex justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
            <p className="text-[#107AB7] leading-[16px] text-xs underline">
              Product
            </p>
          </div>
          <p className="text-[40px] absolute  pt-8 leading-[48px] text-[#107AB7] font-extrabold">
            Product
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-center py-14">
          <div className="flex flex-col gap-6 md:flex px-4 md:px-6 md:flex-row md:gap-6 md:justify-center md:items-center lg:gap-[124px]">
            <img
              data-aos="zoom-out-up"
              data-aos-duration="500"
              src={CD}
              className="w-full h-[229px] object-cover md:w-[370px] md:h-[290px] lg:w-[620px] lg:h-[378px]"
              alt=""
              srcSet=""
            />
            <div className=" flex flex-col gap-6 lg:w-[464px] ">
              <p className="text-[#107AB7] leading-[42px] text-[28px]">
                Clinical Diagnostics
              </p>
              <p className="text-[#484848] text-base leading-[26px]">
                In the healthcare segment we are primarily focusing on rapid
                solutions and accessories, kit components that enable
                point-of-care testing. Due to their simplicity and minimal
                sample preparation time, these kits can be used for screening a
                larger number of people and identifying diseases or chronic
                disease conditions.
              </p>
              <Link to="/clinicalDiagnostics">
                <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[153px] font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center px-4 py-14"
        >
          <div className="flex flex-col bg-[#F7F7F9] gap-6 md:flex md:flex-row md:gap-6 md:justify-center md:items-center lg:flex-row-reverse lg:gap-[124px]">
            <img
              data-aos="zoom-out-up"
              data-aos-duration="500"
              src={FS}
              className="w-full h-[229px] object-cover md:w-[370px] md:h-[290px] lg:w-[620px] lg:h-[378px]"
              alt=""
              srcSet=""
            />
            <div className="flex flex-col gap-6 lg:w-[464px] ">
              <p className="text-[#107AB7] leading-[42px] text-[28px]">
                Food Safety
              </p>
              <p className="text-[#484848] text-base leading-[26px]">
                To facilitate the quick turnaround time of the analysis for food
                and agricultural products we are offering several solutions to
                identify critical toxins and contaminants in the food chain.
                Camtech’s kits are able to detect fungal toxins and carcinogenic
                compounds in different food matrices.
              </p>
              <Link to="/foodSafety">
                <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[153px] font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center px-4 py-14"
        >
          <div className="flex flex-col gap-6 md:flex md:gap-6 md:flex-row md:justify-center md:items-center lg:gap-[124px]">
            <img
              data-aos="zoom-out-up"
              data-aos-duration="500"
              src={BF}
              className="w-full h-[229px] object-cover md:w-[370px] md:h-[290px] lg:w-[620px] lg:h-[378px]"
              alt=""
              srcSet=""
            />
            <div className="flex flex-col gap-6 lg:w-[464px] ">
              <p className="text-[#107AB7] leading-[42px] text-[28px]">
                Biodefense
              </p>
              <p className="text-[#484848] text-base leading-[26px]">
                Biodefense is a critical area to ensure the smooth operation of
                essential infrastructure in a city, a region or even a whole
                country. Camtech has built products that support the rapid
                detection of life threatening biological agents, such as
                anthrax.
              </p>
              <Link to="/bioDefense">
                <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[153px] font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
