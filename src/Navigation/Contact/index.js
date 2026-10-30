import React from "react";
import { Link } from "react-router-dom";
import { ContactWrapper } from "./styled";

export const Contact = () => {
  return (
    <ContactWrapper>
      <Link to="/kontakt">Kontakt</Link>
    </ContactWrapper>
  );
};