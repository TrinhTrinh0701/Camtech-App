import React from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import FS2 from "../../asset/img/Food Safety/2.PNG";
import FS3 from "../../asset/img/Food Safety/3.PNG";
import FS4 from "../../asset/img/Food Safety/4.PNG";
import FS5 from "../../asset/img/Food Safety/5.PNG";
import { RightOutlined, DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import C3 from "../../asset/img/carousel3.png";

function FoodSafety(props) {
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
              Food Safety
            </p>
          </div>
          <p className="text-[40px] absolute px-4  pt-8 leading-[48px] text-[#107AB7] font-extrabold">
            FOOD SAFETY
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
            <div className=" pl-[5px] t-[150px]">
              <Typography variant="lead" color="white" className="">
                <div className="flex flex-col gap-5  px-4 md:px-6 lg:px-[124px] w-full">
                  <p className="leading-[42px] text-[28px] font-normal">
                    Full Traceability from End to End
                  </p>
                  <Link to="/product">
                    <span className="text-[#09D3C2] leading-[32px] text-xl font-bold">
                      We work closely with market leaders in the food industry
                      to produce solutions that truly meet their needs.
                    </span>
                  </Link>
                  <p className="leading-[32px] text-xl font-normal">
                    We have developed a broad range of food safety solutions and
                    are capable of addressing newly emergent requirements
                    through targeted R&D and our strong links with research and
                    industry partners.
                  </p>
                  <p className="leading-[32px] text-xl font-normal">
                    We aim to enable full traceability from end to end, by
                    deploying the best technology for rapid detection of
                    contaminants, toxins, pathogens at key points of the food
                    supply chain thus ensuring the most reliable food safety
                    standards for companies and consumers.
                  </p>
                </div>
              </Typography>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center items-center gap-6 py-14  md:flex-row md:flex md:justify-center md:items-center md:gap-6 lg:gap-[124px] "
        >
          <img
            data-aos="fade-left"
            data-aos-duration="500"
            src={FS2}
            className="w-[380px] h-[235px] object-cover lg:w-[680px] lg:h-[379px]"
            alt=""
            srcSet=""
          />
          <div className="flex flex-col gap-6 w-[373px] lg:w-[494px]">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              3-MCPD and Glycidol Rapid Quantification Kit
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Novel, rapid method for quantifying 3-MCPD and Glycidol esters
                  in edible oils using a simple colorimetric assay.
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Faster and more cost-effective test per sample compared to
                  GC/MS
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  High sensitivity (0.1 PPM LOQ)
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Simple sample preperation and minimal lab equipment
                  requirement
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Fast turnaround (4 samples in 80 min)
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Ideal for batch screening and process monitoring
                </p>
              </div>
            </div>
            <Link to="#">
              <button className="text-[#107AB7] md:w-[348px] leading-[24px] hover:bg-blue-gray-50 font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                Visit 3-MCPD Website
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center items-center gap-6 py-14  md:flex-row  md:flex md:justify-center md:gap-6 md:bg-[#F7F7F9] lg:gap-[124px] lg:flex-row-reverse "
        >
          <img
            data-aos="fade-left"
            data-aos-duration="500"
            src={FS3}
            className="w-[380px] h-[235px] object-cover lg:w-[680px] lg:h-[379px]"
            alt=""
            srcSet=""
          />
          <div className="flex flex-col gap-6 w-[373px] lg:w-[494px]">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              Mycotoxin Quantitative Rapid test
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-[#484848] text-base leading-[26px]">
                  Camtech Diagnostics oﬀers a series of mycotoxin tests with a
                  high sensitivity dedicated reader.
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Unique calibration standard for each of the batch to ensure
                  good accuracy based on HPLC result
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  High sensitivity and specificity
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Simple one step extraction, low requirement of equipment
                  needed
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Buffer solution is environmentally friendly
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Can be used to detect mycotoxins in peanut oil, corn oil,
                  wheat, flour and other grains
                </p>
              </div>
            </div>
            <Link to="#">
              <button className="text-white hover:bg-teal-700 font-bold leading-[24px] text-base bg-[#09D3C2] rounded-md py-3 px-6 w-[343px] cursor-pointer">
                Request a Quote
              </button>
            </Link>
            <Link to="#">
              <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[348px] cursor-pointer font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                <DownloadOutlined></DownloadOutlined> Download Brochure
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center items-center gap-6 py-14  md:flex-row md:flex md:justify-center lg:gap-[124px] "
        >
          <img
            data-aos="fade-left"
            data-aos-duration="500"
            src={FS4}
            className="w-[380px] h-[235px] object-cover lg:w-[680px] lg:h-[379px]"
            alt=""
            srcSet=""
          />
          <div className="flex flex-col gap-6 w-[373px] lg:w-[494px]">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              BluLine Portable Fecal Detector
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Locate non-visible traces of fecal contamination on meat
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Realtime
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Handheld and lightweight scanner
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Battery and processor/analyser within small backpack
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Easy to clean
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Technology scalable for full carcass scanning
                </p>
              </div>
            </div>
            <Link to="#">
              <button className="text-white font-bold leading-[24px] hover:bg-teal-700 text-base bg-[#09D3C2] rounded-md py-3 px-6 w-[343px] cursor-pointer">
                Request a Quote
              </button>
            </Link>
            <Link to="#">
              <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[348px] cursor-pointer font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                <DownloadOutlined></DownloadOutlined> Download Brochure
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center items-center md:bg-[#F7F7F9] gap-6 py-14  md:flex-row  md:flex md:justify-center lg:flex lg:gap-[124px] lg:flex-row-reverse "
        >
          <img
            data-aos="fade-left"
            data-aos-duration="500"
            src={FS5}
            className="w-[380px] h-[235px] object-cover lg:w-[680px] lg:h-[379px]"
            alt=""
            srcSet=""
          />
          <div className="flex flex-col gap-6 w-[373px] lg:w-[494px]">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              Qualitative Rapid Test Kits for Food Safety
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-[#484848] text-base leading-[26px]">
                  Camtech’s Qualitative Rapid Test Kits are based on competitive
                  immunochromatography technology, in which toxins in the sample
                  compete with the antigen coated on Test line for the colloidal
                  gold labeled antibody.<br></br> <br></br> The test result can
                  be observed by naked eye. The food products that can be tested
                  include milk, eggs, poultry, tobacco, grains, feeds, and
                  others. The total assay time takes approximately 10 minutes
                  depending on the type of toxins to be tested.
                </p>
              </div>
            </div>
            <Link to="#">
              <button className="text-white font-bold leading-[24px] hover:bg-teal-700 text-base bg-[#09D3C2] rounded-md py-3 px-6 w-[343px] cursor-pointer">
                Request a Quote
              </button>
            </Link>
            <Link to="#">
              <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[348px] cursor-pointer font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                <DownloadOutlined></DownloadOutlined> Download Brochure
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center items-center  gap-6 py-14 md:flex-row md:flex md:justify-center lg:flex lg:gap-[124px] "
        >
          <img
            data-aos="fade-left"
            data-aos-duration="500"
            src={FS3}
            className="w-[380px] h-[235px] object-cover lg:w-[680px] lg:h-[379px]"
            alt=""
            srcSet=""
          />
          <div className="flex flex-col gap-6 w-[373px] lg:w-[494px]">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              ELISA Test Kits for Food Safety
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-[#484848] text-base leading-[26px]">
                  Camtech’s ELISA (Enzyme-Linked Immunosorbent Assay) Test Kits
                  are based on direct competitive and indirect competitive ELISA
                  depending on the type of detection for the toxin of interest.
                  The result can be read qualitatively or quantitatively with
                  the aid of a reader.<br></br>
                  <br></br> The food products that can be tested include milk,
                  eggs, poultry, tobacco, grains, feeds, and others. The total
                  assay time varies from 20 minutes to hours depending on the
                  type of toxin and detection method.
                </p>
              </div>
            </div>
            <Link to="#">
              <button className="text-white font-bold leading-[24px] hover:bg-teal-700 text-base bg-[#09D3C2] rounded-md py-3 px-6 w-[343px] cursor-pointer">
                Request a Quote
              </button>
            </Link>
            <Link to="#">
              <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[348px] cursor-pointer font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
                <DownloadOutlined></DownloadOutlined> Download Brochure
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodSafety;
