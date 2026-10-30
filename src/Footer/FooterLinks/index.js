import React from "react";
import { footerData } from "../../data/footerData";
import { LinksList, LinkItem, StyledLink } from "./styled";

export const FooterLinks = () => {
  return (
    <LinksList>
      {footerData.links.map((link, index) => (
        <LinkItem key={index}>
          <StyledLink to={link.path}>{link.label}</StyledLink>
        </LinkItem>
      ))}
    </LinksList>
  );
};
