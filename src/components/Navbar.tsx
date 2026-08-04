import type { IconType } from "react-icons";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

export default function Navbar() {
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
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: "GitHub",
      href: "https://github.com/Luka1906",
      icon: IoLogoLinkedin,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lukamatovic/",
      icon: FaGithub,
    },
  ];
  return (
    <header className="bg-navbar px-10 py-2.5  border-b border-border ">
      <nav className="flex items-center justify-between">
        <div className="flex items-center text-5xl">
          <h1 className="font-display  font-semibold tracking-[-0.04em]">LM</h1>
          <span className="text-accent">.</span>
        </div>
        <ul className="flex gap-12 text-base">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
        <div className="flex gap-7.5 items-center">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={22} />
            </a>
          ))}
          <button className="flex items-center px-5 py-3.5 gap-3 border border-accent rounded-lg">
            <p>Resume</p>
            <BsDownload className="text-accent" size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
