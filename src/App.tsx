import LandingPage from "./pages/LandingPage";
import Loader from "./components/ui/Loader";
import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";

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
      <div>
        <LandingPage isVisible={showLanding} />
        {isLoading && <Loader isFading={isFading} />}
      </div>
      <AboutPage/>
    </main>
  );
}

export default App;
