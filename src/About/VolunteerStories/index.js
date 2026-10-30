import React from "react";
import { aboutData } from "../../data/aboutData";
import { VolunteerCard } from "./VolunteerCard";
import {
  StoriesSection,
  StoriesHeading,
  StoriesTitle,
  StoriesIntro,
  StoriesGrid,
} from "./styled";

export const VolunteerStories = () => (
  <StoriesSection aria-labelledby="volunteer-stories-title">
    <StoriesHeading>
      <StoriesTitle id="volunteer-stories-title">
        Nasi wolontariusze
      </StoriesTitle>
      <StoriesIntro>
        Za każdą pomocą stoi człowiek. Poznaj głosy naszej społeczności.
      </StoriesIntro>
    </StoriesHeading>
    <StoriesGrid>
      {aboutData.volunteerStories.map((story) => (
        <VolunteerCard key={story.id} story={story} />
      ))}
    </StoriesGrid>
  </StoriesSection>
);
