import { PiDotOutlineFill } from "react-icons/pi";
import Label from "./label";

const About = () => {
  return (
    <div className="bg-gray-100 py-24 px-20 dark:bg-gray-900">
      {" "}
      <div className="flex flex-col gap-12">
        <Label text="About" />
        <div className="flex justify-around w-[95%] h-4/5">
          <div className="w-2/5 h-4/5">
            <img
              className="w-[25rem] h-[30rem]"
              src="./images/bluelock.jpeg"
              alt=""
            />
          </div>
          <div className="w-2/5 flex flex-col gap-6">
            <p className="font-semibold text-3xl">
              Curious about me? Here you have it:
            </p>
            <div className="text-base text-gray-600 flex flex-col gap-4">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="grid grid-cols-2 grid-rows-2">
                <div className="flex items-center">
                  <PiDotOutlineFill />
                  B.E. in Computer Engineering
                </div>
                <div className="flex items-center">
                  <PiDotOutlineFill />
                  Full time freelancer
                </div>
                <div className="flex items-center">
                  <PiDotOutlineFill />
                  Avid learner
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
