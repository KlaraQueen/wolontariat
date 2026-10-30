import React from "react";
import { Quote } from "lucide-react";
import {
  StoryCard,
  StoryMeta,
  StoryName,
  StoryLocation,
  StoryQuote,
  StoryTenure,
} from "./styled";

export const VolunteerCard = ({ story, MapPinIcon, SparklesIcon }) => (
  <StoryCard>
    <Quote className="quote-mark" size={22} aria-hidden="true" />
    <StoryMeta>
      <StoryName>{story.name}</StoryName>
      <StoryLocation>
        <MapPinIcon size={14} aria-hidden="true" />
        {story.city}
      </StoryLocation>
    </StoryMeta>
    <StoryQuote>„{story.quote}”</StoryQuote>
    <StoryTenure>
      <SparklesIcon size={14} aria-hidden="true" />
      {story.since}
    </StoryTenure>
  </StoryCard>
);
