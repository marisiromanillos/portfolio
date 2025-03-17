"use client";
import { PinContainer } from "./ui/3Dpin";
import { DiJavascript1, DiPhp, DiSass, DiHtml5 } from "react-icons/di";
import {
  SiTailwindcss,
  SiGooglemaps,
  SiTypescript,
  SiPrimevue,
  SiExpress,
  SiMysql,
  SiOpenlayers,
  SiJest,
  SiNextdotjs,
} from "react-icons/si";
import { FaVuejs, FaNode, FaReact } from "react-icons/fa";

import { TbApi } from "react-icons/tb";

const Projects = () => {
  const projectContent = [
    {
      id: 1,
      title: "Swytch Bike Store Locator",
      des: "User can search for stores by name,address or geolocation and get the store details and location on a map.",
      icons: [
        <DiJavascript1 key="js" className="h-4 w-4 text-white" />,
        <SiTailwindcss key="tailwind" className="h-4 w-4 text-white" />,
        <TbApi key="api" className="h-4 w-4 text-white" />,
        <SiGooglemaps key="maps" className="h-4 w-4 text-white" />,
        <DiHtml5 key="html" className="h-4 w-4 text-white" />,
        <DiSass key="scss" className="h-4 w-4 text-white" />,
        ,
      ],
      link: "/project/swytchbike-store-locator",
    },
    {
      id: 2,
      title: "Swytch Bike Main Site",
      des: "Led redevelopment of the main and order sites (300,000+ users), improving UX, performance, and SEO.",
      icons: [
        <DiJavascript1 key="js" className="h-4 w-4 text-white" />,
        <DiPhp key="php" className="h-4 w-4 text-white" />,
        <SiTailwindcss key="tailwind" className="h-4 w-4 text-white" />,
        <DiSass key="scss" className="h-4 w-4 text-white" />,
        <DiHtml5 key="html" className="h-4 w-4 text-white" />,
      ],
      link: "/project/swytchbike-main-site",
    },
    {
      id: 3,
      title: "Swytch Tools Zendesk App",
      des: "Streamlined customer service operations by building a unified Zendesk app that consolidated multiple tools into a single interface.",
      icons: [
        <SiTypescript key="ts" className="h-4 w-4 text-white" />,
        <FaVuejs key="vue" className="h-4 w-4 text-white" />,
        <SiPrimevue key="primevue" className="h-4 w-4 text-white" />,
        <SiTailwindcss key="tailwind" className="h-4 w-4 text-white" />,
        <TbApi key="api" className="h-4 w-4 text-white" />,
      ],
      link: "/project/swytch-tools-zendesk-app",
    },
    {
      id: 4,
      title: "Simpsons API",
      des: "Scalable API with CRUD operations, secure login, middleware, and SQL database integration.",
      icons: [
        <DiJavascript1 key="js" className="h-4 w-4 text-white" />,
        <FaNode key="node" className="h-4 w-4 text-white" />,
        <SiExpress key="express" className="h-4 w-4 text-white" />,
        <SiMysql key="mongo" className="h-4 w-4 text-white" />,
      ],
      link: "/project/simpsons-api",
    },
    {
      id: 5,
      title: "Kaizen Physiotherapy",
      des: "Architecting and implementing a web app using server-side rendering and static site generation for optimal performance",
      img: "/p1.svg",
      icons: [
        <SiTypescript key="ts" className="h-4 w-4 text-white" />,
        <FaReact key="react" className="h-4 w-4 text-white" />,
        <SiNextdotjs key="next" className="h-4 w-4 text-white" />,
        <SiJest key="jest" className="h-4 w-4 text-white" />,
        <SiTailwindcss key="tailwind" className="h-4 w-4 text-white" />,
      ],
      link: "/project/kaizen-physiotherapy",
    },
    {
      id: 6,
      title: "PathFinder",
      des: "Built an interactive route-mapping web app that enables users to draw custom paths for running, hiking, and cycling.",
      img: "/p1.svg",
      icons: [
        <SiTypescript key="ts" className="h-4 w-4 text-white" />,
        <FaReact key="react" className="h-4 w-4 text-white" />,
        <SiOpenlayers key="openlayers" className="h-4 w-4 text-white" />,
        <SiJest key="jest" className="h-4 w-4 text-white" />,
        <SiTailwindcss key="tailwind" className="h-4 w-4 text-white" />,
      ],
      link: "/project/pathfinder",
    },
  ];
  return (
    <section id="view-all-projects" className="md:py-16 top-10 py-12">
      <div className="wrapper">
        <div className="pb-12">
          <h1 className="font-bold text-center md:text-6xl text-4xl">
            Recent Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-20 ">
          {projectContent.map((item) => (
            <PinContainer key={item.id} title={item.title} href={item.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]  sm:w-[30rem] md:w-[20rem]  lg:w-[18rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {item.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className=" text-slate-300">{item.des}</span>
                </div>
                <div className="flex py-2 gap-3">{item.icons}</div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
