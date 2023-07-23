import Image from "next/image";
import logo_mv from "../../public/images/logo_mv.png";
import twitter_m from "../../public/images/twitter_m.png";
import insta_mv from "../../public/images/insta_mv.png";
import fb_mv from "../../public/images/fb_mv.png";
import ld_mv from "../../public/images/ld_mv.png";
import twitter_logo from "../../public/images/twitter_logo.png";
import insta_logo from "../../public/images/insta_logo.png";
import fb_logo from "../../public/images/fb_logo.png";
import ld_logo from "../../public/images/ld_logo.png";
import location from "../../public/images/location.png";
import call from "../../public/images/call.png";
import msg from "../../public/images/msg.png";

function Contact() {
  return (
    <>
      <div className="bg-black md:bg-[#EA580C]">
        <div className="md:flex">
          <div>
            <div className="pl-5 pt-6 md:-p-[25rem]">
              <Image src={logo_mv} className="" />
            </div>
            <div>
              <p className="text-white text-2xl font-semibold pl-5 pt-2">
                Fintract Global
              </p>
            </div>
            <div>
              <p className="text-white text-left pl-5 px-4 pt-2 text-[10px] md:text-[15px] md:">
                At Fintract Global Ltd, we combine a cutting-edge tech stack
                with exceptional talent from Europe, Asia and America to lead
                change in how financial entities work. Headquartered in London,
                Fintract Global develops cutting edge fintech and regtech
                products.
              </p>
            </div>
            <div className="flex m-5">
              <div className="p-2">
                <Image src={twitter_m} className="sm:hidden" />
                <Image src={twitter_logo} className="hidden md:block" />
              </div>
              <div className="p-2">
                <Image src={insta_mv} className="sm:hidden" />
                <Image src={insta_logo} className="hidden md:block" />
              </div>
              <div className="p-2">
                <Image src={fb_mv} className="sm:hidden" />
                <Image src={fb_logo} className="hidden md:block" />
              </div>
              <div className="p-2">
                <Image src={ld_mv} className="sm:hidden" />
                <Image src={ld_logo} className="hidden md:block" />
              </div>
            </div>
          </div>
        <div>
          <div className="flex p-5">
            <Image src={location} />
            <div>
              <p className="text-white font-bold mt-5 ml-5">Address</p>
              <p className="text-white text-[10px] ml-5">
                Registered Office: London Office Address 71-75,
              </p>
              <p className="text-white text-[10px] ml-5">
                {" "}
                Sheldon Street, Covent Garden London, WC2h 9JQ
              </p>
            </div>
          </div>
          <div className="flex p-5">
            <Image src={call} />
            <div>
              <p className="text-white font-bold mt-5 ml-5">Phone</p>
              <p className="text-white text-[10px] ml-5">+44-2037373227</p>
            </div>
          </div>
          <div className="flex p-5">
            <Image src={msg} />
            <div>
              <p className="text-white font-bold mt-5 ml-5">Email</p>
              <p className="text-white text-[10px] ml-5">
                contact@fintract.co.uk
              </p>
            </div>
          </div>
        </div>
        </div>

        <hr />

        <div>
          <p className="text-[#9b9b9b] text-[10px] p-5 md:text-white md:text-[15px]">
            Fintract Global takes your privacy very seriously. We may process
            your personal information for carefully considered and specific
            purposes which are in our interests and enable us to enhance the
            services we provide, but which we believe also benefit our
            customers. View our Privacy Policy to learn more about these
            interests and when we may process your information in this way.
          </p>
        </div>
        <div>
          <p className=" text-white text-xl text-center">Click Here</p>
        </div>
        <div>
          <p className="text-[#9b9b9b] text-[10px] text-center p-5 md:text-white md:text-[15px]">
            Copyright ©2021 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
