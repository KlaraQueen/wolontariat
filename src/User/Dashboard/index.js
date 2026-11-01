import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { DashboardWrapper, MainContent, WelcomeCard } from "./styled";

export const Dashboard = () => {
  const { user } = useAuth0();

  return (
    <DashboardWrapper>
      <MainContent>
        <WelcomeCard>
          <h1>Witaj, {user?.name || user?.email}!</h1>
          <p>
            Jesteś pomyślnie zalogowany do <strong>wolontariatapp.pl</strong>.
          </p>
          <p>
            To jest Twój główny pulpit. Stąd będziemy przechodzić do kalendarza
            kwest oraz dokumentów.
          </p>
        </WelcomeCard>
      </MainContent>
    </DashboardWrapper>
  );
};
