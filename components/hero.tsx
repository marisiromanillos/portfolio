import HeroText from "./heroText";
import SplineScene from "./splineScene";

const Hero = () => {
  return (
    <main className="py-16">
      <div>
        <HeroText />
      </div>

      <div className="mt-[-150px] h-screen">
        <SplineScene />
      </div>
    </main>
  );
};

export default Hero;
