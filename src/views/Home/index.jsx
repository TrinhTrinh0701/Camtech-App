import React from "react";
import Slider from "../../asset/img/slider.png";
import Why from "../../asset/img/w.png";
import LastNew1 from "../../asset/img/lastnew1.png";
import LastNew2 from "../../asset/img/lastnew2.png";
import CD1 from "../../asset/img/Clinical Diagnostics/1.png";
import FS1 from "../../asset/img/Food Safety/1.png";
import B1 from "../../asset/img/Biodefense/1.png";
import Gar from "../../asset/img/Trusted By/gar.png";
import Nestle from "../../asset/img/Trusted By/nestle.png";
import Winlmar from "../../asset/img/Trusted By/winlmar.png";
import SimeDarby from "../../asset/img/Trusted By/sime darby.png";
import MusimMas from "../../asset/img/Trusted By/musim mas.png";

import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-14">
      <div className="">
        <img
          src={Slider}
          className="w-full max-h-[720px] object-cover"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex flex-col gap-[24px] px-4 w-[343px] mx-[25%] md:mx-0 md:w-full md:justify-center md:items-center lg:px-[124px]  lg:items-start ">
        <p className="text-[#107AB7] font-normal md:pr-[200px] leading-[42px] text-[28px]">
          {" "}
          We Offer a Wide-Range of Products
        </p>
        <p className="text-[#767676] leading-6 font-normal text-base">
          Camtech's products cover the healthcare, agriculture and security
          industries with matching<br></br>
          products for the current demands. We are focusing on point-of-care
          technologies to enhance<br></br>
          the testing capabilities for our partners.
        </p>
      </div>
      <div className=" gap-14 cursor-pointer grid grid-cols-1 mx-[25%] md:grid md:grid-cols-2 md:gap-6 md:mx-[150px] lg:mx-0 lg:flex lg:gap-10 lg:justify-center lg:items-center ">
        <div className="flex flex-col gap-3">
          <div className="">
            <img
              src={CD1}
              className=" w-[368px] h-[247px] object-cover md:w-[343px] lg:w-[400px]  "
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex text-[#107AB7]">
            <Link to="/clinicalDiagnostics">
              {" "}
              <p className="text-xl font-bold leading-8 underline">
                Clinical Diagnostics
              </p>
            </Link>
            <div className="items-center justify-center w-5 h-5">
              <RightOutlined></RightOutlined>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="">
            <img
              src={FS1}
              className=" w-[368px] h-[247px] object-cover md:w-[343px] lg:w-[400px]  "
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex text-[#107AB7]">
            <Link to="/foodSafety">
              {" "}
              <p className="text-xl font-bold leading-8 underline">
                Food Safety
              </p>
            </Link>
            <div className="items-center justify-center w-5 h-5">
              <RightOutlined></RightOutlined>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="">
            <img
              src={B1}
              className=" w-[368px] h-[247px] object-cover md:w-[343px] lg:w-[400px] "
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex text-[#107AB7]">
            <Link to="/bioDefense">
              <p className="text-xl font-bold leading-8 underline">
                Biodefense
              </p>
            </Link>
            <div className="items-center justify-center w-5 h-5">
              <RightOutlined></RightOutlined>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 font-normal text-[28px] gap-6 mx-[25%] md:mx-[150px] lg:mx-[124px] ">
        <div className="">
          <p className=" text-[#107AB7] leading-[42px] ">All Products</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:flex md:gap-6">
          <div className="flex flex-col gap-3 min-w-[368px]">
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              COVID-19 Antibody rapid test kit
            </p>
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              COVID-19 Antigen rapid test kit (UV)
            </p>
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              COVID-19 Antigen rapid test kit (Gold colloidal)
            </p>
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              COVID-19 Antigen Surface Swab
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              3-MCPDE & GE Rapid test kit
            </p>
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              Mycotoxin test kits
            </p>
            <p className=" text-[#767676] font-normal text-base leading-[26px]">
              Camthrax Biothreat Detector
            </p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-8 mx-[25%] md:mx-[150px] lg:mx-0 lg:flex lg:py-14 lg:gap-[15  0px] lg:justify-center lg:items-center">
        <p className="text-[#107AB7] leading-[42px] font-normal text-[28px] ">
          Trusted By
        </p>
        <div className="">
          <div className="grid grid-cols-1 gap-8 pb-3 md:flex md:gap-8 lg:gap-[80px]">
            <div className="flex gap-12 lg:gap-[80px]">
              <img
                src={Nestle}
                alt=""
                srcSet=""
                className=" w-[76px] h-[76px] object-contain lg:h-[80px]  "
              />
              <img
                src={SimeDarby}
                alt=""
                srcSet=""
                className=" w-[76px] h-[76px] object-containlg:h-[80px] "
              />
              <img
                src={MusimMas}
                alt=""
                srcSet=""
                className=" w-[76px] h-[76px] object-contain  lg:h-[80px] "
              />
            </div>
            <div className="flex items-center justify-center gap-10 lg:gap-[80px]">
              <img
                src={Winlmar}
                alt=""
                srcSet=""
                className=" w-[130px]  h-[50px] object-contain lg:py-2 lg:w-[200px] lg:h-[80px] "
              />
              <img
                src={Gar}
                alt=""
                srcSet=""
                className=" w-[190px] h-[50px] object-contain lg:w-[230px] lg:h-[80px]  lg:py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={Why}
          alt=""
          srcSet=""
          className="object-cover lg:w-full lg:px-[124px] "
        />
      </div>
      <div className="grid grid-cols-1 gap-8">
        <p className="text-[#107AB7] leading-[42px] mx-[25%] md:mx-[150px] lg:mx-[124px] pb-[30px] font-normal text-[28px]">
          Latest News
        </p>
        <div className="grid grid-cols-1 gap-[80px]">
          <div className="grid grid-cols-1 gap-6 w-[343px] mx-[25%] md:mx-[150px] lg:w-[1200px] lg:mx-[124px] md:flex md:gap-6 md:w-[720px] md:justify-center">
            <img
              src={LastNew1}
              alt=""
              srcSet=""
              className=" w-[368px] h-[247px] object-cover lg:w-full lg:h-[300px] "
            />
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <p className="text-[##123C54] font-bold leading-[26px] text-base">
                  Yahoo Finance
                </p>
                <p className="text-[#107AB7] leading-[32px] font-bold text-xl">
                  Congenica and Camtech Diagnostics agree strategic partnership
                  to support genomic analysis platform expansion in Asia
                </p>
                <p className="text-[#484848] leading-[26px] font-normal text-base">
                  Under the partnership agreement Camtech will be responsible
                  for the marketing, distribution and sales of Congenica’s
                  clinical decision support platform in Singapore, Malaysia,
                  Japan and South Korea.
                </p>
              </div>
              <div className="flex cursor-pointer text-[#107AB7] leading-[26px] hover:underline font-bold text-base">
                <p className="">Read News</p>
                <RightOutlined className="flex items-center justify-center w-5 h-full"></RightOutlined>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 w-[343px] mx-[25%] md:mx-[150px]  lg:w-[1200px] lg:mx-[124px] md:flex md:gap-6 md:w-[720px] ">
            <img
              src={LastNew2}
              alt=""
              srcSet=""
              className=" w-[368px] h-[247px] object-cover lg:w-[75%] lg:h-[300px] "
            />
            <div className="flex flex-col gap-4 lg:py-6 ">
              <div className="flex flex-col gap-2">
                <p className="text-[##123C54] font-bold leading-[26px] text-base">
                  mobilehealthnews
                </p>
                <p className="text-[#107AB7] leading-[32px] font-bold text-xl">
                  Singapore’s Camtech, JN Medsys to increase production of
                  COVID-19 test kits
                </p>
                <p className="text-[#484848] leading-[26px] font-normal text-base">
                  JN Medsys has obtained approval for their PCR Kit from the FDA
                  of the Philippines, and is in the process of obtaining
                  approval from the US FDA.
                </p>
              </div>
              <div className="flex cursor-pointer hover:underline text-[#107AB7] leading-[26px] font-bold text-base">
                <p className="">Read News</p>
                <RightOutlined className="flex items-center justify-center w-5 h-full"></RightOutlined>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
