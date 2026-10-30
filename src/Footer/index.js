import React from "react";
import { FooterWrapper } from "./styled";
import { Copyright } from "./Copyright";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks />
      <Copyright />
    </FooterWrapper>
  );
};
