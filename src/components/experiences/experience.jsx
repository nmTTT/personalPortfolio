import Label from "../label";
import Jobs from "./jobs";

const Experience = () => {
  return (
    <div className="px-20 py-24 bg-[#F9FAFB] ">
      <div className=" flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center">
          <Label text="Experience" />
          <div className="text-[#4B5563]">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <Jobs />
        </div>
      </div>
    </div>
  );
};
export default Experience;