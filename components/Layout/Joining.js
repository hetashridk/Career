import joining_mv from "../../public/images/joining_mv.png";
import joining from "../../public/images/joining.png";
import msg from "../../public/images/msg.png";

import Image from "next/image";

function Joining() {
  return (
    <>
      <div className="mt-36 md:mt-10 ">
        <div className="mt-4 p-8">
          <hr className="bg-[#0038CF] h-1" />
        </div>

        <div className="md:flex md:flex-row-reverse lg:items-center md:justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image src={joining_mv} className="md:hidden" />
            {/* <div> */}
              {/* <div> */}
                <Image src={joining} className="h-[29.5rem] w-[20rem] mr-16 hidden md:block" />
              {/* </div> */}
              <div className="absolute mr-12 hidden md:block">
                <div className="flex space-x-2">
                <p className="text-white text-2xl font-semibold">Interested </p>
                <p className="text-[#00F890] text-2xl font-semibold"> in joining</p>
                <p className="text-white text-2xl font-semibold">the </p>
                </div>
                <div className="flex space-x-2">
                <p className="text-white text-2xl font-semibold">team but not</p>
                <p className="text-[#00F890] text-2xl font-semibold">ready to</p>
                </div>
                <div className="flex space-x-2">
                <p className="text-[#00F890] text-2xl font-semibold">apply</p>
                <p className="text-white text-2xl font-semibold">or dont</p>
                <p className="text-[#00F890] text-2xl font-semibold">see the</p>
                </div>
                <div className="flex space-x-2">
                <p className="text-[#00F890] text-2xl font-semibold">right opportunity ?</p>
                </div>
              </div>
            {/* </div> */}
          </div>
          <div>
            <form className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] ml-12 w-[18.5rem] md:ml-5">
              <div className="ml-5 pt-4">
                <div>
                  <div>
                    <label className="text-[#7A7A7A]" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      className="border border-[#7A7A7A] w-64"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                {/* email */}
                <div className="mt-4">
                  <div>
                    <label className="text-[#7A7A7A]" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      className="border border-[#7A7A7A] w-64"
                      type="text"
                      id="email"
                    />
                  </div>
                </div>

                {/* phone and linkedin */}
                <div className="flex mt-4 space-x-4">
                  <div className="flex flex-col">
                    <label className="text-[#7A7A7A]" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="border border-[#7A7A7A] w-28"
                      type="number"
                      id="phone"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#7A7A7A]" htmlFor="linkedin">
                      Linkedin Profile
                    </label>
                    <input
                      className="border border-[#7A7A7A] w-28"
                      type="text"
                      id="linkedin"
                    />
                  </div>
                </div>

                {/* role */}
                <div className="mt-4">
                  <div>
                    <label className="text-[#7A7A7A]" htmlFor="role">
                      Which role you are interested in ?
                    </label>
                  </div>
                  <div>
                    <input
                      className="border border-[#7A7A7A] w-64"
                      type="text"
                      id="role"
                    />
                  </div>
                </div>

                {/* resume */}
                <div className="mt-4">
                  <div>
                    <label className="text-[#7A7A7A]" htmlFor="resume">
                      Upload Resume
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      className="border border-[#7A7A7A] w-64 h-7"
                      type="text"
                      id="resume"
                    />
                    <button className="bg-[#001870] text-white text-[0.5rem] px-5 mx-1">
                      browse file
                    </button>
                  </div>
                </div>

                {/* message */}
                <div className="mt-4">
                  <div>
                    <label className="text-[#7A7A7A]" htmlFor="message">
                      Message
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      className="border border-[#7A7A7A] w-64 h-7"
                      type="text"
                      id="message"
                    />
                    <button className="bg-[#001870] rounded-full p-2 mx-1">
                      <Image src={msg} />
                    </button>
                    {/* <button className="bg-[#001870] text-white text-[0.5rem] px-5 mx-1">browse file</button> */}
                  </div>
                </div>

                {/* sign up */}
                <div className="mt-4 flex items-center justify-center p-4">
                  <button className="bg-[#001870] rounded-md text-white px-4 py-1 text-[0.75rem]">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joining;
