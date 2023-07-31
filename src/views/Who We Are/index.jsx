import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Nus from "../../asset/img/Our/Nus.png";
import A from "../../asset/img/Our/a.png";
import Enterprise from "../../asset/img/Our/enter.png";
import Ucl from "../../asset/img/Our/ucl.png";
import University from "../../asset/img/Our/univer.png";
import Gar from "../../asset/img/Trusted By/gar.png";
import MusimMas from "../../asset/img/Trusted By/musim mas.png";
import Nestle from "../../asset/img/Trusted By/nestle.png";
import SimeDarby from "../../asset/img/Trusted By/sime darby.png";
import Winlmar from "../../asset/img/Trusted By/winlmar.png";
import Avatar from "../../asset/img/avatar.png";
import Avatar2 from "../../asset/img/avatar2.png";
import Avatar3 from "../../asset/img/avatar3.png";
import Avatar4 from "../../asset/img/avatar4.png";
import Avatar5 from "../../asset/img/avatar5.png";
import C1 from "../../asset/img/carousel.png";
import OurStory from "../../asset/img/our story.png";
import Our from "../../asset/img/our.png";
import Whyweare from "../../asset/img/why.png";
import { RightOutlined } from "@ant-design/icons";

function WhoWeAre() {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-3 top-[130px] px-4 md:px-6 lg:px-[124px] w-full gap-[56px]">
          <div className="">
            <div className="flex items-center justify-center gap-2">
              <Link to="/">
                <span className="text-[#484848] font-normal text-xs hover:underline leading-[16px]">
                  Home
                </span>
              </Link>
              <RightOutlined className="flex pt-1 justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
              <p className="text-[#107AB7] pt-1 font-semibold leading-[16px] text-xs underline">
                Who We Are
              </p>
            </div>
            <p className="text-[40px] absolute leading-[48px] text-[#107AB7] font-extrabold">
              WHO WE ARE
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <div className="relative w-full">
          <img
            src={C1}
            className="w-full h-[375px] object-cover"
            alt=""
            srcSet=""
          />
          <div className="absolute inset-0 grid items-center justify-center w-full h-full ">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className=" w-full px-4 md:px-6 lg:px-[124px]  t-[150px] "
            >
              <Typography
                variant="lead"
                color="white"
                className="text-[32px]  font-normal leading-[48px] md:text-[40px] md:leading-[64px] p-5 "
              >
                We aim to
                <Link to="/product">
                  <span className="text-[#09D3C2] px-1">
                    enable ideal human health and wellness
                  </span>
                </Link>
                through technology and innovation in testing.
              </Typography>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:pb-2 md:flex md:gap-10 ">
          <div className=" flex flex-col w-full md:flex md:flex-row gap-14 px-4 md:gap-6 lg:px-[124px]  md:px-6 lg:flex lg:gap-[122px]">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="lg:flex-col lg:flex w-full lg:gap-[34px] flex flex-col gap-4 "
            >
              <div className="flex flex-col gap-4 font-normal">
                <p className=" text-[#107AB7] leading-[42px] text-[28px]">
                  Our Vision
                </p>
                <p className="text-[#484848] text-base leading-[26px]">
                  Providing Novel Lab-based and Point-of-Care diagnostic tests
                  and actionable insights from real-time data to customers all
                  the time, anywhere.
                </p>
              </div>

              <div className="flex flex-col gap-4 font-normal ">
                <p className=" py-4 text-[#107AB7] leading-[42px] text-[28px]">
                  What We Do
                </p>
                <p className="text-[#484848] text-base leading-[26px]">
                  Our detection platforms provide the basis for reliability,
                  customisation and scalability in delivering rapid testing
                  solutions. <br /> <br /> Based on these platforms, we have
                  developed <br /> and commercialised a range of testing
                  solutions for biodefence, food safety and clinical diagnostics
                  applications, that aim to disrupt current lab-based testing
                  approaches.
                </p>
              </div>
              <div className="flex flex-col gap-4 font-normal">
                <p className="pr-[150px] text-[#107AB7] leading-[42px] text-[28px]">
                  Our Story
                </p>
                <p className="text-[#484848] text-base leading-[26px]">
                  Founded in 2013, Camtech Diagnostics has built significant R&D
                  and Manufacturing capabilities to support these developments
                  as an integrated diagnostics provider.
                  <br /> <br />
                  Our continual and long-term investment in innovation allows us
                  to meet rapidly evolving market requirements and provide best
                  in class solutions.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="lg:flex gap-12  flex flex-col lg:flex-col lg:gap-[150px] "
            >
              <div className="w-full">
                <img
                  src={Our}
                  className="w-full h-full md:w-[550px] lg:w-[564px]"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="w-full">
                <img
                  src={OurStory}
                  className="w-full h-full md:w-[550px] "
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col flex w-full md:px-6 px-4 gap-8 lg:flex lg:flex-row lg:gap-[150px] lg:px-[124px]">
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex  font-normal text-[#107AB7] leading-[42px] text-[28px]"
          >
            Our Partners
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-6 md:gap-[30px] md:flex md:flex-row lg:gap-16 "
          >
            <div className="flex py-[6px] gap-[30px] md:gap-[50px]">
              <img
                src={Nus}
                className="w-[80px] h-[36px] object-cover"
                alt=""
                srcSet=""
              />
              <img
                src={Enterprise}
                className="w-[98px] h-[34px] object-cover"
                alt=""
                srcSet=""
              />
              <img
                src={A}
                className="w-[92px] h-[44px] object-cover"
                alt=""
                srcSet=""
              />
            </div>
            <div className="flex py-[5px] gap-[30px] md:gap-[50px]">
              <img
                src={Ucl}
                className="w-[127px] h-[37px] object-cover"
                alt=""
                srcSet=""
              />
              <img
                src={University}
                className="w-[163px] h-[42px] object-cover"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F9] px-4 md:px-6 lg:px-[124px] flex flex-col pb-[80px] gap-14">
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" mt-14 font-normal text-[#107AB7] leading-[42px] text-[28px]"
          >
            Team Members
          </p>
          <div className="flex flex-col gap-8">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 gap-6 md:flex lg:gap-10"
            >
              <img
                data-aos="zoom-out-up"
                data-aos-duration="500"
                src={Avatar}
                className="object-cover md:w-[196px] md:h-[196px]"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className=" text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Meng Han Kuok
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    CEO
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-full  leading-[26px] font-normal ">
                    He obtained a BA and Masters inEngineering (Cantab) and
                    worked in manufacturing industry, investment banking and
                    management consulting before completing his PhD in
                    BioEngineering from Cambridge University. Certified Diploma
                    in Accounting and Finance. More than 10 years experience in
                    R&D and granted international patent in microfluidic
                    detection. He is an advisor to several venture funds in
                    biotech/foodtech. Awarded Spring Singapore Proof of Concept
                    and Proof of Value grants for novel microfluidic biosensors.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 gap-6 md:flex lg:gap-10"
            >
              <img
                data-aos="zoom-out-up"
                data-aos-duration="500"
                src={Avatar2}
                className="object-cover md:w-[196px] md:h-[196px] "
                alt=""
                srcSet=""
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className="  text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Deny Hartono
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    Technical Director
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-full  leading-[26px] font-normal ">
                    B.Eng. (First Class Honours) in Chemical Engineering from
                    the Institut Teknologi Bandung and Ph.D. in Chemical and
                    Biomolecular Engineering from the National University of
                    Singapore. He has more than 15 years of R&D experience in
                    the chemical and bio-sensor and microfluidic field. He holds
                    2 patents and has authored more than 20 technical papers in
                    reputable international peer-reviewed journals, and more
                    than half of his publications are in scientific journals
                    with impact factor more than 5.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 gap-6 md:flex lg:gap-10"
            >
              <img
                data-aos="zoom-out-up"
                data-aos-duration="500"
                src={Avatar3}
                className="object-cover md:w-[196px] md:h-[196px] "
                alt=""
                srcSet=""
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className=" text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Daniel Kirilly
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    Director of Innovation/ Chief Scientific Officer
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-full leading-[26px] font-normal ">
                    Daniel earned his PhD at University of Kansas Medical Center
                    in the U.S. focusing on stem cell biology. He continued his
                    work on cell and neurobiology in Singapore at the Temasek
                    Lifesciences Laboratory on a Singapore Millennium Foundation
                    fellowship. During his academic career he published in
                    prestigious papers such as Nature Neuroscience and
                    Developmental Cell. A decade ago he ventured into the world
                    of start-ups and spent several years in early companies at
                    the executive and technical levels in Asia.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 gap-6 md:flex lg:gap-10"
            >
              <img
                data-aos="zoom-out-up"
                data-aos-duration="500"
                src={Avatar4}
                className="object-cover  md:w-[196px] md:h-[196px]"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className=" text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Ana Zeng
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    VP Technical & Product Development
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-full  leading-[26px] font-normal ">
                    PhD in Molecular Microbiology from the Key Laboratory of
                    Synthetic Biology, Chinese Academy of Sciences. She has 12
                    years work experiences on R&D, Product Development and
                    Project Management, with a key focus on biodetection in food
                    safety enabling customized detection and traceability in
                    food, as well as developing detection methods combined with
                    AI and big data analysis. She has several granted patents in
                    enzyme/ food safety detection.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 gap-6 md:flex lg:gap-10"
            >
              <img
                data-aos="zoom-out-up"
                data-aos-duration="500"
                src={Avatar5}
                className="object-cover md:w-[196px] md:h-[196px] "
                alt=""
                srcSet=""
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className=" text-[#107AB7] leading-[32px] font-bold text-xl">
                    Terence Oh
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    VP Business Development
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-full  leading-[26px] font-normal ">
                    Bachelor in Engineering (Hons) from University of Aberdeen
                    and MBA in International Management from Monash University.
                    Terence started his career as an M&E Engineer at SquireMech,
                    He has over 13 years of operational, business development
                    and senior management experience in Singapore and China. He
                    has managed large scale investment projects and
                    international Joint Ventures by multinational corporations.
                    In his most recent role, he oversaw the China operations of
                    a company providing energy optimization technology based
                    upon data analytics and cloud computing. He is a member of
                    Institute of Electrical Engineer (UK), Institute of Engineer
                    Singapore and Singapore Institute of Management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col px-4 md:px-6 flex gap-8 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[200px]">
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" text-[#107AB7] leading-[42px] font-normal text-[28px] "
          >
            Trusted By
          </p>
          <div data-aos="fade-up" data-aos-duration="3000" className="flex ">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex-col flex gap-[32px] md:gap-[50px] md:flex md:flex-row lg:gap-[60px] "
            >
              <div className="flex gap-[50px] md:gap-[70px]">
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
              </div>
              <div className="flex gap-[30px] md:gap-[50px]">
                <img
                  src={Winlmar}
                  alt=""
                  srcSet=""
                  className=" w-[124px]  h-[47px] object-contain "
                />
                <img
                  src={Gar}
                  alt=""
                  srcSet=""
                  className=" w-[182px] h-[47px] object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
