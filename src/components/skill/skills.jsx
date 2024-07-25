import { IoLogoJavascript } from "react-icons/io5";
import Label from "../label";
import Tech from "./tech";

const Skills = () => {
  return (
    <div className="py-24 px-20">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-4 ">
          <Label text="Skills" />
          <p className="text-[#4B5563] text-center">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <Tech />
        </div>
      </div>
    </div>
  );
};
export default Skills;
