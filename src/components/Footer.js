import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  const sections = [
    {
      sectionName: "Company",
      list: [
        "About",
        "Careers",
        "Catalog",
        "Professional Certificates",
        "Become A Partner",
      ],
    },
    {
      sectionName: "Community",
      list: ["Learners", "Partners", "Developers", "Blog", "Teaching Center"],
    },
    {
      sectionName: "More",
      list: ["Terms", "Privacy", "Help", "Contact", "Affiliates"],
    },
    {
      sectionName: "Follow-Us",
      type: "icon",
      list: [
        <BsFacebook />,
        <BsInstagram />,
        <BsLinkedin />,
        <BsTwitter />,
        <BsYoutube />,
      ],
    },
  ];

  // const isIcon = (type, list) => {
  //   if (type == "icon") {
  //     return <FontAwesomeIcon icon={list} />;
  //   } else {
  //     return <p>{list}</p>;
  //   }
  // };

  const sectionItems = sections.map((section, index) => (
    <div className="footer-col" key={index}>
      <h5 className="section">{section.sectionName}</h5>
      {section.list.map((list, indexId) => (
        <p key={indexId} className="list">
          {list}
        </p>
      ))}
    </div>
  ));
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-sections">{sectionItems}</div>
      </div>
    </footer>
  );
}
