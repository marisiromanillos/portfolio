import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiRedux, SiJest } from "react-icons/si";
import { FaNodeJs, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";

const Grid = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const items = [
    {
      title: <h3 className="text-hotPink">Full Stack Developer</h3>,
      description: (
        <p className="leading-5">
          4 years of professional experience collaborating across
          multidisciplinary teams. I prioritize writing clean, well-documented
          code while fostering transparent communication. I excel at translating
          complex technical concepts into simple terms for stakeholders at all
          levels. My approach emphasizes performance optimization and
          maintainable solutions that drive business value
        </p>
      ),
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: (
        <div className="flex gap-3">
          <DiJavascript1 className="h-4 w-4 text-white" />
          <SiTypescript className="h-4 w-4 text-white" />
          <DiReact className="h-4 w-4 text-white" />
          <SiNextdotjs className="h-4 w-4 text-white" />
          <SiRedux className="h-4 w-4 text-white" />
          <SiJest className="h-4 w-4 text-white" />
          <FaNodeJs className="h-4 w-4 text-white" />
          <SiMysql className="h-4 w-4 text-white" />
          <SiPostgresql className="h-4 w-4 text-white" />
          <RiVercelLine className="h-4 w-4 text-white" />
        </div>
      ),
      id: 1,
    },
    {
      title: "Github",
      description: "Discover the code behind my development projects",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaGithub className="h-4 w-4 text-white" />,
      id: 2,
    },
    {
      title: "Linkedin",
      description: "Let's connect and explore opportunities together",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaLinkedin className="h-4 w-4 text-white" />,
      id: 3,
    },
    {
      title: "Currently working on",
      description: <p>Next</p>,
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <FaUser className="h-4 w-4 text-white" />,
      id: 4,
    },
  ];
  return (
    <BentoGrid className="md:py-16 py-12 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
};
export default Grid;
