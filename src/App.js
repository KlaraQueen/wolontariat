import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { Home } from "./Home";
import { FAQPage } from "./FAQ";
import { About } from "./About";
import { Volunteers } from "./Volunteers";
import { AppWrapper, MainContent } from "./styled";
import { ScrollManager } from "./ScrollManager";
import { DonationRibbon } from "./DonationRibbon";
import { Dashboard } from "./User/Dashboard";
import { DashboardOverview } from "./User/Dashboard/Overview";
import { DashboardSectionPage } from "./User/Dashboard/SectionPage";

const LegacyDashboardRedirect = () => {
  const { pathname } = useLocation();
  const dashboardPath = pathname.replace(/^\/dashboard/, "");

  return <Navigate to={`/user/dashboard${dashboardPath}`} replace />;
};

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Wystąpił błąd: {error.message}</div>;

  return (
    <AppWrapper>
      <ScrollManager />
      <Navigation />
      <DonationRibbon />

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/wolontariusze" element={<Volunteers />} />
          <Route path="/najczesciej-zadawane-pytania" element={<FAQPage />} />
          <Route path="/polityka-prywatnosci" element={<Privacy />} />
          <Route path="/regulamin" element={<Terms />} />
          <Route
            path="/user/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
            }
          >
            <Route index element={<DashboardOverview />} />
            <Route
              path="moj-wolontariat"
              element={
                <DashboardSectionPage
                  title="Mój wolontariat"
                  description="Tutaj znajdziesz informacje o swoim zaangażowaniu i działaniach wolontariackich."
                />
              }
            />
            <Route
              path="harmonogram"
              element={
                <DashboardSectionPage
                  title="Harmonogram i kwesty"
                  description="W tym miejscu pojawi się Twój harmonogram działań i zaplanowanych kwest."
                />
              }
            />
            <Route
              path="dokumenty"
              element={
                <DashboardSectionPage
                  title="Dokumenty"
                  description="Tutaj będą dostępne dokumenty związane z Twoim wolontariatem."
                />
              }
            />
            <Route
              path="ustawienia"
              element={
                <DashboardSectionPage
                  title="Ustawienia"
                  description="Ustawienia konta i preferencje użytkownika będą dostępne w tej sekcji."
                />
              }
            />
          </Route>
          <Route
            path="/dashboard"
            element={<Navigate to="/user/dashboard" replace />}
          />
          <Route path="/dashboard/*" element={<LegacyDashboardRedirect />} />
          <Route
            path="/privacy"
            element={<Navigate to="/polityka-prywatnosci" replace />}
          />
          <Route path="/terms" element={<Navigate to="/regulamin" replace />} />
        </Routes>
      </MainContent>

      <Footer />
    </AppWrapper>
  );
}

export default App;
