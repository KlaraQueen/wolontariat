import React from "react";
import { Link } from "react-router-dom";
import { FAQItem } from "./styled";

export const FAQ = () => {
  return (
    <FAQItem>
      <Link to="/najczesciej-zadawane-pytania">Strefa Pytań</Link>
    </FAQItem>
  );
};
