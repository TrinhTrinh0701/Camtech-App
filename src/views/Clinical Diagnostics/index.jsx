import React from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import CD1 from "../../asset/img/Clinical Diagnostics/2.PNG";
import { RightOutlined } from "@ant-design/icons";
import T1 from "../../asset/img/Technology/1.PNG";
import C3 from "../../asset/img/carousel3.png";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ClinicalDiagnostics(props) {
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover top-0 left-0 right-0"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-3 top-[130px] w-full px-4 md:px-6 lg:px-[124px]  gap-[56px]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#484848] text-xs leading-[16px]">Home</p>
            <RightOutlined className="flex justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
            <p className="text-[#107AB7] leading-[16px] text-xs underline">
              Clinical Diagnostics
            </p>
          </div>
          <p className="text-[40px] absolute  pt-8 leading-[48px] text-[#107AB7] font-extrabold">
            CILINICAL DIAGNOSTICS
          </p>
        </div>
      </div>
      <div className="">
        <div className="relative w-full ">
          <img
            src={C3}
            className="w-full h-[600px] object-cover"
            alt=""
            srcSet=""
          />
          <div className="absolute inset-0 grid items-center justify-center w-full h-full px-4 md:px-6 py-14 ">
            <div className=" pl-[5px] t-[150px]">
              <Typography variant="lead" color="white" className="">
                <div className="flex flex-col gap-5  w-full lg:px-[5%]">
                  <p className="leading-[42px] text-[28px] font-normal">
                    Enabling point of care testing for Clinical Diagnostics
                  </p>
                  <Link to="/product">
                    <span className="text-[#09D3C2] leading-[32px] text-xl font-bold">
                      Our specifically developed rapid test kit for 3-MCPD
                      (3-monochloropropane-1,2-diol or 3-chloropropane-1,2-diol)
                      and glycidyl esters can detect these carcinogenic
                      compounds found in edible oils and fats with high
                      sensitivity.
                    </span>
                  </Link>
                  <p className="leading-[26px] text-base font-normal">
                    Due to their simplicity and minimal sample preparation time,
                    these kits can be used in clinical settings or at home. Our
                    aim is to make POC kits widely available so patients’
                    conditions can quickly be assessed for quick intervention.
                    Camtech is offering a range of laboratory and rapid tests to
                    increase COVID-19 testing around the world..
                  </p>
                </div>
              </Typography>
              <div className="pt-5 lg:px-[5%]">
                <Link to="/product">
                  <Button
                    size="lg"
                    color="white"
                    className="w-full md:w-[250px] text-white bg-transparent border border-white cursor-pointer hover:bg-light-blue-800"
                  >
                    VIEW Covid-19 TEST KITS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-center justify-center gap-6 py-14 md:flex md:flex-row md:justify-center lg:flex lg:gap-[124px] "
        >
          <img
            data-aos="fade-left"
            data-aos-duration="500"
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
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-[#107AB7] leading-[42px] text-[28px] pb-6 mx-[25%] md:mx-6 lg:mx-[124px] "
        >
          Other COVID-19 Products
        </p>
        <div className="grid grid-cols-1 gap-6 w-[373px] mx-[25%] pb-14 md:mx-6 md:grid md:grid-cols-2 md:gap-6 md:w-[800px] lg:w-full lg:flex lg:gap-6 lg:items-center lg:justify-center ">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-6 md:w-[300px]  lg:w-[320px]"
          >
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
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-6 md:w-[300px] lg:w-[320px]"
          >
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
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-6 md:w-[300px] lg:w-[320px]"
          >
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
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-6 md:w-[300px] lg:w-[320px]"
          >
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
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex items-center justify-center cursor-pointer"
        >
          <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[153px] font-bold text-base rounded-md w-[343px] py-3 px-6 border border-[#107AB7]">
            Visit Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClinicalDiagnostics;
