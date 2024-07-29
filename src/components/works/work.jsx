import Label from "../label";
import WorkCard from "./workCard";

const Work = () => {
  return (
    <div className="w-[100%] px-20 py-24 flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4 text-center">
        <Label text="Work" />
        <div className="text-[#4B5563]">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <WorkCard />
    </div>
  );
};
export default Work;
