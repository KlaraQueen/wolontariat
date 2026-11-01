import React from "react";
import { SectionPanel, SectionTitle, SectionDescription } from "./styled";

export const DashboardSectionPage = ({ title, description }) => (
  <SectionPanel>
    <SectionTitle>{title}</SectionTitle>
    <SectionDescription>{description}</SectionDescription>
  </SectionPanel>
);
