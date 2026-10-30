import React from "react";
import { ArrowRight, HandHeart, Heart, Sparkles } from "lucide-react";
import { aboutData } from "../../data/aboutData";
import {
  HeroSection,
  HeroCopy,
  Eyebrow,
  HeroTitle,
  HeroDescription,
  HeroActions,
  PrimaryLink,
  SecondaryLink,
  HeroArtwork,
  ArtworkCircle,
  MainIllustration,
  FloatingNote,
} from "./styled";

export const AboutHero = () => (
  <HeroSection>
    <HeroCopy>
      <Eyebrow>
        <Sparkles size={15} aria-hidden="true" />
        {aboutData.hero.eyebrow}
      </Eyebrow>
      <HeroTitle>{aboutData.hero.title}</HeroTitle>
      <HeroDescription>{aboutData.hero.description}</HeroDescription>
      <HeroActions>
        <PrimaryLink to="/najczesciej-zadawane-pytania">
          Poznaj nas lepiej
          <ArrowRight size={18} aria-hidden="true" />
        </PrimaryLink>
        <SecondaryLink to="/">Strona główna</SecondaryLink>
      </HeroActions>
    </HeroCopy>

    <HeroArtwork aria-label="Ilustracja symbolizująca wspólne pomaganie">
      <ArtworkCircle />
      <MainIllustration>
        <HandHeart size={104} strokeWidth={1.35} aria-hidden="true" />
        <Heart
          className="heart-accent"
          size={32}
          fill="currentColor"
          aria-hidden="true"
        />
      </MainIllustration>
      <FloatingNote className="note-top">
        <span className="note-icon">
          <Heart size={17} aria-hidden="true" />
        </span>
        <span>Pomoc ma znaczenie</span>
      </FloatingNote>
      <FloatingNote className="note-bottom">
        <span className="note-icon">
          <Sparkles size={17} aria-hidden="true" />
        </span>
        <span>Każdy może zacząć</span>
      </FloatingNote>
    </HeroArtwork>
  </HeroSection>
);
