import React from "react";
import { Link } from "react-router-dom";
import { volunteerStoriesData } from "../../data/volunteerStoriesData";
import { VolunteerCard } from "./VolunteerCard";
import {
  StoriesSection,
  StoriesHeading,
  StoriesTitle,
  StoriesIntro,
  StoriesGrid,
  StoriesLink,
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
      {volunteerStoriesData.slice(0, 3).map((story) => (
        <VolunteerCard key={story.id} story={story} />
      ))}
    </StoriesGrid>
    <StoriesLink as={Link} to="/wolontariusze">
      Zobacz wszystkich wolontariuszy
    </StoriesLink>
  </StoriesSection>
);
