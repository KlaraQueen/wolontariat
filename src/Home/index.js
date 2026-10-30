import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { FAQSection } from "./FAQSection";
import { AboutPreview } from "./AboutPreview";
import { VolunteerStories } from "./VolunteerStories";
import { HomeContainer, HeroSection } from "./styled";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage />
        <HeroContent />
      </HeroSection>
      <AboutPreview />
      <VolunteerStories />
      <FAQSection />
    </HomeContainer>
  );
};
