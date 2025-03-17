"use client";

import { DiHtml5, DiJavascript1 } from "react-icons/di";
import {
  SiJest,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaReact, FaNode } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="wrapper mt-10 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl my-4 font-extrabold">FULL STACK DEVELOPER</h1>
        <p className="text-base text-slate-300 max-w-2xl mx-auto">
          Full Stack Developer with 4+ years of commercial experience building
          optimized, user-focused web applications serving 300,000+ users.
          Confident using JavaScript, TypeScript, React, Next.js, Node.js, SQL,
          and Jest for testing. Experienced at delivering scalable front-end and
          back-end solutions in fast-paced environments, with a strong focus on
          clean code, performance, and collaboration. Good self-starter with
          experience working in small teams or being the only member of the
          engineering team.
        </p>
        <div className="flex justify-center gap-2 flex-wrap items-center mt-4">
          <DiJavascript1 className="h-8 w-8 p-1 rounded-full bg-yellow-500 text-white" />
          <SiTypescript className="h-8 w-8 p-1 rounded-full bg-blue-700 text-white" />
          <FaReact className="h-8 w-8 p-1 rounded-full bg-cyan-500 text-white" />
          <SiNextdotjs className="h-8 w-8 p-1 rounded-full bg-black text-white" />
          <SiJest className="h-8 w-8 p-1 rounded-full bg-red-600 text-white" />
          <SiTailwindcss className="h-8 w-8 p-1 rounded-full bg-teal-500 text-white" />
          <SiGooglemaps className="h-8 w-8 p-1 rounded-full bg-green-500 text-white" />
          <DiHtml5 className="h-8 w-8 p-1 rounded-full bg-orange-500 text-white" />
          <DiSass className="h-8 w-8 p-1 rounded-full bg-pink-500 text-white" />
          <TbApi className="h-8 w-8 p-1 rounded-full bg-purple-500 text-white" />
          <FaNode className="h-8 w-8 p-1 rounded-full bg-green-600 text-white" />
          <SiExpress className="h-8 w-8 p-1 rounded-full bg-gray-800 text-white" />
          <SiMysql className="h-8 w-8 p-1 rounded-full bg-blue-600 text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
