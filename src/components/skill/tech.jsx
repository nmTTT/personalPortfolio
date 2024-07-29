const techs = [
  {
    name: "Javascript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Typescript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    name: "React",
    logo: "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
  },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Node.js",
    logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  },
  {
    name: "Tailwind",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
  },
  {
    name: "Git",
    logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
];

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[86px]">
      {techs.map((value) => {
        return (
          <div className="flex flex-col gap-2 items-center">
            <img className="w-16 h-16" src={value.logo} alt="photo" />
            <p className="text-[18px] font-[400] text-gray-600">{value.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Tech;
