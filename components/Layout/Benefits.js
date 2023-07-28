import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";
import one_mv from "../../public/images/one_mv.png";
import two_mv from "../../public/images/two_mv.png";
import three_mv from "../../public/images/three_mv.png";
import four_mv from "../../public/images/four_mv.png";
import five_mv from "../../public/images/five_mv.png";
import six_mv from "../../public/images/six_mv.png";


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

        <div className="-mt-36 ml-2">
            <button onClick={previousText}>
                <Image src={white_circle} className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] rounded-full" />
                <Image src={left_arrow} width={25} className="-mt-9 ml-2" />
            </button>
        </div>

        <div className="flex items-end justify-end -mt-10 mr-2">
            <button onClick={nextText}>
                <Image src={white_circle} className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] rounded-full" />
                <Image src={right_arrow} width={25} className="-mt-9 ml-2" />
            </button>
        </div>
      </div>
    </>
  );
}

export default Benefits;
