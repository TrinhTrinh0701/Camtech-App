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

function Home() {
  return (
    <div className=" flex flex-col gap-[56px]">
      <div className="">
        <img
          src={Slider}
          className="w-full max-h-[720px] object-cover"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex flex-col gap-[24px] md:px-6 lg:px-[180px] ">
        <p className="text-[#107AB7] font-normal leading-[42px] text-[28px]">
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
      <div className="lg:flex items-center justify-center gap-6 md:px-6 md:grid md:grid-cols-2 lg:px-[180px] cursor-pointer">
        <div className="">
          <div className="">
            <img
              src={CD1}
              className=" w-[368px] h-[247px] object-cover  "
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex text-[#107AB7]">
            <p className="text-xl font-bold leading-8">Clinical Diagnostics</p>
            <div className="items-center justify-center w-5 h-5">
              <RightOutlined></RightOutlined>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <img
              src={FS1}
              className=" w-[368px] h-[247px] object-cover "
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex text-[#107AB7]">
            <p className="text-xl font-bold leading-8 underline">Food Safety</p>
            <div className="items-center justify-center w-5 h-5">
              <RightOutlined></RightOutlined>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <img
              src={B1}
              className=" w-[368px] h-[247px] object-cover "
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex text-[#107AB7]">
            <p className="text-xl font-bold leading-8 underline">Biodefense</p>
            <div className="items-center justify-center w-5 h-5">
              <RightOutlined></RightOutlined>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[180px] md:px-6  flex flex-col font-normal text-[28px] gap-6 ">
        <div className="">
          <p className=" text-[#107AB7] leading-[42px] ">All Products</p>
        </div>
        <div className="flex gap-6">
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
      <div className="lg:flex gap-[78px] md:px-6 lg:px-[180px] items-center justify-between lg:py-[56px] ">
        <p className="text-[#107AB7] leading-[42px] md:py-8 font-normal text-[28px] ">
          Trusted By
        </p>
        <div className="">
          <div className="flex gap-[64px] items-center">
            <img
              src={Nestle}
              alt=""
              srcSet=""
              className=" w-[76px] h-[76px] object-contain "
            />
            <img
              src={SimeDarby}
              alt=""
              srcSet=""
              className=" w-[76px] h-[76px] object-contain "
            />
            <img
              src={MusimMas}
              alt=""
              srcSet=""
              className=" w-[76px] h-[76px] object-contain "
            />
            <img
              src={Winlmar}
              alt=""
              srcSet=""
              className=" w-[132px]  h-[50px] object-contain py-3 "
            />
            <img
              src={Gar}
              alt=""
              srcSet=""
              className=" w-[196px] h-[50px] object-contain py-3"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:px-6">
        <img src={Why} alt="" srcSet="" className="object-cover " />
      </div>
      <div className="flex flex-col md:px-6  lg:px-[180px]">
        <p className="text-[#107AB7] leading-[42px] pb-[30px] font-normal text-[28px]">
          Latest News
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <img
              src={LastNew1}
              alt=""
              srcSet=""
              className=" w-[368px] h-[247px] object-cover  "
            />
            <div className="flex flex-col gap-4 lg:py-6 ">
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
              <div className="flex cursor-pointer text-[#107AB7] leading-[26px] font-bold text-base">
                <p className="">Read News</p>
                <RightOutlined className="flex items-center justify-center w-5 h-full"></RightOutlined>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src={LastNew2}
              alt=""
              srcSet=""
              className=" w-[368px] h-[247px] object-cover "
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
              <div className="flex cursor-pointer text-[#107AB7] leading-[26px] font-bold text-base">
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
