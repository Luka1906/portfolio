import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar";

interface LandingPageProps {
    isVisible: boolean
}

export default function LandingPage ({isVisible}:LandingPageProps) {
    return <div className={`min-h-screen transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <Navbar/>
        <Hero/>
    </div>
}