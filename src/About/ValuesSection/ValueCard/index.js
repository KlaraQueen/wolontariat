import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  ValueCardWrapper,
  ValueIcon,
  ValueTitle,
  ValueDescription,
} from "./styled";

export const ValueCard = ({ value, Icon }) => (
  <ValueCardWrapper>
    <ValueIcon aria-hidden="true">
      <Icon size={24} strokeWidth={1.8} />
    </ValueIcon>
    <ArrowUpRight className="corner-icon" size={19} aria-hidden="true" />
    <ValueTitle>{value.title}</ValueTitle>
    <ValueDescription>{value.description}</ValueDescription>
  </ValueCardWrapper>
);
