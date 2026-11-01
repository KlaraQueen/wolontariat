import React from "react";
import { StatCard } from "./StatCard";
import { StatsGrid, StatsHeading } from "./styled";

export const StatsSection = ({ stats }) => (
  <section aria-labelledby="dashboard-stats-title">
    <StatsHeading id="dashboard-stats-title">Twoje podsumowanie</StatsHeading>
    <StatsGrid>
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </StatsGrid>
  </section>
);
