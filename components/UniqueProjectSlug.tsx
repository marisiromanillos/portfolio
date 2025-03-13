"use client";

import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import {
  projectContent,
  isValidSlug,
  defaultContent,
} from "@/app/data/projectData";

// Define the props interface with the correct type
interface UniqueProjectSlugProps {
  slug: string; // Keep as string since it comes from URL params
}

const UniqueProjectSlug: React.FC<UniqueProjectSlugProps> = ({ slug }) => {
  // Use the project if slug is valid, otherwise use default content
  const project = isValidSlug(slug) ? projectContent[slug] : defaultContent;

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {project.items.map((item, index) => (
          <div key={index} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  height="1000"
                  width="1000"
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
