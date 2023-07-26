import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";

import Image from "next/image";
import { useState } from "react";
// import next from "next/types";

const data = [
    {
        id:1,
        src: '/images/marketing_mv.png',
        title: 'Marketing & sales (CEO)',
    },
    {
        id:2,
        src: '/images/design_mv.png',
        title: 'Design and content writing',
    },
    {
        id:3,
        src: '/images/hr_mv.png',
        title: 'Human resources and Management',
    },
    {
        id:4,
        src: '/images/finance_mv.png',
        title: 'Finance and Marketing',
    },
    {
        id:5,
        src: '/images/software_mv.png',
        title: 'Software development and engineering',
    },
];

function Explore() {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    function nextText() {
        const newIndex = currentTextIndex === data.length - 1 ? 0 : currentTextIndex + 1;
        setCurrentTextIndex(newIndex);
    };

    function previousText() {
        const newIndex = currentTextIndex ===0 ? data.length - 1 : currentTextIndex - 1;
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
                <input type="text" placeholder="Start you job search here" className="border rounded-xl px-12 mt-4"/>
                <button className="mt-3 bg-[#0057FF] text-white px-[7.5rem] border rounded-xl">Search</button>
            </div>

            <div className="mt-10">
                <div className="ml-8">
                    <p className="text-[#5A5A5A]">SPOTLIGHT</p>
                </div>
                <div>
                    <div className="mt-8 bg-white flex flex-col items-center justify-center">
                        <Image src={data[currentTextIndex].src} width="205" height={79} />
                        <p className="text-[1.15rem] p-4">{data[currentTextIndex].title}</p>
                    </div>

                    <div className=" relative bottom-24 left-4">
                        <button onClick={previousText} className="transform -translate-y-1/2">
                            <Image src={white_circle}  className=" rounded-full shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)"/>
                            <Image src={left_arrow} width={25} className="absolute top-3 right-4"/>
                        </button>
                    </div>

                    <div className="flex items-end justify-end relative bottom-44">
                        <button onClick={nextText}>
                            <Image src={white_circle} className="transform -translate-x-1/2"/>
                            <Image src={right_arrow} width={25} className="relative bottom-10 right-3"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Explore;