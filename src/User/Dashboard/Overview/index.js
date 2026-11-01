import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { WelcomeCard } from "../styled";
import { OverviewEyebrow, OverviewCopy } from "./styled";

export const DashboardOverview = () => {
  const { user } = useAuth0();
  const displayName = user?.given_name || user?.name || user?.email || "Wolontariuszu";

  return (
    <WelcomeCard>
      <OverviewEyebrow>Twój panel</OverviewEyebrow>
      <h1>Witaj, {displayName}!</h1>
      <OverviewCopy>
        Jesteś pomyślnie zalogowany do <strong>wolontariatapp.pl</strong>.
        Tutaj znajdziesz informacje o swoim wolontariacie, harmonogramie i dokumentach.
      </OverviewCopy>
    </WelcomeCard>
  );
};
