import { MdWavingHand } from "react-icons/md";

const Hero = () => {
  return (
    <div className="mx-20 my-24 flex justify-between">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="font">
            Hi, I am nmT <MdWavingHand />
          </p>
          <p></p>
        </div>
        <div className="flex flex-col gap-2">
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div className="flex gap-1"></div>
    </div>
  );
};
export default Hero;
