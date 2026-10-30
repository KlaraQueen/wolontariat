import React from "react";
import { ArrowRight, Heart, Sparkles, UsersRound } from "lucide-react";
import { aboutData } from "../../data/aboutData";
import { AboutTile } from "./AboutTile";
import {
  AboutPreviewWrapper,
  PreviewHeader,
  PreviewEyebrow,
  PreviewTitle,
  PreviewDescription,
  AboutTileGrid,
  MoreAboutLink,
} from "./styled";

const valueIcons = { heart: Heart, users: UsersRound, sparkles: Sparkles };

export const AboutPreview = () => (
  <AboutPreviewWrapper aria-labelledby="home-about-heading">
    <PreviewHeader>
      <PreviewEyebrow>Łączy nas chęć pomagania</PreviewEyebrow>
      <PreviewTitle id="home-about-heading">
        Społeczność, w której jest miejsce dla każdego
      </PreviewTitle>
      <PreviewDescription>
        Wierzymy w bliskość, współpracę i pomoc dopasowaną do możliwości.
      </PreviewDescription>
    </PreviewHeader>
    <AboutTileGrid>
      {aboutData.values.map((value) => (
        <AboutTile key={value.id} value={value} Icon={valueIcons[value.icon]} />
      ))}
    </AboutTileGrid>
    <MoreAboutLink to="/o-nas">
      Poznaj nas bliżej <ArrowRight size={18} aria-hidden="true" />
    </MoreAboutLink>
  </AboutPreviewWrapper>
);
