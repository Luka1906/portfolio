import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import Projects from "./components/ProjectSection/Projects";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 overflow-hidden">
        <LandingPage />
        <AboutPage />
        <ExperiencePage />
        <Projects />
        <ContactPage />
      </main>
    </>
  );
}

export default App;
