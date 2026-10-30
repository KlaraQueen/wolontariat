import React from "react";
import { Heart, Sparkles, UsersRound } from "lucide-react";
import { aboutData } from "../../data/aboutData";
import { ValueCard } from "./ValueCard";
import {
  ValuesSectionWrapper,
  ValuesHeader,
  ValuesEyebrow,
  ValuesHeading,
  ValuesIntro,
  ValuesGrid,
} from "./styled";

const valueIcons = {
  heart: Heart,
  users: UsersRound,
  sparkles: Sparkles,
};

export const ValuesSection = () => (
  <ValuesSectionWrapper>
    <ValuesHeader>
      <ValuesEyebrow>To, co nas prowadzi</ValuesEyebrow>
      <ValuesHeading>Pomaganie zaczyna się od wartości</ValuesHeading>
      <ValuesIntro>
        Chcemy, aby każdy mógł zaangażować się w sposób, który jest bliski jego
        sercu i możliwy do zrealizowania.
      </ValuesIntro>
    </ValuesHeader>
    <ValuesGrid>
      {aboutData.values.map((value) => (
        <ValueCard key={value.id} value={value} Icon={valueIcons[value.icon]} />
      ))}
    </ValuesGrid>
  </ValuesSectionWrapper>
);
