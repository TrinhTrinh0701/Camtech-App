import React, { useState } from "react";
import Whyweare from "../../asset/img/why.png";
import Slider from "../../asset/img/slider.png";
import OurStory from "../../asset/img/our story.png";
import Avatar from "../../asset/img/avatar.png";
import Avatar2 from "../../asset/img/avatar2.png";
import Avatar3 from "../../asset/img/avatar3.png";
import Avatar4 from "../../asset/img/avatar4.png";
import Avatar5 from "../../asset/img/avatar5.png";
import Our from "../../asset/img/our.png";
import A from "../../asset/img/Our/a.png";
import Enterprise from "../../asset/img/Our/enter.png";
import Nus from "../../asset/img/Our/Nus.png";
import Ucl from "../../asset/img/Our/ucl.png";
import University from "../../asset/img/Our/univer.png";
import Gar from "../../asset/img/Trusted By/gar.png";
import Nestle from "../../asset/img/Trusted By/nestle.png";
import Winlmar from "../../asset/img/Trusted By/winlmar.png";
import SimeDarby from "../../asset/img/Trusted By/sime darby.png";
import MusimMas from "../../asset/img/Trusted By/musim mas.png";
import { RightOutlined } from "@ant-design/icons";
import C1 from "../../asset/img/carousel.png";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function WhoWeAre(props) {
  return (
    <div className="">
      <div className="">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover top-0 left-0 right-0"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-3 top-[130px] px-[20%] lg:px-[8%]  md:px-[10%] w-full gap-[56px]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#484848] text-xs leading-[16px]">Home</p>
            <RightOutlined className="flex justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
            <p className="text-[#107AB7] leading-[16px] text-xs underline">
              Who We Are
            </p>
          </div>
          <p className="text-[40px] absolute   pt-8 leading-[48px] text-[#107AB7] font-extrabold">
            WHO WE ARE
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <div className="relative">
          <img
            src={C1}
            className="w-full h-[375px] object-cover"
            alt=""
            srcSet=""
          />
          <div className="absolute inset-0 grid items-center justify-center w-full h-full ">
            <div className=" pl-[5px] t-[150px] md:px-[5%]">
              <Typography
                variant="lead"
                color="white"
                className="leading-[64px] text-[40px] font-normal  p-5 "
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
        <div className="grid lg:pb-2 grid-cols-1 gap-6 lg:gap-[130px] md:flex md:justify-center md:items-center md:gap-10 ">
          <div className="flex flex-col items-center justify-center gap-4 font-normal ">
            <p className="pr-[200px] text-[#107AB7] leading-[42px] text-[28px]">
              Our Vision
            </p>
            <p className="text-[#484848] text-base leading-[26px]">
              Providing Novel Lab-based and Point-of-Care<br></br> diagnostic
              tests and actionable insights from<br></br> real-time data to
              customers all the time,<br></br>
              anywhere.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Our}
              className="w-[343px] max-h-[234px]  object-cover lg:w-[564px] lg:h-full"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="grid  grid-cols-1 gap-6 md:flex md:items-center md:justify-center lg:items-start lg:justify-start lg:px-[250px] lg:flex-col ">
          <div className="flex lg:pb-[64px] flex-col items-center justify-center gap-4 font-normal">
            <div className="">
              <p className="pr-[200px] py-4 text-[#107AB7] leading-[42px] text-[28px]">
                What We Do
              </p>
              <p className="text-[#484848] text-base leading-[26px]">
                Our detection platforms provide the basis for<br></br>{" "}
                reliability, customisation and scalability in<br></br>{" "}
                delivering rapid testing solutions.<br></br> <br></br> Based on
                these platforms, we have developed<br></br> and commercialised a
                range of testing solutions <br></br> for biodefence, food safety
                and clinical<br></br> diagnostics applications, that aim to
                disrupt
                <br></br>
                current lab-based testing approaches.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 px-[150px] md:px-0 lg:flex lg:gap-[200px] lg:px-0 gap-4 font-normal">
            <div className="flex flex-col gap-6">
              <p className="pr-[150px] text-[#107AB7] leading-[42px] text-[28px]">
                Our Story
              </p>
              <p className="text-[#484848] text-base leading-[26px]">
                Founded in 2013, Camtech Diagnostics has built<br></br>{" "}
                significant R&D and Manufacturing capabilities to<br></br>{" "}
                support these developments as an integrated<br></br> diagnostics
                provider.
                <br></br> <br></br>Our continual and long-term investment in
                <br></br> innovation allows us to meet rapidly evolving<br></br>{" "}
                market requirements and provide best in class<br></br>{" "}
                solutions.
              </p>
            </div>
            <div className="lg:block md:hidden sm:hidden">
              <img
                src={OurStory}
                className="w-[368px] max-h-[248px]  object-cover"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:flex lg:gap-[150px] lg:items-center lg:justify-center">
          <p className="flex items-center justify-center md:pr-[550px] lg:pr-0 pr-[180px] font-normal text-[#107AB7] leading-[42px] text-[28px]">
            Our Partners
          </p>
          <div className="grid grid-cols-1 gap-6 px-[170px] md:px-[80px] md:flex lg:px-0 lg:gap-16 ">
            <div className="flex py-[6px] gap-[36px]">
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
            <div className="flex py-[5px] gap-[30px]">
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
        <div className="bg-[#F7F7F9] items-center justify-center flex flex-col pb-[80px] gap-14">
          <p className=" md:pr-[500px] lg:pr-[820px] pr-[150px] mt-14 font-normal text-[#107AB7] leading-[42px] text-[28px]">
            Team Members
          </p>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 md:flex md:justify-center lg:gap-10">
              <img
                src={Avatar}
                className="object-cover px-6 pr-[230px] md:pr-0 md:h-full md:w-full"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                  <p className="pr-[170px] lg:pr-[650px] md:pr-[330px] text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Meng Han Kuok
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    CEO
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-[343px] md:w-[520px] lg:w-[850px] leading-[26px] font-normal ">
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
            <div className="grid grid-cols-1 gap-6 md:flex md:justify-center lg:gap-10">
              <img
                src={Avatar2}
                className="object-cover px-6 pr-[230px] md:pr-0 md:h-full md:w-full"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                  <p className=" md:pr-[350px] lg:pr-[680px] pr-[180px] text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Deny Hartono
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    Technical Director
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-[343px] md:w-[520px] lg:w-[850px] leading-[26px] font-normal ">
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
            <div className="grid grid-cols-1 gap-6 md:flex md:justify-center lg:gap-10">
              <img
                src={Avatar3}
                className="object-cover px-6 pr-[230px] md:pr-0 md:h-full md:w-full"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                  <p className="md:pr-[350px] lg:pr-[700px] pr-[180px] text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Daniel Kirilly
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    Director of Innovation/ Chief Scientific Officer
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-[343px] md:w-[520px] lg:w-[850px] leading-[26px] font-normal ">
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
            <div className="grid grid-cols-1 gap-6 md:flex md:justify-center lg:gap-10">
              <img
                src={Avatar4}
                className="object-cover px-6 pr-[230px] md:pr-0 md:h-full md:w-full"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                  <p className="md:pr-[400px] lg:pr-[730px] pr-[230px] text-[#107AB7] leading-[32px] font-bold text-xl">
                    Dr Ana Zeng
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    VP Technical & Product Development
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-[343px] md:w-[520px] lg:w-[850px] leading-[26px] font-normal ">
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
            <div className="grid grid-cols-1 gap-6 md:flex md:justify-center lg:gap-10">
              <img
                src={Avatar5}
                className="object-cover px-6 pr-[230px] md:pr-0 md:h-full md:w-full"
                alt=""
                srcSet=""
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                  <p className="md:pr-[400px] lg:pr-[730px] pr-[230px] text-[#107AB7] leading-[32px] font-bold text-xl">
                    Terence Oh
                  </p>
                  <p className="text-[#767676] text-base leading-[26px] font-normal ">
                    VP Business Development
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#767676] text-base w-[343px] md:w-[520px] lg:w-[850px] leading-[26px] font-normal ">
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
        <div className="grid grid-cols-1 gap-8 lg:flex lg:items-center lg:justify-center lg:gap-[200px]">
          <p className="px-[80px] md:pr-[580px] lg:pr-0 pr-[230px] text-[#107AB7] leading-[42px] font-normal text-[28px] ">
            Trusted By
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-[32px] md:flex lg:gap-[60px] ">
              <div className="flex gap-14">
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
              <div className="flex gap-10">
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
