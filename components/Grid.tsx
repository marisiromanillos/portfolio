"use client";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiRedux, SiJest } from "react-icons/si";
import { FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import Image from "next/image";
const Grid = () => {
  const getImageByItemId = (id: number) => {
    const imageMap: Record<number, string> = {
      2: "/kaizen.png", // Currently Working On image
      3: "/review.png", // LinkedIn image
      4: "/github.webp", // GitHub image
    };

    return imageMap[id] || "";
  };

  const Skeleton = ({ itemId }: { itemId: number }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem]">
      <Image
        src={getImageByItemId(itemId)}
        alt="Description"
        className="lg:object-contain object-scale-down"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </div>
  );
  const items = [
    {
      title: <h3 className="text-hotPink">Full Stack Developer</h3>,
      description: (
        <p className="leading-5 w-full lg:w-4/5">
          4 years of professional experience collaborating across
          multidisciplinary teams. I prioritize writing clean, well-documented
          code while fostering transparent communication. I excel at translating
          complex technical concepts into simple terms for stakeholders at all
          levels. My approach emphasizes performance optimization and
          maintainable solutions that drive business value
        </p>
      ),
      className: "md:col-span-2 py-10 md:py-0 items-center justify-center",
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
      title: <p className="text-hotPink">Currently working on</p>,
      description: (
        <p>
          Kaizen Physiotherapy & Performance web app built with Typescript,
          Next.js, React Aceternity, Talwind
        </p>
      ),
      header: <Skeleton itemId={2} />,
      className: "md:col-span-1",
      icon: (
        <div className="flex gap-3">
          <SiTypescript className="h-4 w-4 text-white" />
          <SiNextdotjs className="h-4 w-4 text-white" />
          <DiReact className="h-4 w-4 text-white" />
        </div>
      ),
      id: 2,
    },
    {
      title: <p className="text-hotBlue">Linkedin</p>,
      description: "Let's connect and explore opportunities together",
      header: <Skeleton itemId={3} />,
      className: "md:col-span-1",
      icon: <FaLinkedin className="h-4 w-4 text-white" />,
      id: 3,
    },
    {
      title: <p className="text-green-400">Github</p>,
      description: "Discover the code behind my development projects",
      header: <Skeleton itemId={4} />,
      className: "md:col-span-2",
      icon: <FaGithub className="h-4 w-4 text-white" />,
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
          header={item.id !== 1 ? <Skeleton itemId={item.id} /> : null}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
};
export default Grid;
