import React from "react";
import {
  StoryCard,
  QuoteIcon,
  StoryMeta,
  StoryName,
  StoryLocation,
  LocationIcon,
  StoryQuote,
  StoryTenure,
  TenureIcon,
} from "./styled";

export const VolunteerCard = ({ story }) => (
  <StoryCard>
    <QuoteIcon aria-hidden="true" />
    <StoryMeta>
      <StoryName>{story.name}</StoryName>
      <StoryLocation>
        <LocationIcon aria-hidden="true" />
        {story.city}
      </StoryLocation>
    </StoryMeta>
    <StoryQuote>„{story.quote}”</StoryQuote>
    <StoryTenure>
      <TenureIcon aria-hidden="true" />
      {story.since}
    </StoryTenure>
  </StoryCard>
);
