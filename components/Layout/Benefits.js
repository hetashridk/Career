import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";
import one from "../../public/images/one.png";
import two from "../../public/images/two.png";
import three from "../../public/images/three.png";
import four from "../../public/images/four.png";
import five from "../../public/images/five.png";
import six from "../../public/images/six.png";


import Image from "next/image";
import { useState } from "react";

const data = [
    {
        id:1,
        src: "/images/one_mv.png",
        title: "Accredited Certification from Fintract Global, demonstrating your abilities and Flexible Work Hours",
    },
    {
        id:2,
        src: "/images/two_mv.png",
        title: "Accredited Certification from Fintract Global, demonstrating your abilities and Flexible Work Hours",
    },
    {
        id:3,
        src: "/images/three_mv.png",
        title: "Opportunity to improve your skills while working on different projects.",
    },
    {
        id:4,
        src: "/images/four_mv.png",
        title: "Candidates may qualify for a FULL-TIME JOB offer in the UK, an attractive stock option/Equity, Executive role, UK VISA, or a lifetime corporate membership based on your performance.",
    },
    {
        id:5,
        src: "/images/five_mv.png",
        title: "The Minimum Four Months Programme will help you hone your skill set and gain profound insights into intriguing arenas of Business Strategy, Development, Research, Writing and Marketing.",
    },
    {
        id:6,
        src: "/images/six_mv.png",
        title: " A sneak-peek into the world of Corporate Consultancy by delving deep into Fintech Models, Data Analysis Modules.",
    },
];
function Benefits() {

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
        <div className="mt-4 p-8">
          <hr className="bg-[#618CFF] h-1" />
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div>
            <p className="text-xl font-semibold md:text-3xl lg:text-4xl">
              Additional
            </p>
          </div>
          <div>
            <p className="text-[#618CFF] text-xl font-semibold md:text-3xl lg:text-4xl">
              Perks
            </p>
          </div>
          <div>
            <p className=" text-xl font-semibold md:text-3xl lg:text-4xl">
              and
            </p>
          </div>
          <div>
            <p className="text-[#618CFF] text-xl font-semibold md:text-3xl lg:text-4xl">
              Benefits
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 md:hidden">
            <Image src={data[currentTextIndex].src} width={250} height={250} />
            <p className="text-center absolute text-white p-20 font-semibold">{data[currentTextIndex].title}</p>
        </div>

        <div className="-mt-36 ml-2 md:hidden">
            <button onClick={previousText}>
                <Image src={white_circle} className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] rounded-full" />
                <Image src={left_arrow} width={25} className="-mt-9 ml-2" />
            </button>
        </div>

        <div className="flex items-end justify-end -mt-10 mr-2 md:hidden">
            <button onClick={nextText}>
                <Image src={white_circle} className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] rounded-full" />
                <Image src={right_arrow} width={25} className="-mt-9 ml-2" />
            </button>
        </div>

        {/* webview */}
        <div className="hidden md:block m-10">
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <Image src={one} />
              <p className="absolute text-white font-semibold text-center px-14 lg:text-2xl lg:px-16">Accredited Certification from Fintract Global, demonstrating your abilities and Flexible Work Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center -ml-2 lg:-ml-10">
              <Image src={two} />
              <p className="absolute text-white font-semibold text-center px-72 lg:text-2xl lg:px-[35rem]">Accredited Certification from Fintract Global, demonstrating your abilities and Flexible Work Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-12 -ml-3 lg:mt-28 lg:-ml-5">
              <Image src={three} />
              <p className="absolute text-white font-semibold text-center px-14 lg:text-2xl">Opportunity to improve your skills while working on different projects.</p>
            </div>
          </div>
          <div className="flex -mt-12">
          <div className="flex flex-col items-center justify-center -mt-24 lg:-mt-44">
              <Image src={four} />
              <p className="absolute text-white font-semibold text-center px-[4rem] lg:text-2xl">Candidates may qualify for a FULL-TIME JOB offer in the UK, an attractive stock option/Equity, Executive role, UK VISA, or a lifetime corporate membership based on your performance.</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-14 -ml-10">
              <Image src={five} />
              <p className="absolute text-white font-semibold text-center px-64 lg:text-2xl lg:px-[31rem]">The Minimum Four Months Programme will help you hone your skill set and gain profound insights into intriguing arenas of Business Strategy, Development, Research, Writing and Marketing.</p>
            </div>
            <div className="flex flex-col items-center justify-center -mt-14 -ml-12 lg:-mt-28">
              <Image src={six} />
              <p className="absolute text-white font-semibold text-center px-14 lg:text-2xl">A sneak-peek into the world of Corporate Consultancy by delving deep into Fintech Models, Data Analysis Modules.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
