import React from "react";
import Hero from "@components/Hero";
import ScrollRevealText from "./Components/ScrollText";
import CasesGrid from "./Components/CasesGrid";
import ScrollMarquee from "./Components/ScrollMarque";
import About from "./Components/About";
import Faq from "./Components/Faq";
import JsonLdFaq from "./Components/JsonLdFaq";

function page() {
  return (
    <>
      <JsonLdFaq
        questions={[
          { questionKey: "home.faq.question1", answerKey: "home.faq.answer1" },
          { questionKey: "home.faq.question2", answerKey: "home.faq.answer2" },
          { questionKey: "home.faq.question3", answerKey: "home.faq.answer3" },
          { questionKey: "home.faq.question4", answerKey: "home.faq.answer4" },
        ]}
      />
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
