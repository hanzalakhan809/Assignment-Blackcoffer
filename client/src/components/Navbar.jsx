import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function NavBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  return (
    <div className="app  ">
      <nav className={` ${isScrolled ? " fixed w-full z-50 bg-dark-purple" : "fixed w-full z-50 bg-dark-purple"}`}>
        <div className="max-w-7xl mx-auto ">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-4">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <PaperAirplaneIcon className="h-6 w-6  text-white" />
                  <span className="text-white">Blackcoffer</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 text-white ">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Benefits</a>
                <a href="https://github.com/hanzalakhan809" target="_blank">Our Projects</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center text-white" >
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-4 font-bold tracking-wider">
              <a href="#" className="mt-2">
                Features
              </a>
              <hr />
              <a href="#">Pricing</a>
              <hr />
              <a href="#">Download</a>
              <hr />
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}
