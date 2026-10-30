import React from "react";
import { Link } from "react-router-dom";
import { StartWrapper } from "./styled";

export const Start = () => {
  return (
    <StartWrapper>
      <Link to="/">Start</Link>
    </StartWrapper>
  );
};