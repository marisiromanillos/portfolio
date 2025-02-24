// heroText.jsx
"use client";
import { useState } from "react";

interface People {
  Recruiter: string;
  Engineer: string;
  Designer: string;
}

const people: People = {
  Recruiter:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies lectus libero, tincidunt vehicula lacus malesuada nec. Cras ultricies lectin vehicula lacus malesuada nec.",
  Engineer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies lectin vehicula lacus malesuada nec. Cras ultricies lectin vehicula lacus malesuada nec.",
  Designer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies lectus libero, tincidunt vehicula lacus malesuada nec. Cras ultricies lectin vehicula lacus malesuada nec.",
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
              <p className="text-gray-600 max-w-md md:max-w-xl mx-auto">
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
