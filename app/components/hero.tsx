import HeroText from "./heroText";
import SplineScene from "./splineScene";

const Hero = () => {
  return (
    <main className="pt-12 md:h-svh relative overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroText />
        </div>
      </div>
      <div className="h-full pt-14 md:pt-0 w-full">
        <SplineScene />
      </div>
    </main>
  );
};

export default Hero;
