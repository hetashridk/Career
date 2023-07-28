import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";
import marketing from "../../public/images/marketing.png";
import design from "../../public/images/design.png";
import hr from "../../public/images/hr.png";
import finance from "../../public/images/finance.png";
import software from "../../public/images/software.png";
import product from "../../public/images/product.png";

import Image from "next/image";
import { useState } from "react";
// import next from "next/types";

const data = [
  {
    id: 1,
    src: "/images/marketing_mv.png",
    src1: "/images/marketing.png",
    title: "Marketing & sales (CEO)",
  },
  {
    id: 2,
    src: "/images/design_mv.png",
    src1: "/images/design.png",
    title: "Design and content writing",
  },
  {
    id: 3,
    src: "/images/hr_mv.png",
    src1: "/images/hr.png",
    title: "Human resources and Management",
  },
  {
    id: 4,
    src: "/images/finance_mv.png",
    src1: "/images/finance.png",
    title: "Finance and Marketing",
  },
  {
    id: 5,
    src: "/images/software_mv.png",
    src1: "/images/software.png",
    title: "Software development and engineering",
  },
];

function Explore() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  function nextText() {
    const newIndex =
      currentTextIndex === data.length - 1 ? 0 : currentTextIndex + 1;
    setCurrentTextIndex(newIndex);
  }

  function previousText() {
    const newIndex =
      currentTextIndex === 0 ? data.length - 1 : currentTextIndex - 1;
    setCurrentTextIndex(newIndex);
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-center space-x-2">
          <div>
            <p className="text-xl font-semibold md:text-3xl lg:text-4xl">
              EXPLORE
            </p>
          </div>
          <div>
            <p className="text-[#618CFF] text-xl font-semibold md:text-3xl lg:text-4xl">
              CAREER
            </p>
          </div>
          <div>
            <p className=" text-xl font-semibold md:text-3xl lg:text-4xl">
              AREAS
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:hidden">
          <input
            type="text"
            placeholder="Start you job search here"
            className="border rounded-xl px-12 mt-4"
          />
          <button className="mt-3 bg-[#0057FF] text-white px-[7.5rem] border rounded-xl">
            Search
          </button>
        </div>

        <div className="mt-10">
          <div className="ml-8">
            <p className="text-[#5A5A5A]">SPOTLIGHT</p>
          </div>
          <div>
            <div className="mt-8 bg-white flex flex-col items-center justify-center shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] md:hidden">
              <Image src={data[currentTextIndex].src} width="205" height="79" />
              <p className="text-[1.15rem] p-4 mt-4">
                {data[currentTextIndex].title}
              </p>
            </div>

            <div className=" relative bottom-24 ml-4 md:hidden">
              <button
                onClick={previousText}
                className="transform -translate-y-1/2"
              >
                <Image
                  src={white_circle}
                  className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] rounded-full "
                />
                <Image
                  src={left_arrow}
                  width={25}
                  className="absolute top-3 right-4"
                />
              </button>
            </div>

            <div className="flex items-end justify-end relative bottom-44 md:hidden">
              <button onClick={nextText}>
                <Image src={white_circle} className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] rounded-full mr-4 " />
                <Image
                  src={right_arrow}
                  width={25}
                  className="relative bottom-10 -right-3"
                />
              </button>
            </div>
            <div className="bg-[#0057FF] p-10 -mt-[12rem] py-14 md:hidden"></div>

            {/* webview */}
            <div className="mt-10 hidden md:block md:m-4">
              <div className="flex items-center justify-center space-x-5">
                <div className="rounded-xl shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] bg-white">
                    <Image src={marketing} />
                    <p className="text-center text-2xl font-semibold p-4 ">Marketing & sales (CEO)</p>
                </div>
                <div className="rounded-xl shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] bg-white">
                    <Image src={design} />
                    <p className="text-center text-2xl font-semibold p-4 ">Design and content writing</p>
                </div>
                <div className="rounded-xl shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] bg-white">
                    <Image src={hr} />
                    <p className="text-center text-2xl font-semibold p-4">Human resources and Management</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-5 space-y-4">
                <div className="rounded-xl shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] bg-white">
                    <Image src={finance} />
                    <p className="text-center text-2xl font-semibold p-4 ">Finance and Marketing</p>
                </div>
                <div className="rounded-xl shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] bg-white">
                    <Image src={software} />
                    <p className="text-center text-2xl font-semibold p-4">Software development and engineering</p>
                </div>
                <div className="rounded-xl shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] bg-white">
                    <Image src={product} />
                    <p className="text-center text-2xl font-semibold p-4">Product and corporate management</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Explore;
