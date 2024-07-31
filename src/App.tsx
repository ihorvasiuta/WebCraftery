import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import HomePage from "./components/pages/homepage";
import ElementsPage from "./components/pages/elementspage";
import InspirationsPage from "./components/pages/inspirationspage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/elements" element={<ElementsPage />} />
          <Route path="/elements/:elementId" element={<ElementsPage />} />
          <Route path="/inspirations" element={<InspirationsPage />} />
          <Route path="/usage" element={"<UsagePage />"} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
