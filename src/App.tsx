import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import HomePage from "./components/pages/homepage";
import ElementsPage from "./components/pages/elementspage";
import BuilderPage from "./components/pages/builderpage";
import InspirationsPage from "./components/pages/inspirationspage";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/elements" element={<ElementsPage />} />
          <Route path="/elements/:elementId" element={<ElementsPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/inspirations" element={<InspirationsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
