import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import Label from "./label";

const info = [
  {
    email: "nomttumurkhuu@yahoo.com",
    phoneNumber: "+976 86219964",
  },
];

const Contact = () => {
  return (
    <div className="px-20 py-24">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-4 text-center">
          <Label text="Get in Touch" />
          <div className="w-[30rem]">
            <span className="text-gray-600 text-lg">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </span>
          </div>
        </div>
        {info.map ((value) => (
          <div>
          <div className="flex gap-5 items-center text-3xl font-semibold">
            <CiMail />
            <p>{value.email}</p>
            <button>
              <IoCopyOutline />
            </button>
          </div>
          <div className="flex gap-5 justify-center items-center text-3xl font-semibold">
            <IoCallOutline />
            <p>{value.phoneNumber}</p>
            <button>
              <IoCopyOutline />
            </button>
          </div>
        </div>
        ))}
        <div className="flex flex-col gap-2 items-center">
          <div className="text-[#4B5563]">
            You may also find me on these platforms!
          </div>
          <div className="flex gap-5 text-2xl">
            <LuGithub />
            <CiTwitter />
            <FaFigma />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
