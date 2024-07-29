const job = [
  {
    role: "Sr. Frontend Developer",
    duration: "Nov 2021 - Present",
    projects: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    logo: "./images/logo-upwork.png",
  },
  {
    role: "Team Lead",
    duration: "Jul 2017 - Oct 2021",
    projects: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    logo: "./images/logo-upwork.png",
  },
  {
    role: "Full Stack Developer",
    duration: "Dec 2015 - May 2017",
    projects: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    logo: "./images/logo-upwork.png",
  },
];

const Jobs = () => {
  return (
    <div className="flex flex-col gap-12">
      {job.map((value) => (
        <div className="flex gap-12 justify-between dark: bg-gray-700 rounded-xl p-8">
          <img className="w-[102px] h-[28px]" src={value.logo} alt="" />
          <div className="w-96">
            <p className="font-semibold text-lg">{value.role}</p>
            <p>
              {value.projects.map((project) => (
                <p className="text-[#4B5563]">{project}</p>
              ))}
            </p>
          </div>
          <div className="">{value.duration}</div>
        </div>
      ))}
    </div>
  );
};
export default Jobs;
