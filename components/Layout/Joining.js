import joining_mv from "../../public/images/joining_mv.png";

import Image from "next/image";

function Joining() {
  return (
    <>
      <div className="mt-36 md:mt-10">
        <div className="mt-4 p-8">
          <hr className="bg-[#0038CF] h-1" />
        </div>

        <div className="flex flex-col items-center justify-center">
            <div>
            <Image src={joining_mv} />
            </div>
            <div>
                <form className="shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)]">
                    <div>
                        <label htmlFor="name" className="text-[#7A7A7A]">Name</label>
                        <input id="name" type="text" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default Joining;
