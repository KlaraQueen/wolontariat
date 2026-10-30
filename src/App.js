import React from "react";
import { Routes, Route } from "react-router-dom";
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </MainContent>

      <Footer />
    </AppWrapper>
  );
}

export default App;
