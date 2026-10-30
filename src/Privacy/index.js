import React from "react";
import { privacyData } from "../data/privacyData";
import { PrivacyWrapper, PrivacyTitle, PrivacyText } from "./styled";

export const Privacy = () => {
  return (
    <PrivacyWrapper>
      <PrivacyTitle>{privacyData.title}</PrivacyTitle>
      <PrivacyText>{privacyData.content}</PrivacyText>
    </PrivacyWrapper>
  );
};
