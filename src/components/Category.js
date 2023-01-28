import React from "react";
import "./Category.css";

export default function Category() {
  const subjects = [
    {
      categoryName: "Development",
      topics: ["Python", "Web Development", "Machine Learning"],
    },
    {
      categoryName: "Business",
      topics: ["Financial Analysis", "SQL", "SAP"],
    },
    {
      categoryName: "IT & Software",
      topics: ["AWS Certification", "Ethical Hacking", "Cyber Security"],
    },
    {
      categoryName: "Design",
      topics: ["Photoshop", "Graphic Design", "Drawing"],
    },
  ];
  const categories = subjects.map((subject) => (
    <div className="subjects">
      <h4>{subject.categoryName}</h4>
      {subject.topics.map((topic) => (
        <p>{topic}</p>
      ))}
    </div>
  ));
  return (
    <div className="category-heading">
      <h3>Featured topics by category</h3>
      <div className="category-subjects">{categories}</div>
    </div>
  );
}
