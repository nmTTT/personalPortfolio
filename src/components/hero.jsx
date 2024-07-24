import { MdWavingHand } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mx-20 my-24 flex justify-evenly gap-4">
      <div className="flex flex-col gap-12 w-1/3">
        <div className="flex flex-col gap-2">
          <p className="text-6xl flex gap-4">
            Hi, I am nmT <MdWavingHand className="text-yellow-500" />
          </p>
          <p className="text-base">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <CiLocationOn />
            </div>
            Ulaanbaatar, Mongolia
          </div>
          <div className="flex gap-3 ">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span>Available for new projects</span>
          </div>
        </div>
        <div className="flex gap-4">
          <LuGithub />
          <CiTwitter />
          <FaFigma />
        </div>
      </div>
      <div className="flex gap-1 w-[320px] h-[360px]">
        <img src="./images/slamdunk.JPG" alt="" />
      </div>
    </div>
  );
};
export default Hero;
