// heroText.jsx
"use client";
import { useState } from "react";

type People = {
  Recruiter: string;
  Engineer: string;
  Designer: string;
};

const people: People = {
  Recruiter:
    "Full Stack Developer specializing in Javascript, Typescript, React, Next.js, Node.js, SQL and Vercel. My current interests are Remix, Jest, Playwright.4 years of commercial experience working in fast-paced environments and building front-end and back-end web applications that have served over 300,000 users, focusing on user experience and optimization, with a strong eye for clean code and testing.",
  Engineer:
    "01000110 01110101 01101100 01101100 00100000 01010011 01110100 01100001 01100011 01101011 00101100 00100000 01001010 01110011 00101100 00100000 01010100 01110011 00101100 00100000 01010010 01100101 01100001 01100011 01110100 00101100 00100000 01001110 01100101 01111000 01110100 00101100 00100000 01001110 01101111 01100100 01100101 00101100 00100000 01000101 01111000 01110000 01110010 01100101 01110011 01110011 00101100 00100000 01010011 01010001 01001100 00101100 00100000 01101001 00100000 01101100 01100101 01100001 01110010 01101110 00100000 01100110 01100001 01110011 01110100",
  Designer:
    "Work closely with design teams through Figma or other platforms, translating visual concepts into functional code while maintaining regular communication. Provide technical feedback on design feasibility while respecting creative vision. I prioritize pixel-perfect execution to deliver exceptional user experiences aligned with design specifications",
};

const HeroText = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Recruiter");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Buttons container */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-4">
        {Object.entries(people).map(([role]) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`font-semibold text-lg transition-colors ${
              selectedRole === role
                ? "underline text-white shadow-lg"
                : "text-gray-500"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Description container */}
      <div className="text-center">
        {Object.entries(people).map(([role, description]) => (
          <div
            key={role}
            className={`transition-opacity duration-300 ${
              selectedRole === role
                ? "opacity-100"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            {selectedRole === role && (
              <p className="text-gray-400 max-w-md md:max-w-xl mx-auto">
                {description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
