import { IoMdMenu } from "react-icons/io";
import { PiMoonStarsLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header className="bg-white dark: bg-[#030712]">
        <div className="flex justify-between p-4 sm: my-10 mx-20 h-8 items-center">
          <p className="text-[30px]">nmT</p>
          <IoMdMenu className="text-2xl sm:hidden" />
          <div className="hidden sm:flex gap-4 block items-center">
            <button>About</button>
            <button>Work</button>
            <button>Testimonials</button>
            <button>Contact</button>
            <div className=" sm: h-6 w-0 border"></div>
            <button className="hidden sm: block">
              <PiMoonStarsLight />
            </button>
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
