import { RightOutlined } from "@ant-design/icons";
import { Radio, Tooltip, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

import { useState } from "react";
import Map from "../../asset/img/map.png";
import Whyweare from "../../asset/img/why.png";
import InputForm from "../../components/InputForm";

function ContactUs(props) {
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    company: "",
    countryorRegion: "",
    industry: "",
    productorServiceInterest: "",
    message: "",
  });
  const handleSubmit = () => {
    Swal.fire(
      `Thank you for ${
        payload.lastName ? payload.lastName : ""
      } your feedback.`,
      " We will contact you shortly.",
      "success"
    ).then(() => {
      setPayload({
        firstName: "",
        lastName: "",
        email: "",
        job: "",
        company: "",
        countryorRegion: "",
        industry: "",
        productorServiceInterest: "",
        message: "",
      });
    });
  };

  return (
    <div className="pb-14">
      <div className="">
        <img
          src={Whyweare}
          className="w-full h-[256px] object-cover top-0 left-0 right-0"
          alt=""
          srcSet=""
        />
        <div className="flex absolute z-1 top-[130px] px-[20%] lg:px-[10%]  md:px-[10%] w-full gap-[56px]">
          <div className="flex justify-center gap-2 ">
            <p className="text-[#484848] text-xs leading-[16px]">Home</p>
            <RightOutlined className="flex justify-center text-[#484848] text-base leading-[26px]"></RightOutlined>
            <p className="text-[#107AB7] leading-[16px] text-xs underline">
              Contact Us
            </p>
          </div>
          <p className="text-[40px] absolute pt-8 leading-[48px] text-[#107AB7] font-extrabold">
            CONTACT US
          </p>
        </div>
      </div>
      <div className="lg:flex lg:gap-[522px] lg:justify-center lg:items-center lg:pb-14">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="py-[64px] lg:py-0 mx-[25%] md:mx-[10%] lg:mx-0 "
        >
          <p className="leading-[32px] font-bold text-xl text-[#107AB7]">
            SALES ENQUIRIES
          </p>
          <form className="mt-8 mb-2 w-80 ">
            <div className="flex flex-col gap-6 mb-4 md:grid md:grid-cols-2 w-[343px] md:w-[720px]">
              <InputForm
                value={payload.firstName}
                setValue={setPayload}
                label="First Name *"
                keyPayload="firstName"
              ></InputForm>
              <InputForm
                value={payload.lastName}
                setValue={setPayload}
                label="Last Name *"
                keyPayload="lastName"
              ></InputForm>
              <InputForm
                value={payload.email}
                setValue={setPayload}
                label="Email *"
                keyPayload="email"
                type="email"
              ></InputForm>
              <InputForm
                value={payload.job}
                setValue={setPayload}
                label="Job Title *"
                keyPayload="job"
              ></InputForm>
              <InputForm
                value={payload.company}
                setValue={setPayload}
                label="Company Name *"
                keyPayload="company"
              ></InputForm>
              <InputForm
                value={payload.countryorRegion}
                setValue={setPayload}
                label="Country/Region *"
                keyPayload="countryorRegion"
              ></InputForm>
              <select
                value={payload.industry}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, industry: e.target.value }))
                }
                name="industry"
                className="border rounded-md text-blue-gray-200  border-blue-gray-200 h-[48px] p-3"
              >
                <option>Your Industry *</option>
                <option className="text-black">1</option>
                <option className="text-black">2</option>
              </select>
              <select
                value={payload.productorServiceInterest}
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    productorServiceInterest: e.target.value,
                  }))
                }
                name="productorServiceInterest"
                className="border rounded-md  text-blue-gray-200 md:w-[348px]  border-blue-gray-200 h-[48px] p-3"
              >
                <option className="text-blue-gray-200">
                  Product or service interest *
                </option>
                <option className="text-black">1</option>
                <option className="text-black">2</option>
              </select>
              <div className="md:w-[720px]">
                <textarea
                  value={payload.message}
                  onChange={(e) =>
                    setPayload((prev) => ({ ...prev, message: e.target.value }))
                  }
                  name="message"
                  id="desc"
                  placeholder="Your Message *"
                  className="border rounded-md border-blue-gray-300 p-2  md:w-[720px] h-[156px] w-[343px] placeholder:px-3 placeholder:text-[#00000061] placeholder:py-2"
                ></textarea>
                <p className="text-[#484848] text-base font-normal leading-[26px]">
                  By clicking submit below, you consent to allow Camtech
                  Diagnostics to store and process the personal information
                  submitted above to provide you the content requested.
                </p>
              </div>
            </div>

            <div
              className="hover:bg-blue-900 w-[150px] items-center justify-center border-white border-2 
        flex h-full gap-1 py-[12px] text-white rounded-md bg-[#107AB7] cursor-pointer"
            >
              <button
                onClick={handleSubmit}
                className="px-4 text-base font-bold"
              >
                Submit
              </button>
              <div className="flex items-center justify-center text-xl">
                <RightOutlined></RightOutlined>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <span className="border-2 border-[#E5E5E5] flex w-[343px] md:w-[720px]"></span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="py-[64px] mx-[25%] grid grid-cols-1 gap-14 md:mx-[10%] lg:mx-0 lg:py-0 "
        >
          <div className="lg:pt-24">
            <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
              GET IN TOUCH
            </p>
            <p className="text-[#767676] leading-[26px] text-base font-normal">
              +65 6265 1817
            </p>
            <p className="text-[#107AB7] cursor-pointer leading-[26px] text-base font-normal">
              info@camtech.org
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <p className="leading-[32px] text-xl font-bold text-[#107AB7]">
              OUR LOCATIONS
            </p>
            <div className="grid grid-cols-1 gap-8 md:flex md:gap-[60px] md:flex-row-reverse lg:flex lg:flex-col">
              <div className="px-[10px] lg:px-0">
                <p className="text-[#107AB7] leading-[26px] text-[24px] font-bold">
                  SINGAPROE
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  Camtech Diagnostics Pte Ltd <br /> 217 Henderson Road <br />{" "}
                  #04-08 Henderson Industrial Park <br /> SINGAPORE 159555
                </p>
              </div>
              <div className="">
                <p className="text-[#107AB7] leading-[26px] text-[24px] font-bold">
                  UNITED KINGDOM
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  Camtech Innovations Ltd <br />
                  Westwick Hall <br />
                  Oakington, Cambridgeshire <br />
                  CB24 3AR <br />
                </p>
              </div>
              <div className="">
                <p className="text-[#107AB7] leading-[26px] text-[24px] font-bold">
                  USA
                </p>
                <p className="text-[#767676] leading-[26px] text-base font-normal">
                  Camtech, Inc. <br />
                  560 College Ave <br />
                  Palo Alto <br />
                  CA 94360 <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="">
        <div className="relative">
          <img src={Map} alt="" className="" />
          <div className="absolute top-28 left-20 z-2">
            <Tooltip
              placement="top"
              className="px-4 py-3 bg-white border shadow-xl border-blue-gray-50 shadow-black/10"
              content={
                <div className="w-50">
                  <Typography
                    color="blue-gray"
                    className="text-[#107AB7] leading-[26px] text-[24px] font-bold "
                  >
                    USA
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-[#767676] leading-[26px] text-base font-normal"
                  >
                    Camtech, Inc. <br />
                    560 College Ave <br />
                    Palo Alto <br />
                    CA 94360 <br />
                  </Typography>
                </div>
              }
            >
              <Radio
                id="blue"
                name="color"
                className="bg-[#107AB7] border-2 border-white"
              />
            </Tooltip>
          </div>
          <div className="absolute top-[80px] left-[40%] z-2">
            <Tooltip
              placement="top"
              className="px-4 py-3 bg-white border shadow-xl border-blue-gray-50 shadow-black/10"
              content={
                <div className="w-50">
                  <Typography
                    color="blue-gray"
                    className="text-[#107AB7] leading-[26px] text-[24px] font-bold "
                  >
                    UNITED KINGDOM
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-[#767676] leading-[26px] text-base font-normal"
                  >
                    Camtech Innovations Ltd <br />
                    Westwick Hall <br />
                    Oakington, Cambridgeshire <br />
                    CB24 3AR <br />
                  </Typography>
                </div>
              }
            >
              <Radio
                id="blue"
                name="color"
                className="bg-[#107AB7] border-2 border-white"
              />
            </Tooltip>
          </div>
          <div className="absolute top-[55%] left-[70%] z-2">
            <Tooltip
              placement="top"
              className="px-4 py-3 bg-white border shadow-xl border-blue-gray-50 shadow-black/10"
              content={
                <div className="w-50">
                  <Typography
                    color="blue-gray"
                    className="text-[#107AB7] leading-[26px] text-[24px] font-bold "
                  >
                    Singapore
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-[#767676] leading-[26px] text-base font-normal"
                  >
                    Camtech Diagnostics Pte Ltd <br /> 217 Henderson Road <br />{" "}
                    #04-08 Henderson Industrial Park <br /> SINGAPORE 159555
                  </Typography>
                </div>
              }
            >
              <Radio
                id="blue"
                name="color"
                className="bg-[#107AB7] border-2 border-white"
              />
            </Tooltip>
          </div>
          <div className="absolute z-2 hidden md:block bg-[#107AB7] bottom-[-80px] w-[382px] left-14 text-white">
            <div className="flex flex-col gap-8 p-8">
              <p className="leading-[48px] text-[40px] font-light">
                Contact Camtech
              </p>
              <p className="leading-[24px] text-base font-normal">
                We are looking for partners for R&D collaboration and
                distribution of products worldwide. Please use the form above to
                indicate your interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
