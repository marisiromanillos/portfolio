import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";

// Define a type for color values
type ColorValue = string | Record<string, string>;

// Flatten color palette utility
const flattenColorPalette = (colors: Record<string, ColorValue>) => {
  if (!colors || typeof colors !== "object") return {};

  return Object.assign(
    {},
    ...Object.entries(colors).flatMap(([color, values]) => {
      if (typeof values === "string") {
        return [{ [color]: values }];
      }
      if (values && typeof values === "object") {
        return Object.entries(values as Record<string, string>).map(
          ([key, value]) => ({
            [color + (key === "DEFAULT" ? "" : `-${key}`)]: value,
          })
        );
      }
      return [];
    })
  );
};

// SVG to Data URI utility
const svgToDataUri = (svg: string) => {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Plugin to add color variables
const addVariablesForColors = plugin(({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars as Record<string, string>,
  });
});

// Plugin to add the .wrapper component
const wrapperPlugin = plugin(({ addComponents }) => {
  addComponents({
    ".wrapper": {
      maxWidth: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "15px",
      paddingRight: "15px",
      width: "100%",

      "@screen md": {
        maxWidth: "calc(100% - 40px)",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      "@screen lg": {
        maxWidth: "calc(100% - 60px)",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      "@screen 2xl": {
        maxWidth: "1325px",
        paddingLeft: "3.906rem",
        paddingRight: "3.906rem",
      },
    },
  });
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hotPink: "#FF1FF4",
      },
    },
  },
  plugins: [
    animate,
    addVariablesForColors,
    wrapperPlugin,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    }),
  ],
};

export default config;
