import React from "react";
import { homeData } from "../../data/homeData";
import { ContentWrapper, Title, Description, CTAButton } from "./styled";

export const HeroContent = () => {
  return (
    <ContentWrapper>
      <Title>{homeData.hero.title}</Title>
      <Description>{homeData.hero.description}</Description>
      <CTAButton to="/o-nas">{homeData.hero.buttonText}</CTAButton>
    </ContentWrapper>
  );
};
