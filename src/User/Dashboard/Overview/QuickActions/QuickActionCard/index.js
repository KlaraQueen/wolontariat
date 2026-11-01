import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ActionCard, ActionIcon, ActionTitle, ActionDescription, ActionArrow } from "./styled";

export const QuickActionCard = ({ action }) => (
  <ActionCard as={Link} to={action.to}>
    <ActionIcon><action.Icon aria-hidden="true" /></ActionIcon>
    <ActionTitle>{action.title}</ActionTitle>
    <ActionDescription>{action.description}</ActionDescription>
    <ActionArrow aria-hidden="true"><ArrowUpRight /></ActionArrow>
  </ActionCard>
);
