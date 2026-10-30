import React from "react";
import { footerData } from "../../data/footerData";
import { CopyrightWrapper } from "./styled";

export const Copyright = () => {
  return <CopyrightWrapper>{footerData.copyrightText}</CopyrightWrapper>;
};
