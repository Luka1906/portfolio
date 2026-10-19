
import { useEffect, useState } from "react";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import Projects from "./components/ProjectSection/Projects";
import Loader from "./components/ui/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const landingTimer = setTimeout(() => {
      setShowLanding(true);
    }, 900);

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1100);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => {
      clearTimeout(landingTimer);
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);


  return (
    <main className="min-h-screen">
      <LandingPage isVisible={showLanding} />
      <AboutPage />
      <ExperiencePage />
      <Projects />

      {isLoading && <Loader isFading={isFading} />}
    </main>
  );
}

export default App;
