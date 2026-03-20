import React from "react";
import Hero from "@components/Hero";
import ScrollRevealText from "./Components/ScrollText";
import CasesGrid from "./Components/CasesGrid";
import ScrollMarquee from "./Components/ScrollMarque";
import About from "./Components/About";
import Faq from "./Components/Faq";

function page() {
  return (
    <>
      <Hero />
      <ScrollRevealText />
      <CasesGrid />
      <ScrollMarquee />
      <About />
      <Faq />
    </>
  );
}

export default page;
