import Image from "next/image";

import overview from "../../public/images/overview.png"

function Overview() {
    return (
        <>
        <div className="m-8 lg:px-44">
            <div className="">
                <button className="bg-[#7D9FFF] flex px-4 py-2 border rounded-lg    ">
                    <Image src={overview} className="pt-1" />
                    <p className="pl-2">Overview</p>
                </button>
            </div>
            <div className="mt-10">
                <p className="text-[#2C2C2C] lg:text-xl">Fintract Global is providing opportunities that constantly challenge management and technical trainee programme to learn and develop in a fast-paced environment. We are looking for students who are driven and motivated to work with some of the brightest minds in the management consulting world. You’ll connect with mentors and experts, who will help you delve deeper into the intricacies of the corporate world. These roles will equip you with the nuances of business strategy through several hands-on and practical experiences.</p>
            </div>
            <div className="mt-10">
                <h1 className="text-[#618CFF] font-bold lg:text-3xl">FIND YOUR PERFECT ROLE</h1>
            </div>
            <div className="mt-4">
                <p className="text-[#2C2C2C] lg:text-xl">Fintract Global provides management and technical trainee programme to suitable candidates who:
</p>
            </div>
            <div className="mt-4 mx-3">
                
                    <li className="text-[#2C2C2C] lg:text-xl">Are available for a minimum work duration of 4 months.
</li>
                    <li className="text-[#2C2C2C] lg:text-xl">Demonstrate unflinching commitment and dedication towards the company and its  business interests.
</li>
                    <li className="text-[#2C2C2C] lg:text-xl">Are pursuing programs/have graduated from distinguished institutes/universities and</li>
                    <li className="text-[#2C2C2C] lg:text-xl">possess the requisite skills and interests, for various arenas
</li>
                    <li className="text-[#2C2C2C] lg:text-xl">Are willing to gain practical exposure under the mentorship of experienced professionals in their selected fields.</li>
                
            </div>
        </div>
        </>
    );
}

export default Overview;