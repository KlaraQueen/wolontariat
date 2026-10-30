import React from "react";
import { Link } from "react-router-dom";
import { volunteerStoriesData } from "../../data/volunteerStoriesData";
import { VolunteerTile } from "./VolunteerTile";
import {
  StoriesSection,
  StoriesHeader,
  StoriesEyebrow,
  StoriesTitle,
  StoriesIntro,
  StoriesGrid,
  StoriesFooter,
  StoriesLink,
  StoriesArrow,
} from "./styled";

const featuredStories = volunteerStoriesData.slice(0, 3);

export const VolunteerStories = () => (
  <StoriesSection aria-labelledby="home-volunteer-stories-title">
    <StoriesHeader>
      <StoriesEyebrow>Za każdą pomocą stoi człowiek</StoriesEyebrow>
      <StoriesTitle id="home-volunteer-stories-title">
        Poznaj naszych wolontariuszy
      </StoriesTitle>
      b
      <StoriesIntro>
        Różne miasta, historie i codzienność — łączy nas chęć bycia obok
        drugiego człowieka.
      </StoriesIntro>
    </StoriesHeader>

    <StoriesGrid>
      {featuredStories.map((story) => (
        <VolunteerTile key={story.id} story={story} />
      ))}
    </StoriesGrid>

    <StoriesFooter>
      <StoriesLink as={Link} to="/wolontariusze">
        Poznaj wszystkich wolontariuszy
        <StoriesArrow aria-hidden="true" />
      </StoriesLink>
    </StoriesFooter>
  </StoriesSection>
);
