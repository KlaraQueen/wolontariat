import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { dashboardData } from "../../../data/dashboardData";
import { ProfileCard } from "./ProfileCard";
import { StatsSection } from "./StatsSection";
import { QuickActions } from "./QuickActions";
import { NextEventCard } from "./NextEventCard";
import { ActivitySection } from "./ActivitySection";
import { CoordinatorNotice } from "./CoordinatorNotice";
import {
  OverviewWrapper,
  OverviewHeader,
  OverviewEyebrow,
  OverviewTitle,
  OverviewLead,
  OverviewColumns,
  OverviewMainColumn,
  OverviewAside,
} from "./styled";

export const DashboardOverview = () => {
  const { user } = useAuth0();
  const displayName = user?.given_name || user?.name || "Wolontariuszu";

  return (
    <OverviewWrapper>
      <OverviewHeader>
        <OverviewEyebrow>Panel wolontariusza</OverviewEyebrow>
        <OverviewTitle>Centrum dowodzenia</OverviewTitle>
        <OverviewLead>
          Dzień dobry, {displayName}. Tutaj znajdziesz najważniejsze informacje
          o swoim wolontariacie i kolejnych krokach.
        </OverviewLead>
      </OverviewHeader>

      <OverviewColumns>
        <OverviewAside>
          <ProfileCard user={user} status={dashboardData.status} />
          <CoordinatorNotice notice={dashboardData.notice} />
        </OverviewAside>

        <OverviewMainColumn>
          <StatsSection stats={dashboardData.stats} />
          <NextEventCard event={dashboardData.nextEvent} />
          <ActivitySection activities={dashboardData.activities} />
        </OverviewMainColumn>
      </OverviewColumns>

      <QuickActions />
    </OverviewWrapper>
  );
};
