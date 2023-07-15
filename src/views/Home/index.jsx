import { RightOutlined } from "@ant-design/icons";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import B1 from "../../asset/img/Biodefense/1.png";
import CD1 from "../../asset/img/Clinical Diagnostics/1.png";
import FS1 from "../../asset/img/Food Safety/1.png";
import T1 from "../../asset/img/Technology/1.PNG";
import Gar from "../../asset/img/Trusted By/gar.png";
import MusimMas from "../../asset/img/Trusted By/musim mas.png";
import Nestle from "../../asset/img/Trusted By/nestle.png";
import SimeDarby from "../../asset/img/Trusted By/sime darby.png";
import Winlmar from "../../asset/img/Trusted By/winlmar.png";
import C1 from "../../asset/img/carousel.png";
import C2 from "../../asset/img/carousel2.png";
import C3 from "../../asset/img/carousel3.png";
import LastNew1 from "../../asset/img/lastnew1.png";
import LastNew2 from "../../asset/img/lastnew2.png";
import Why from "../../asset/img/w.png";

import "./styles.css";

function Home() {
  return (
    <div className="flex flex-col gap-14">
      <div className="relative">
        <Carousel className="">
          <div className="relative w-full h-[720px]">
            <img
              src={C1}
              alt="image 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 grid items-center w-full h-full ">
              <div className=" pl-[5px] t-[150px] md:px-[5%]">
                <Typography
                  variant="lead"
                  color="white"
                  className="leading-[64px] text-[40px] font-normal  text-center p-5 "
                >
                  Our detection platforms cover a wide range of industries with
                  <Link to="/product">
                    <span className="text-[#09D3C2] px-1">
                      dedicated products using technologies
                    </span>
                  </Link>
                  that match our customers' needs.
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[720px]">
            <img
              src={C2}
              alt="image 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 grid items-center w-full h-full lg:flex lg:justify-between lg:px-[5%] ">
              <div className="flex items-center justify-center ">
                <img
                  src={T1}
                  alt="image 3"
                  className="object-cover w-[60%] lg:w-[35%] lg:left-[5%] lg:h-[53%] md:left-[20%] left-[100px] shadow-2xl  h-[31%] a absolute rounded-2xl"
                />
                <img
                  src={CD1}
                  alt="image 2"
                  className="object-cover w-[60%] lg:w-[35%] lg:left-[7%] md:left-[23%] lg:h-[50%] left-[120px] shadow-2xl h-[30%] absolute b rounded-2xl"
                />
              </div>
              <div className="px-[5%] lg:px-0 lg:w-[700px]">
                <Typography
                  variant="h1"
                  color="white"
                  className="text-3xl pt-[200px] text-center md:text-2xl lg:text-5xl"
                >
                  Camtech offers the most advanced Covid-19 point of care rapid
                  testing solutions
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="leading-[48px] text-xl font-normal  text-center p-5"
                >
                  <Link to="/product">
                    <span className="text-[#09D3C2]">
                      With a selected range of approved COVID-19 test kits we
                      are helping our customers to identify active and past
                      COVID cases and increasing screening capacity.
                    </span>
                  </Link>
                </Typography>
                <div className="hidden gap-2 lg:pb-[180px] md:block md:px-[33%]">
                  <Link to="/product">
                    <Button
                      size="lg"
                      color="white"
                      className="w-full text-white bg-transparent border border-white cursor-pointer hover:bg-light-blue-800"
                    >
                      VIEW Covid-19 TEST KITS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[720px]">
            <img
              src={C3}
              alt="image 3"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 grid items-center w-full h-full lg:flex lg:justify-between lg:px-[5%] ">
              <div className="flex items-center justify-center ">
                <img
                  src={T1}
                  alt="image 3"
                  className="object-cover w-[60%] lg:w-[35%] lg:left-[5%] lg:h-[53%] md:left-[20%] left-[100px] shadow-2xl  h-[31%] a absolute rounded-2xl"
                />
                <img
                  src={B1}
                  alt="image 2"
                  className="object-cover w-[60%] lg:w-[35%] lg:left-[7%] md:left-[23%] lg:h-[50%] left-[120px] shadow-2xl h-[30%] absolute b rounded-2xl"
                />
              </div>
              <div className="px-[5%] lg:px-0 lg:w-[700px]">
                <Typography
                  variant="h1"
                  color="white"
                  className="text-3xl pt-[200px] text-center md:text-2xl lg:text-5xl"
                >
                  World’s first quick test for 3-MCPD & GE in edible oils
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="leading-[48px] text-xl font-normal  text-center p-5"
                >
                  <Link to="/product">
                    <span className="text-[#09D3C2]">
                      Our specifically developed rapid test kit for 3-MCPD
                      (3-monochloropropane-1,2-diol or 3-chloropropane-1,2-diol)
                      and glycidyl esters can detect these carcinogenic
                      compounds found in edible oils and fats with high
                      sensitivity.
                    </span>
                  </Link>
                </Typography>
                <div className="hidden gap-2 lg:pb-[180px] md:block md:px-[33%]">
                  <Link to="/product">
                    <Button
                      size="lg"
                      color="white"
                      className="w-full text-white bg-transparent border border-white cursor-pointer hover:bg-light-blue-800"
                    >
                      VIEW Covid-19 TEST KITS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
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
      <div className=" grid grid-cols-1 gap-8 mx-[25%] md:mx-[150px] lg:mx-0 lg:flex lg:py-14 lg:gap-[150px] lg:justify-center lg:items-center">
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
