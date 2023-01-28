import React from "react";
import "./Nav_tab.css";

export default function Nav_tab() {
  let activeTab = 0;
  const selectTab = () => {
    console.log(activeTab, "Active Tab");
  };

  const navSection = [
    { navTab: "Development", navLink: "#" },
    { navTab: "Graphic Design", navLink: "#" },
    { navTab: "Marketing", navLink: "#" },
    { navTab: "Finance", navLink: "#" },
    { navTab: "Accountancy", navLink: "#" },
  ];

  const tabs = navSection.map((section, index) => (
    <a
      key={index}
      className={`nav-link ${index === activeTab ? "active" : ""}`}
      aria-current="page"
      href="#"
      onClick={() => selectTab()}
    >
      {section.navTab}
    </a>
  ));
  return (
    <nav className="nav-tab nav nav-pills justify-content-center">{tabs}</nav>
  );
}
