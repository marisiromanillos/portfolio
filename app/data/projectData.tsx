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
  badge: string;
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
            <h2>Description</h2>
            <p>
              Sit duis est minim proident non nisi velit non consectetur. Esse
              adipisicing laboris consectetur enim ipsum reprehenderit eu
              deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure
              cupidatat incididunt incididunt enim magna id est qui sunt fugiat.
              Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui
              deserunt non reprehenderit dolore nisi velit exercitation Lorem
              qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit
              laborum nostrud fugiat voluptate do Lorem culpa officia sint
              labore. Tempor consectetur excepteur ut fugiat veniam commodo et
              labore dolore commodo pariatur.
            </p>
            <p>
              Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
              veniam in commodo id reprehenderit adipisicing. Proident duis
              exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
            </p>
            <p>
              Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
              reprehenderit deserunt amet laborum consequat adipisicing officia
              qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
              nostrud. Amet culpa officia aliquip deserunt veniam deserunt
              officia adipisicing aliquip proident officia sunt.
            </p>
          </>
        ),
        badge: "React",
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
        badge: "Next.js",
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
        badge: "Changelog",
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
        badge: "Node.js",
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
        badge: "Launch Week",
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
        badge: "Data",
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
        badge: "React",
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
        badge: "Mobile",
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
        badge: "Changelog",
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
        badge: "AI/ML",
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
        badge: "Changelog",
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
      badge: "404",
      image: "/example.webp",
    },
  ],
};

// Helper function to check if a string is a valid project slug
export const isValidSlug = (s: string): s is ProjectSlug =>
  Object.keys(projectContent).includes(s);
