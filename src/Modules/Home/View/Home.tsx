
import BrandIntro from "./BrandIntro";
import FeaturedWork from "./FeaturedWork";
import Hero from "./Hero";
import Outcomes from "./Outcomes";
import ProjectBundles from "./ProjectBundles";
import ProjectOutcome from "./ProjectOutcome";
import WorkWithUs from "./WorkWithUs";

//animasiya
import React, { useEffect } from 'react';
import AOS from 'aos';

const Home:React.FC = () => {
  useEffect(() => {
    AOS.refresh(); 
  }, []);
  return (
    <main className="home">
      <Hero />
      <BrandIntro />
      <ProjectBundles />
      <WorkWithUs />
      <FeaturedWork />
      <Outcomes />
      <ProjectOutcome />
    </main>
  );
};

export default Home;
