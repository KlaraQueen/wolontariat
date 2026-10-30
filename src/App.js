import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { AppWrapper, MainContent, HomeWrapper } from "./styled";

function App() {
  return (
    <AppWrapper>
      <Navigation />

      <MainContent>
        <Routes>
          <Route path="/" element={<HomeWrapper>Strona Główna</HomeWrapper>} />
          <Route path="/polityka-prywatnosci" element={<Privacy />} />
          <Route path="/regulamin" element={<Terms />} />
          <Route path="/privacy" element={<Navigate to="/polityka-prywatnosci" replace />} />
          <Route path="/terms" element={<Navigate to="/regulamin" replace />} />
        </Routes>
      </MainContent>

      <Footer />
    </AppWrapper>
  );
}

export default App;
