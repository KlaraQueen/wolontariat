import React from "react";
import {
  Tile,
  TileTop,
  QuoteIcon,
  PersonInitial,
  PersonDetails,
  PersonName,
  PersonCity,
  LocationIcon,
  QuoteText,
  TileTenure,
  TenureIcon,
} from "./styled";

export const VolunteerTile = ({ story }) => (
  <Tile>
    <TileTop>
      <PersonInitial aria-hidden="true">{story.name.slice(0, 1)}</PersonInitial>
      <PersonDetails>
        <PersonName>{story.name}</PersonName>
        <PersonCity>
          <LocationIcon aria-hidden="true" />
          {story.city}
        </PersonCity>
      </PersonDetails>
      <QuoteIcon aria-hidden="true" />
    </TileTop>
    <QuoteText>„{story.quote}”</QuoteText>
    <TileTenure>
      <TenureIcon aria-hidden="true" />
      {story.since}
    </TileTenure>
  </Tile>
);
