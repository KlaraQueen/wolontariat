import React from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { JoinSectionWrapper, JoinIcon, JoinTitle, JoinDescription, JoinLink } from "./styled";

export const JoinSection = () => (
  <JoinSectionWrapper>
    <JoinIcon aria-hidden="true">
      <HeartHandshake size={30} strokeWidth={1.7} />
    </JoinIcon>
    <JoinTitle>Masz w sobie chęć pomagania?</JoinTitle>
    <JoinDescription>
      Zrób pierwszy krok i sprawdź, jak możesz zaangażować się w wolontariat.
    </JoinDescription>
    <JoinLink to="/najczesciej-zadawane-pytania">
      Zobacz, jak zacząć
      <ArrowRight size={18} aria-hidden="true" />
    </JoinLink>
  </JoinSectionWrapper>
);
