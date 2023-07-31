import { DownloadOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Typography } from "@material-tailwind/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import B1 from "../../asset/img/Biodefense/1.png";
import CD1 from "../../asset/img/Clinical Diagnostics/1.png";
import FS1 from "../../asset/img/Food Safety/1.png";
import VideoFile from "../../asset/img/Video File.png";
import Whyweare from "../../asset/img/why.png";
import "./styles.css";

export default function BioDefense() {
  const image = {
    img1: "http://localhost:3000/static/media/1.3b5c5f9bc68781ab4e64.png",
    img2: "http://localhost:3000/static/media/1.dae4dabc33bcfb75bde1.png",
    img3: "http://localhost:3000/static/media/1.91aded362aee9dc0b455.png",
  };
  const [activeImg, setActiveImg] = useState(image.img1);

  return (
    <Fragment>
      <div className="">
        <div className="relative">
          <img
            src={Whyweare}
            className="w-full h-[256px] object-cover top-0 left-0 right-0"
            alt=""
            srcSet=""
          />
          <div className="flex absolute z-3 top-[130px] px-4 md:px-6 lg:px-[124px] w-full gap-[56px]">
            <div className="">
              <Typography variant="lead" color="white" className="">
                <div className="flex items-center justify-center gap-2">
                  <Link to="/">
                    <span className="text-[#484848] hover:underline text-xs leading-[16px]">
                      Home
                    </span>
                  </Link>
                  <RightOutlined className="flex pt-1 justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
                  <p className="text-[#107AB7] pt-1 leading-[16px] text-xs underline">
                    BioDefense
                  </p>
                </div>
                <p className="text-[40px] absolute leading-[48px] text-[#107AB7] font-extrabold">
                  BIODEFENSE
                </p>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full py-16 lg:px-[124px] gap-14 md:flex md:flex-row lg:gap-16 md:gap-6 ">
          <div className="hidden cursor-pointer lg:block">
            <img
              src={image.img1}
              onClick={() => setActiveImg(image.img1)}
              alt=""
              className="w-[74px] h-[74px] object-contain"
            />
            <img
              src={image.img2}
              onClick={() => setActiveImg(image.img2)}
              alt=""
              className="w-[74px] h-[74px] object-contain"
            />
            <img
              src={image.img3}
              onClick={() => setActiveImg(image.img3)}
              alt=""
              className="w-[74px] h-[74px] object-contain"
            />
          </div>
          <div className="w-[343px] md:hidden lg:block lg:w-[564pxx]">
            <img
              src={activeImg}
              alt="image 3"
              className="hidden object-cover w-full h-full rounded-md shadow-xl lg:block"
            />
          </div>
          <div className="px-4 md:px-6">
            <Carousel
              className="w-full slider rounded-xl lg:hidden"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute z-50 flex bottom-4 left-2/4 -translate-x-2/4">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer bg-black rounded-2xl transition-all content-[''] ${
                        activeIndex === i
                          ? "bg-black w-8"
                          : "bg-blue-gray-300/50 w-4"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src={B1}
                alt="image 1"
                className="object-cover w-[560px] h-full"
              />
              <img
                src={CD1}
                alt="image 2"
                className="object-cover w-[560px] h-full"
              />
              <img
                src={FS1}
                alt="image 3"
                className="object-cover w-[560px] h-full"
              />
            </Carousel>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <div className="flex flex-col justify-center items-center px-4  md:flex md:justify-center md:gap-6 lg:gap-[124px] lg:flex-row-reverse ">
              <div className="flex flex-col gap-6 lg:px-6 w-full lg:w-[564px]">
                <p className="text-[#107AB7] leading-[42px] text-[28px]">
                  Camthrax Biothreat Detector
                </p>
                <span className="border  border-[#E5E5E5] w-full"></span>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <p className="text-[#484848] text-base leading-[26px]">
                      Know what you are dealing with and know now. Detect down
                      to 3,000 Bacillus spores (e.g. Anthrax, Thuringiensis,
                      Tetanus, Clostridium) from hoax substances such as flour,
                      baking powder, talcum powder or dust in 99% of scenarios.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:flex ">
                  <Link to="#">
                    <button className="text-white hover:bg-teal-700 font-bold leading-[24px] md:w-[185px] text-[15px] bg-[#09D3C2] rounded-md py-3 px-6 w-full cursor-pointer">
                      Request a Quote
                    </button>
                  </Link>
                  <Link to="#">
                    <button className="text-[#107AB7] leading-[24px] hover:bg-blue-gray-50 md:w-[254px] cursor-pointer font-bold text-[15px] rounded-md w-full py-3 px-6 border border-[#107AB7]">
                      <DownloadOutlined></DownloadOutlined> Download Brochure
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] py-14 px-4 md:px-6 lg:px-[124px]  md:bg-[#F7F7F9]">
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-[#123C54] leading-[32px] text-xl font-bold"
          >
            Features
          </p>
          <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:gap-6  gap-[32px] md:flex md:flex-col ">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 gap-8 w-full md:grid lg:w-[368px] md:grid-cols-2 lg:grid-cols-none "
            >
              <div className="">
                <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
                  Forget wet chemistry
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  Camthrax’s optical technology eliminates complicated sample
                  preparation. No mixing or glove-unfriendly preparations.
                </p>
              </div>
              <div className="">
                <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
                  Think one-button simple
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  The device is simple and easy to use with one-button
                  simplicity. Press the button. Read the LCD display. Make an
                  informed decision. That’s all there is to it. No
                  interpretation required. No room for ambiguity.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex flex-col gap-8 w-full lg:w-[368px] md:grid md:grid-cols-2 lg:grid-cols-none"
            >
              <div className="">
                <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
                  Clear multiple targets with ease
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  The device’s push-button simplicity and instant reusability
                  mean you can rapidly move through sites and clear multiple
                  targets, minimizing costly lockdown times and your time on
                  site.
                </p>
              </div>
              <div className="">
                <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
                  Because you never know what you will find at the scene
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  The device’s versatility takes the guesswork out of
                  preparation by allowing you to quickly quantify samples in
                  powder form, including powders, smears and spills.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex flex-col gap-8 w-full lg:w-[368px] md:grid md:grid-cols-2 lg:grid-cols-none"
            >
              <div className="">
                <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
                  Because the frontline can be rough
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  Camthrax is battery powered, lightweight and fully integrated
                  in one small handheld unit, so you can take it where it needs
                  to go. A glove and chemical-suit friendly design means you can
                  concentrate on the task at hand.
                </p>
              </div>
              <div className="">
                <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
                  Performance you can rely on
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  Because lives depend on your work, we know you need more than
                  our word. You need proof. That’s why we’ve had our technology
                  independently tested. That’s why we’re making production
                  detectors available to the testing labs you trust.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 md:px-6 justify-center items-center lg:px-[124px]  md:flex-row md:flex md:gap-6 lg:gap-[100px] md:pt-14 ">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col w-full gap-4 py-14 "
          >
            <img src={VideoFile} alt="" className="w-[48px] h-[32px]" />
            <p className="leading-[32px] text-xl font-bold tex-[#484848]">
              Camthrax Handheld Detector
            </p>
            <p className="text-[#767676] leading-[26px] text-base font-normal">
              Watch the demonstration of the Camthrax Bacillus spore detector
              with an easy to use, one click detection platform from Camtech
              Diagnostics.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-full px-4"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/w7gom4rerpY"
              title="Camtech&#39;s Camthrax Detector"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:w-[595px] w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
