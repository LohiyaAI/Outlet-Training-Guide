import { useState } from "react";
import "./Navbar.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import type { Vertical } from "../../types/vertical";
import type { Language } from "../../types/step";

interface NavbarProps {
  selectedVertical: Vertical;
  setSelectedVertical: React.Dispatch<React.SetStateAction<Vertical>>;
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  selectedVertical,
  setSelectedVertical,
  selectedLanguage,
  setSelectedLanguage,
  sidebarOpen,
  setSidebarOpen,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const verticals: Vertical[] = [
    "Kirana",
    "Opticals",
    "Apparel",
    "Electronics",
  ];

  return (
    <header className="navbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu />
      </button>
      <h2 className="navbar-title">
        Outlet Training Guide
      </h2>
      <div className="navbar-right">
        <div className="language-selector">
          <button
            type="button"
            className={`lang-btn ${selectedLanguage === "en" ? "active" : ""}`}
            onClick={() => setSelectedLanguage("en")}
          >
            English
          </button>
          <button
            type="button"
            className={`lang-btn ${selectedLanguage === "hi" ? "active" : ""}`}
            onClick={() => setSelectedLanguage("hi")}
          >
            हिन्दी
          </button>
        </div>
        <div className="vertical-selector">
          <button
            className="vertical-button"
            onClick={() => setOpen(!open)}
          >
            {selectedVertical}
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {open && (
            <div className="vertical-menu">
              {verticals.map((vertical) => (
                <div
                  key={vertical}
                  className={`vertical-item ${
                    selectedVertical === vertical ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedVertical(vertical);
                    setOpen(false);
                  }}
                >
                  {vertical}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}