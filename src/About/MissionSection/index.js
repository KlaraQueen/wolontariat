import React from "react";
import { HeartHandshake } from "lucide-react";
import { aboutData } from "../../data/aboutData";
import {
  MissionSectionWrapper,
  MissionVisual,
  VisualIcon,
  VisualLabel,
  MissionCopy,
  MissionEyebrow,
  MissionHeading,
  MissionParagraph,
  MissionNote,
} from "./styled";

export const MissionSection = () => (
  <MissionSectionWrapper>
    <MissionVisual aria-hidden="true">
      <VisualIcon>
        <HeartHandshake size={58} strokeWidth={1.5} />
      </VisualIcon>
      <VisualLabel>Razem dla dobra</VisualLabel>
    </MissionVisual>
    <MissionCopy>
      <MissionEyebrow>{aboutData.mission.eyebrow}</MissionEyebrow>
      <MissionHeading>{aboutData.mission.title}</MissionHeading>
      {aboutData.mission.paragraphs.map((paragraph) => (
        <MissionParagraph key={paragraph}>{paragraph}</MissionParagraph>
      ))}
      <MissionNote>{aboutData.mission.note}</MissionNote>
    </MissionCopy>
  </MissionSectionWrapper>
);
