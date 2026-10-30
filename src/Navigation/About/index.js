import React from "react";
import { Link } from "react-router-dom";
import { AboutWrapper } from "./styled";

export const About = () => {
  return (
    <AboutWrapper>
      <Link to="/about">O nas</Link>
    </AboutWrapper>
  );
};