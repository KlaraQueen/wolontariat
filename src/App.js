import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { Home } from "./Home";
import { AppWrapper, MainContent } from "./styled";

function App() {
  return (
    <AppWrapper>
      <Navigation />

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
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
