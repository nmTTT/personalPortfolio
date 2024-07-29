import { FaExternalLinkAlt } from "react-icons/fa";

const WorkCard = ({ title, description, names, image, swap }) => {
  return (
    <div
      className={`flex ${
        swap ? "flex-row-reverse" : ""
      }  bg-white shadow-lg rounded-2xl dark:bg-gray-800`}
    >
      <div className="bg-[#F9FAFB] w-1/2 h-[100%] dark:bg-gray-600 p-12">
        <img src={image} alt={title} />
      </div>
      <div className="w-1/2 flex flex-wrap p-12 dark:bg-gray-800">
        <div className="font-semibold text-lg">
          {" "}
          <span>{title}</span>
        </div>
        <div className="text-gray-600">
          {" "}
          <span>{description}</span>
        </div>
        <div className="w-[100%] ">
          <div className="flex flex-wrap gap-3">
            {names?.map((tags) => (
              <span className="py-1 px-5 rounded-2xl bg-gray-200 dark:bg-gray-600">
                {tags.name}
              </span>
            ))}
          </div>
        </div>
        <div className="text-3xl">
          <button>
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
};
export default WorkCard;
