import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { FAQSection } from "./FAQSection";
import { AboutPreview } from "./AboutPreview";
import { HomeContainer, HeroSection } from "./styled";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage />
        <HeroContent />
      </HeroSection>
      <AboutPreview />
      <FAQSection />
    </HomeContainer>
  );
};
