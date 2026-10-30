import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {
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
