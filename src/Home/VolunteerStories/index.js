import React from "react";
import { Link } from "react-router-dom";
import { aboutData } from "../../data/aboutData";
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

const featuredStories = aboutData.volunteerStories.slice(0, 3);

export const VolunteerStories = () => (
  <StoriesSection aria-labelledby="home-volunteer-stories-title">
    <StoriesHeader>
      <StoriesEyebrow>Za każdą pomocą stoi człowiek</StoriesEyebrow>
      <StoriesTitle id="home-volunteer-stories-title">
        Poznaj naszych wolontariuszy
      </StoriesTitle>
      <StoriesIntro>
        Różne miasta, historie i codzienność — łączy nas chęć bycia obok drugiego
        człowieka.
      </StoriesIntro>
    </StoriesHeader>

    <StoriesGrid>
      {featuredStories.map((story) => (
        <VolunteerTile key={story.id} story={story} />
      ))}
    </StoriesGrid>

    <StoriesFooter>
      <StoriesLink as={Link} to="/o-nas">
        Poznaj całą naszą społeczność
        <StoriesArrow aria-hidden="true" />
      </StoriesLink>
    </StoriesFooter>
  </StoriesSection>
);
