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
            <h2 className="text-2xl text-hotPink font-semibold mb-4">
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
              Introducing Geolocation to improve user experience
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
            <p className="mb-4">
              These enhancements transformed the legacy system into a modern,
              user friendly tool, improving performance, eliminating API
              warnings, and delivering a more engaging experience through real
              time geolocation and address based search capabilities, which
              strengthen the relationship with the retailers and Swytch.
            </p>
            <h3 className="text-2xl text-hotPink font-semibold my-4">
              Migrating to Open Layers
            </h3>
            <p className="mb-4">
              Because of the high traffic the store locator had, the Google maps
              expenditure was continuesly increasing, so we decided to migrate
              to Open Layers.
            </p>
            <h3 className="font-semibold text-lg mb-4">
              Reducing Costs whilst keeping functionality
            </h3>
            <p className="mb-4">
              We chose OpenLayers because it is a free, open-source library that
              is highly scalable and customizable while remaining cost-free,
              enabling us to migrate our store locator and reduce costs from
              £3,000 to just £45 per month.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Plotting Pins with Vector Layers
            </h3>
            <p className="mb-4">
              To show stockists and the user&apos;s pins, we set up two layers
              using OpenLayers vector system.Each layer gets its own data source
              and a style with custom pin images from a config object. The
              stockist pins use one image, the user pin uses another, and we
              stack the user layer on top with a higher priority so it stands
              out. These layers sit over the OSM tiles, letting us drop pins
              wherever we need and update them on the fly—perfect for a locator
              that&apos;s got to keep up with changing store data.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Pulling in Stockist Data
            </h3>
            <p className="mb-4">
              The stockist info comes from a API call, grabbed as GeoJSON—a
              format OpenLayers eats up easily. It&apos;s a list of features
              with coordinates and details like store IDs and countries. We turn
              that data into map features, add them to the stockist layer, and
              give it a tiny delay to keep the rendering smooth. Then, we filter
              what&apos;s visible based on the map&apos;s current view, sorting
              them by distance from the center. This client-side approach keeps
              server costs low, and the GeoJSON ties right into the Swytch Bike
              setup, making it cheap and scalable.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Zooming to the Right Spot
            </h3>
            <p className="mb-4">
              To improve search functionality, we calculate the bounds of
              stockists in a specific country from the config and zoom the map
              to fit them, adding some padding and a smooth animation. It digs
              into the feature coordinates to figure out the min and max
              extents, then adjusts the view. There&apos;s also logic to find
              stockists near a given point—measuring distances with a library
              called Turf.js and zooms to either a group within 10 kilometers or
              the closest one.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Wiring Up Clicks and Movement
            </h3>
            <p className="mb-4">
              Interactivity comes from listening to map events. When the map
              moves—panning or zooming—we check what stockists are in view,
              accounting for the world wrapping around at the edges, and update
              a list and counter. Clicking a pin grabs its coordinates and
              details, pushing them to an Alpine.js store to pop up a modal.
              Clicking a stockist from a list does the same, syncing the map and
              UI. It&apos;s all tied together so users can poke around the map
              or list and get the same smooth experience.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Adding Geolocation and Search
            </h3>
            <p className="mb-4">
              We hooked into the browser&apos;s geolocation to grab the
              user&apos;s position, dropping a pin on the map and zooming to
              nearby stockists. For manual searches, we built an autocomplete
              box that hits Geoapify&apos;s API for address suggestions, showing
              them in a dropdown. Users can type, use arrow keys to pick, or hit
              enter, and it&apos;ll pin that spot on the map and zoom
              accordingly. There&apos;s a clear button to reset
              everything—wiping the pin and snapping back to the country view.
              It&apos;s simple but powerful, giving users two ways to find
              stores without overcomplicating things.
            </p>

            <h3 className="font-semibold text-lg mb-4">
              Keeping It Fast and Informative
            </h3>
            <p className="mb-4">
              To avoid lag, we debounce the search requests with a
              300-millisecond delay and sort stockists by distance using a
              built-in OpenLayers distance calculator. The number of visible
              stockists updates in an HTML counter for instant feedback. Turf.js
              helps with precise distance math despite the map&apos;s funky
              projection, keeping things snappy even with tons of pins.
              It&apos;s all about a smooth ride—scalable enough for hundreds of
              stockists without hiking up costs.
            </p>

            <h3 className="font-semibold text-lg mb-4">Wrapping It Up</h3>
            <p className="mb-4">
              This locator built with OpenLayers to save cash and scale up. It
              mixes vector pins, GeoJSON data, geolocation, and search into a
              system that&apos;s easy to use and quick to respond. The result? A
              tool that dropped costs big-time while staying flexible enough to
              tweak and grow—perfect for helping folks find the nearest Swytch
              Bike stockist without breaking a sweat.
            </p>
          </>
        ),
        badge: [
          "JavaScript",
          "PHP",
          "Google Maps API",
          "Turf.js",
          "Tailwind",
          "HTML5",
          "SCSS",
        ],
        image: "/storelocator.webp",
      },
    ],
  },
  "swytchbike-main-site": {
    items: [
      {
        title: "Front end development of the Swytch Bike main site",
        description: (
          <>
            <h2 className="text-2xl text-hotPink font-semibold mb-4">
              From Figma to Development
            </h2>
            <h3 className="font-semibold text-lg mb-4">Project Background</h3>
            <p className="mb-4">
              When I joined Swytch Bike, the company was undergoing a full
              redevelopment of their website. The existing site needed a modern
              overhaul to improve user experience (UX), boost search engine
              optimization (SEO), and establish a scalable, maintainable
              codebase. As a new team member, I was tasked with taking ownership
              of this redevelopment, collaborating with the design team, and
              ensuring the final product met both aesthetic and technical goals.
              One specific challenge was translating complex, dynamic design
              elements—like animated Bézier curves—into a fast, functional
              front-end without compromising performance.
            </p>
            <h3 className="font-semibold text-lg mb-4">Implementation</h3>
            <p className="mb-4">
              I began by holding in-depth discussions with the design team to
              fully understand their vision based on the Figma designs provided.
              I offered suggestions to enhance UX and SEO, ensuring the site
              would be both user-friendly and search-engine optimized. To
              streamline development, I built reusable components in JavaScript
              and PHP, reducing code repetition while adhering to high coding
              standards. This approach improved maintainability and scalability
              across the site.
            </p>
            <p className="mb-4">
              For the most exciting challenge—creating and animating Bézier
              lines—I took a leadership role in devising a solution. Using
              vanilla JavaScript, I crafted a lightweight implementation that
              balanced performance with a visually stunning front-end, avoiding
              heavier frameworks to keep the site fast and responsive.
            </p>
          </>
        ),
        badge: ["Javascript", "PHP", "HTML5", "SCSS", "Tailwind", "Figma"],
        image: "/swytch-mainsite.gif",
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
