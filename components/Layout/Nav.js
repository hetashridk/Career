import { useState } from "react";
import Image from "next/image";

import close_menu from "../../public/images/close_menu.png";
import hamburger_menu from "../../public/images/hamburger_menu.png";
import logo_mv from "../../public/images/logo_mv.png";
import FG_logo_whitebg_2 from "../../public/images/FG_logo_whitebg_2.png";
import search_white from "../../public/images/search_white.png";
import square_orange from "../../public/images/square_orange.png";
import header_career from "../../public/images/header_career.png";
import header_career_mv from "../../public/images/header_career_mv.png";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="bg-black md:bg-transparent">
        <div>
          <div className="flex">
            <div className="md:hidden">
            <button type="button" onClick={() => setNavbar(!navbar)}>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              {navbar ? (
                <Image src={close_menu} className="w-7 mx-2" />
              ) : (
                <Image src={hamburger_menu} className="w-7 mx-2" />
              )}
            </button>
            </div>
            <div>
              <div className="mt-5 ml-7 flex md:absolute">
                <Image src={logo_mv} className="md:hidden"/>
                <Image src={FG_logo_whitebg_2} className="hidden md:block "/>
                <div className="hidden md:block lg:ml-20">
                    <p className="mt-8 text-2xl font-semibold ml-5 text-white">More</p>
                </div>
                <div className="hidden md:block lg:ml-20">
                    <p className="mt-8 text-2xl font-semibold ml-5 text-white">Product</p>
                </div>
                <div className="hidden md:block lg:ml-80">
                    <input type="text" placeholder="Search FG..." className="mt-8 ml-9 p-2 rounded-2xl lg:px-20" />
                </div>
                <div className="hidden md:block lg:ml-5">
                    <button className="border border-black bg-white p-2 mt-8 ml-4">Log in</button>
                </div>
                <div className="hidden md:block lg:ml-5">
                    <button className="border border-white bg-black p-2 mt-8 ml-4 text-white">Sign up</button>
                </div>
              </div>
              <div className="flex items-end justify-end ml-72 -mt-10 md:hidden">
                <button className="bg-blue-600 text-white py-2 px-3 m-2">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-[#bbbaba] rounded-md px-24 m-2 py-2"
              />
            {/* <a target="_blank" href="https://icons8.com/icon/59878/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            <a target="_blank" href="https://icons8.com/icon/l2Ytnb9qIYup/orange-square">Orange Square</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <div className="-mt-[3.2rem] flex items-end justify-end">

            <Image src={square_orange} className="relative left-5" />
            <Image src={search_white}  className="relative bottom-2 right-5"/>
            </div>
            <div>
            </div>
            </div>
          </div>
          {navbar && (
            <div className="bg-black max-h-max">
              <div className="flex items-center justify-center">
                <ul>
                  <li className="text-white">Home</li>
                  <li className="text-white">More</li>
                  <li className="text-white">Our Product</li>
                  <li className="text-white">Contact</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
          <Image src={header_career} className="hidden md:block"/>
          <Image src={header_career_mv} className="md:hidden"/>
        <div className="bg-[#0057FF] p-7 md:hidden">
            <div>
              <p className="text-white text-2xl text-left">EXPLORE THE CAREER AT</p>
            </div>
            <div>
              <p className="text-white text-3xl text-left">FINTRACT GLOBAL</p>
            </div>
            <div>
              <p className="text-white text-xl text-left">JOIN THE TEAM</p>
            </div>
        </div>
    </>
  );
}

export default Nav;
