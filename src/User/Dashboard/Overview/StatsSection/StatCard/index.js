import React from "react";
import { CalendarDays, Clock3, HeartHandshake } from "lucide-react";
import {
  StatCardWrapper,
  StatTop,
  StatIcon,
  StatLabel,
  StatValue,
  StatDetail,
} from "./styled";

const statIcons = {
  clock: Clock3,
  heart: HeartHandshake,
  calendar: CalendarDays,
};

export const StatCard = ({ stat }) => {
  const Icon = statIcons[stat.icon] || Clock3;

  return (
    <StatCardWrapper>
      <StatTop>
        <StatLabel>{stat.label}</StatLabel>
        <StatIcon><Icon aria-hidden="true" /></StatIcon>
      </StatTop>
      <StatValue>{stat.value}</StatValue>
      <StatDetail>{stat.detail}</StatDetail>
    </StatCardWrapper>
  );
};
