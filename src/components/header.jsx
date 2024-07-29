import { IoMdMenu } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";
import { useState, useEffectffect } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header>
        <div className="flex justify-between p-4 sm: my-10 mx-20 h-8 items-center">
          <p className="text-[30px]">nmT</p>
          <IoMdMenu className="text-2xl sm:hidden" />
          <div className="hidden sm:flex gap-4 block items-center">
            <button>About</button>
            <button>Work</button>
            <button>Testimonials</button>
            <button>Contact</button>
            <div className=" sm: h-6 w-0 border"></div>
            {theme === "light" ? (
              <button
                onClick={() => {
                  setTheme("dark");
                }}
              >
                <PiSunLight />
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme("light");
                }}
              >
                <PiMoonLight />
              </button>
            )}

            <button className=" sm: px-4 py-1.5 bg-black rounded-xl text-white">
              Download CV
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
