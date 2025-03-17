"use client";

import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import {
  projectContent,
  isValidSlug,
  defaultContent,
  ProjectSlug,
} from "@/app/data/projectData";

// Define the props interface with the correct type
interface UniqueProjectSlugProps {
  slug: string; // Keep as string since it comes from URL params
}

const UniqueProjectSlug: React.FC<UniqueProjectSlugProps> = ({ slug }) => {
  // Use the project if slug is valid, otherwise use default content
  const project = isValidSlug(slug)
    ? projectContent[slug as ProjectSlug]
    : defaultContent;

  return (
    <TracingBeam className="px-6 mt-28">
      <div className="max-w-2xl mx-auto antialiased relative">
        {project.items.map((item, index) => (
          <div key={index} className="mb-10">
            <div className="flex md:p-0 p-2 flex-wrap md:gap-2 gap-1">
              {item.badge.map((badgeItem, badgeIndex) => (
                <span
                  key={badgeIndex}
                  className="bg-hotBlue text-white rounded-full text-sm w-fit px-4 py-1 mb-4"
                >
                  {badgeItem}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

            <div className="text-sm prose prose-sm">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                  unoptimized={item.image.endsWith(".gif")}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default UniqueProjectSlug;
