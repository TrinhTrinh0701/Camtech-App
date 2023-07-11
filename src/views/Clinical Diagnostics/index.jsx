import React from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import CD1 from "../../asset/img/Clinical Diagnostics/2.PNG";
import { RightOutlined } from "@ant-design/icons";
import T1 from "../../asset/img/Technology/1.PNG";

function ClinicalDiagnostics(props) {
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
        <div className="grid grid-cols-1 gap-6 py-14 mx-[25%] md:mx-0 md:flex md:justify-center lg:flex lg:gap-[124px] ">
          <img
            src={CD1}
            className="w-[380px] h-[235px] object-cover lg:w-[680px] lg:h-[379px]"
            alt=""
            srcSet=""
          />
          <div className="flex flex-col gap-6 w-[373px] lg:w-[494px]">
            <p className="text-[#107AB7] leading-[42px] text-[28px]">
              COVID-19 Gold Colloidal Rapid Antigen Test Kit
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Direct viral protein detection from nasal, oro- or
                  nasohopharyngeal swab specimens
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Results in less than 20 minutes including sample collection
                  time
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Early detection of COVID-19 cases - Reliable identification of
                  SARS-CoV-2 viral particles within the first week of the onset
                  of symptoms or in certain asymptomatic cases.
                </p>
              </div>
              <div className="flex gap-2">
                <RightOutlined className="mt-2"></RightOutlined>
                <p className="text-[#484848] text-base leading-[26px]">
                  Certified Quality Standards - Manufactured under
                  ISO13485:2016, received CE Mark and provisional authorisation
                  from Health Sciences Authority (Singapore).
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#107AB7] leading-[42px] text-[28px] pb-6 mx-[25%] w-full md:mx-6 lg:mx-[124px] ">
          Other COVID-19 Products
        </p>
        <div className="grid grid-cols-1 gap-6 w-[373px] mx-[25%] pb-14 md:mx-6 md:grid md:grid-cols-2 md:gap-6 md:w-full lg:flex lg:gap-6 lg:items-center lg:justify-center ">
          <div className="flex flex-col gap-6 md:w-[378px] lg:w-[320px]">
            <img
              src={T1}
              className="w-[380px] h-[235px] object-cover"
              alt=""
              srcSet=""
            />
            <p className="leading-[32px] text-[#107AB7] font-bold text-xl">
              COVID-19 UV Fluorescence Viral Antigen Test Kit
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              A sensitive UV technology based detection kit for SARS-CoV-2 virus
              samples from patient swabs. Demonstrated to be working on the UK
              virus variant (B.1.1.7).
            </p>
          </div>
          <div className="flex flex-col gap-6 md:w-[378px] lg:w-[320px]">
            <img
              src={T1}
              className="w-[380px] h-[235px] object-cover"
              alt=""
              srcSet=""
            />
            <p className="leading-[32px] text-[#107AB7] font-bold text-xl">
              COVID-19 Antigen Surface Swab
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              A rapid test for the monitoring of the prescence SARS-CoV-2 virus
              on frequently touched points, such as door handles, tables,
              handrails. Speedy evaluation of the cleanliness of surfaces.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:w-[378px] lg:w-[320px]">
            <img
              src={T1}
              className="w-[380px] h-[235px] object-cover"
              alt=""
              srcSet=""
            />
            <p className="leading-[32px] text-[#107AB7] font-bold text-xl">
              COVID-19 Gold Colloidal Rapid Antigen Test Kit
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              Complete test kit to reliably identify SARS-CoV-2 viral particles
              within the first week of the onset of symptoms or in certain
              asymptomatic cases.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:w-[378px] lg:w-[320px]">
            <img
              src={T1}
              className="w-[380px] h-[235px] object-cover"
              alt=""
              srcSet=""
            />
            <p className="leading-[32px] text-[#107AB7] font-bold text-xl">
              COVID-19 Gold Colloidal Rapid Antigen Test Kit
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              Complete test kit to reliably identify SARS-CoV-2 viral particles
              within the first week of the onset of symptoms or in certain
              asymptomatic cases.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[153px] font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
            Visit Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClinicalDiagnostics;
