import React from "react";
import { termsData } from "../data/termsData";
import { TermsWrapper, TermsTitle, TermsText } from "./styled";

export const Terms = () => {
  return (
    <TermsWrapper>
      <TermsTitle>{termsData.title}</TermsTitle>
      <TermsText>{termsData.content}</TermsText>
    </TermsWrapper>
  );
};
