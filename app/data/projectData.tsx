import React from "react";

export type ProjectSlug =
  | "swytchbike-store-locator"
  | "swytchbike-main-site"
  | "swytch-tools-zendesk-app"
  | "simpsons-api"
  | "kaizen-physiotherapy"
  | "pathfinder";

export interface ProjectItem {
  title: string;
  description: React.ReactNode;
  badge: string[];
  image: string;
}

// Main ProjectContent type - now an array of ProjectItems
export interface ProjectContent {
  items: ProjectItem[];
}

// Project data
export const projectContent: Record<ProjectSlug, ProjectContent> = {
  "swytchbike-store-locator": {
    items: [
      {
        title: "Swytch Bike Store Locator",
        description: (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Enhanced Legacy Code
            </h2>
            <h3 className="font-semibold text-lg mb-4">
              Addressing Outdated Functionality
            </h3>
            <p className="mb-4">
              The original store locator, built with the Google Maps API, had
              become outdated, displaying warnings due to deprecated features in
              newer API versions. To resolve this, I upgraded the legacy
              JavaScript/PHP codebase, manually updating it to align with the
              latest Google Maps API standards, ensuring compatibility and
              eliminating errors.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Introducing Geolocation for Seamless User Experience
            </h3>
            <p className="mb-4">
              To enhance usability, I implemented a geolocation feature. Upon
              loading the app, it prompts the user for permission to access
              their location. Once granted, the map automatically centers on
              their position and leverages <strong>Turf.js</strong> to calculate
              the distance between the user&apos;s coordinates (latitude and
              longitude) and the nearest store, displaying the closest location
              instantly.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Adding Address Search with Distance Calculation
            </h3>
            <p className="mb-4">
              I further improved functionality by adding an address search
              feature. When a user inputs an address, the system converts it
              into coordinates and uses <strong>Turf.js</strong> to compute the
              distance to the nearest store. This provides users with precise,
              location-aware results, making store discovery faster and more
              intuitive.
            </p>

            <h3 className="font-semibold text-lg mb-4">Outcome</h3>
            <p>
              These enhancements transformed the legacy system into a modern,
              user-friendly tool, improving performance, eliminating API
              warnings, and delivering a more engaging experience through
              real-time geolocation and address-based search capabilities.
            </p>
          </>
        ),
        badge: [
          "JavaScript",
          "PHP",
          "OpenLayers",
          "Turf.js",
          "Tailwind",
          "HTML5",
          "SCSS",
        ],
        image: "/example.webp",
      },
      {
        title: "Building Interactive UI Components",
        description: (
          <>
            <p>
              Sit duis est minim proident non nisi velit non consectetur. Esse
              adipisicing laboris consectetur enim ipsum reprehenderit eu
              deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure
              cupidatat incididunt incididunt enim magna id est qui sunt fugiat.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
    ],
  },
  "swytchbike-main-site": {
    items: [
      {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor. Ullamco ut
              sunt consectetur sint qui qui do do qui do. Labore laborum culpa
              magna reprehenderit ea velit id esse adipisicing deserunt amet
              dolore. Ipsum occaecat veniam commodo proident aliqua id ad
              deserunt dolor aliquip duis veniam sunt.
            </p>
            <p>
              In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
              veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
              reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
              cillum ut mollit.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
      {
        title: "E-Commerce Platform Backend",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
    ],
  },
  "swytch-tools-zendesk-app": {
    items: [
      {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor. Ullamco ut
              sunt consectetur sint qui qui do do qui do. Labore laborum culpa
              magna reprehenderit ea velit id esse adipisicing deserunt amet
              dolore. Ipsum occaecat veniam commodo proident aliqua id ad
              deserunt dolor aliquip duis veniam sunt.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
      {
        title: "Data Visualization Dashboard",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor. Ullamco ut
              sunt consectetur sint qui qui do do qui do.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
    ],
  },
  "simpsons-api": {
    items: [
      {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
          <>
            <p>
              Sit duis est minim proident non nisi velit non consectetur. Esse
              adipisicing laboris consectetur enim ipsum reprehenderit eu
              deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure
              cupidatat incididunt incididunt enim magna id est qui sunt fugiat.
              Laboris do duis pariatur fugiat Lorem aute sit ullamco.
            </p>
            <p>
              Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
              veniam in commodo id reprehenderit adipisicing. Proident duis
              exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
      {
        title: "Mobile App for Fitness Tracking",
        description: (
          <>
            <p>
              Sit duis est minim proident non nisi velit non consectetur. Esse
              adipisicing laboris consectetur enim ipsum reprehenderit eu
              deserunt Lorem ut aliqua anim do.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
    ],
  },
  "kaizen-physiotherapy": {
    items: [
      {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor. Ullamco ut
              sunt consectetur sint qui qui do do qui do. Labore laborum culpa
              magna reprehenderit ea velit id esse adipisicing deserunt amet
              dolore.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
      {
        title: "AI-Powered Content Recommendation Engine",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
    ],
  },
  pathfinder: {
    items: [
      {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
          <>
            <p>
              Ex irure dolore veniam ex velit non aute nisi labore ipsum
              occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
              exercitation non voluptate qui aliquip esse tempor.
            </p>
          </>
        ),
        badge: ["React", "TypeScript"],
        image: "/example.webp",
      },
    ],
  },
};

// Export default content for when a slug isn't found
export const defaultContent: ProjectContent = {
  items: [
    {
      title: "Project Not Found",
      description: (
        <p>
          The requested project could not be found. Please check the URL and try
          again.
        </p>
      ),
      badge: ["React", "TypeScript"],
      image: "/example.webp",
    },
  ],
};

// Helper function to check if a string is a valid project slug
export const isValidSlug = (s: string): s is ProjectSlug =>
  Object.keys(projectContent).includes(s);
