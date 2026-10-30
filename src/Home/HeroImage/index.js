import React from "react";
import { homeData } from "../../data/homeData";
import { ImageWrapper, StyledImage } from "./styled";

export const HeroImage = () => {
  return (
    <ImageWrapper>
      <StyledImage src={homeData.hero.imageUrl} alt={homeData.hero.imageAlt} />
    </ImageWrapper>
  );
};
