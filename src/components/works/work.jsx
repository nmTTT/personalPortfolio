import React from "react";
import Label from "../label";
import WorkCard from "./workCard";

const projects = [
  {
    title: "UBCab",
    image:
      "https://s3-alpha-sig.figma.com/img/f7f4/1fb2/9978d6752a84190b8a3ff63dfa2ce73a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0sKsLJIEfz9TArXbbWMrIhjw9THLytLIT79iTE~o4k67XSlUZpb20TiNyMyY-gneFduBtNyLMgf~T2XJDoob4Az7rHJjZA4DycGyQ7ObMD1qt2tpPJF~qsZD1kWOtVieHnvQWwVR62LRDy5TiHUY0~EDSE47dmLkR5FAMXzzHj1RCykE8w9T-ZMH01oXSLWtFuNf79S9iuZTnrZVW6xklU9MYR4ZPpmFnB2z~0tI5m7GSiJZpeKf6PpDMH7v3KvNf~tgo6yKPSiIwPbgek64viJ9g40qwoylfyrVavFI1TMYYxQUqHUHWP93t5rkch9~nojlRJbcMjmiGi-fi0T0g__",
    names: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Nest.js" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
      { name: "Cypress" },
      { name: "Git" },
      { name: "Storybook" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    title: "UBCab",
    image:
      "https://s3-alpha-sig.figma.com/img/f7f4/1fb2/9978d6752a84190b8a3ff63dfa2ce73a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0sKsLJIEfz9TArXbbWMrIhjw9THLytLIT79iTE~o4k67XSlUZpb20TiNyMyY-gneFduBtNyLMgf~T2XJDoob4Az7rHJjZA4DycGyQ7ObMD1qt2tpPJF~qsZD1kWOtVieHnvQWwVR62LRDy5TiHUY0~EDSE47dmLkR5FAMXzzHj1RCykE8w9T-ZMH01oXSLWtFuNf79S9iuZTnrZVW6xklU9MYR4ZPpmFnB2z~0tI5m7GSiJZpeKf6PpDMH7v3KvNf~tgo6yKPSiIwPbgek64viJ9g40qwoylfyrVavFI1TMYYxQUqHUHWP93t5rkch9~nojlRJbcMjmiGi-fi0T0g__",
    names: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Nest.js" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
      { name: "Cypress" },
      { name: "Git" },
      { name: "Storybook" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    title: "UBCab",
    image:
      "https://s3-alpha-sig.figma.com/img/f7f4/1fb2/9978d6752a84190b8a3ff63dfa2ce73a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0sKsLJIEfz9TArXbbWMrIhjw9THLytLIT79iTE~o4k67XSlUZpb20TiNyMyY-gneFduBtNyLMgf~T2XJDoob4Az7rHJjZA4DycGyQ7ObMD1qt2tpPJF~qsZD1kWOtVieHnvQWwVR62LRDy5TiHUY0~EDSE47dmLkR5FAMXzzHj1RCykE8w9T-ZMH01oXSLWtFuNf79S9iuZTnrZVW6xklU9MYR4ZPpmFnB2z~0tI5m7GSiJZpeKf6PpDMH7v3KvNf~tgo6yKPSiIwPbgek64viJ9g40qwoylfyrVavFI1TMYYxQUqHUHWP93t5rkch9~nojlRJbcMjmiGi-fi0T0g__",
    names: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Nest.js" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
      { name: "Cypress" },
      { name: "Git" },
      { name: "Storybook" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

const Work = () => {
  return (
    <div className="w-[100%] px-20 py-24 flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4 text-center">
        <Label text="Work" />
        <div className="text-[#4B5563]">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <div className="flex flex-col w-full gap-12 mt-4">
        {projects.map((project, i) => (
          <WorkCard
            title={project.title}
            description={project.description}
            image={project.image}
            names={project.names}
            swap={i % 2}
          />
        ))}
      </div>
    </div>
  );
};
export default Work;
