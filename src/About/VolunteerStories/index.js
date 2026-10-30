import React from "react";
import { MapPin, Sparkles } from "lucide-react";
import { aboutData } from "../../data/aboutData";
import { VolunteerCard } from "./VolunteerCard";
import {
  StoriesSection,
  StoriesHeading,
  StoriesTitle,
  StoriesIntro,
  StoriesGrid,
  StoriesDisclosure,
} from "./styled";

export const VolunteerStories = () => (
  <StoriesSection aria-labelledby="volunteer-stories-title">
    <StoriesHeading>
      <StoriesTitle id="volunteer-stories-title">
        Nasi wolontariusze
      </StoriesTitle>
      <StoriesIntro>
        Za każdą pomocą stoi człowiek. Poznaj przykładowe głosy naszej
        społeczności.
      </StoriesIntro>
    </StoriesHeading>
    <StoriesGrid>
      {aboutData.volunteerStories.map((story) => (
        <VolunteerCard
          key={story.id}
          story={story}
          MapPinIcon={MapPin}
          SparklesIcon={Sparkles}
        />
      ))}
    </StoriesGrid>
    <StoriesDisclosure>{aboutData.storiesNote}</StoriesDisclosure>
  </StoriesSection>
);
