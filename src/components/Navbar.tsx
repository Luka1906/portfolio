import type { IconType } from "react-icons";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { AnimatePresence, motion } from "motion/react";
import resume from "../assets/Luka Matovic - Resume.pdf";

import { useEffect, useState, useRef } from "react";

import AnimatedLink from "./ui/AnimatedLink";
import MobileMenu from "./ui/MobileMenu";

type NavItem = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Luka1906",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lukamatovic/",
    icon: IoLogoLinkedin,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isNavigating = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#about, #experience, #projects, #contact",
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Don't change the active link during navigation
      if (isNavigating.current) return;

      // Always highlight Contact at the bottom
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Find the active section
      const activationLine = window.innerHeight * 0.35;

      const currentSection = Array.from(sections)
        .filter(
          (section) => section.getBoundingClientRect().top <= activationLine,
        )
        .at(-1);

      setActiveSection(currentSection?.id || "");
    };

    // Unlock navigation when scrolling finishes
    const handleScrollEnd = () => {
      isNavigating.current = false;
      handleScroll();
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  // Set hamburger menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b px-10 py-2.5 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-accent/40 bg-navbar/85 shadow-lg shadow-black/10 backdrop-blur-md"
            : "border-navbar-border bg-navbar"
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center text-5xl">
            <a href="/">
              <h1 className="font-accent font-semibold tracking-[-0.04em]">
                LM
              </h1>
            </a>

            <span className="text-accent">.</span>
          </div>

          {/* Navigation links */}
          <ul className="hidden lg:flex gap-12 text-base">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => {
                      if (activeSection === sectionId) return;
                      setActiveSection(sectionId);
                      isNavigating.current = true;
                    }}
                    className="group relative inline-block py-2 text-primary-text transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-accent transition-all duration-300 ease-out group-hover:w-full ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Social links and resume */}
          <div className="hidden lg:flex items-center gap-7.5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-primary-text transition-colors duration-200 hover:text-accent"
              >
                <Icon size={22} />
              </motion.a>
            ))}

            <AnimatedLink
              download
              href={resume}
              className="flex items-center gap-3 rounded-lg border border-accent bg-navbar px-3 py-2.5 xl:px-5 xl:py-3.5 cursor-pointer "
            >
              <span className="xl:text-base text-sm">Resume</span>
              <BsDownload className="text-accent text-lg xl:text-xl" />
            </AnimatedLink>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="relative flex cursor-pointer items-center justify-center lg:hidden rounded-full p-6 hover:bg-accent/10"
          >
            {/* Top line */}
            <motion.span
              className="absolute h-[2px] rounded-full bg-accent"
              initial={false}
              animate={{
                width: 28,
                y: isMenuOpen ? 0 : -6,
                rotate: isMenuOpen ? 45 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 20,
                mass: 0.3,
              }}
            />

            {/* Bottom line */}
            <motion.span
              className="absolute h-[2px] rounded-full bg-accent"
              initial={false}
              animate={{
                width: isMenuOpen ? 28 : 20,
                y: isMenuOpen ? 0 : 6,
                rotate: isMenuOpen ? -45 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 12,
                mass: 0.3,
              }}
            />
          </motion.button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
        </AnimatePresence>
      </header>
    </div>
  );
}
