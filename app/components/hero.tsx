import SplineScene from "./splineScene";

interface People {
  recruiter: string;
  developer: string;
  designer: string;
}

const people: People = {
  recruiter:
    "4 years Full stack developer, I have worked in agile enviroments and start ups, participating in discussions",
  developer:
    "4 years Full stack developer, I have worked in agile enviroments and start ups, participating in discussions ",
  designer:
    "4 years Full stack developer, I have worked in agile enviroments and start ups, participating in discussions",
};

const Hero = () => {
  return (
    <main>
      <SplineScene />
    </main>
  );
};

export default Hero;
