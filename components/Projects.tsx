"use client";
import { PinContainer } from "./ui/3Dpin";

const Projects = () => {
  const projectContent = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 3,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 4,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 5,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 6,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
  ];
  return (
    <section className="md:py-16  py-12">
      <div className="wrapper">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center  sm:gap-20 gap-20 ">
          {projectContent.map((item) => (
            <PinContainer key={item.id} title={item.title} href={item.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[21rem] sm:w-[30rem] md:w-[25rem]  lg:w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {item.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.des}</span>
                </div>
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
