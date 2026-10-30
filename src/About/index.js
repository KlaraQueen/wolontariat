import React from "react";
import { AboutHero } from "./AboutHero";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";
import { VolunteerStories } from "./VolunteerStories";
import { JoinSection } from "./JoinSection";
import { ContactSection } from "./ContactSection";
import { AboutPage } from "./styled";

export const About = () => (
  <AboutPage>
    <AboutHero />
    <MissionSection />
    <VolunteerStories />
    <ValuesSection />
    <JoinSection />
    <ContactSection />
  </AboutPage>
);
